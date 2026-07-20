import express from 'express'
import cors from 'cors'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataDir = path.join(__dirname, 'data')
const contactosFile = path.join(dataDir, 'contactos.json')

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

async function readContactos() {
  try {
    const raw = await fs.readFile(contactosFile, 'utf-8')
    return JSON.parse(raw)
  } catch {
    return []
  }
}

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.post('/api/contacto', async (req, res) => {
  const { nombre, email, telefono, tipoCliente, categoria, mensaje, consentimiento, marketing } = req.body ?? {}

  if (!nombre || !email || !telefono || !mensaje || !consentimiento) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' })
  }

  const contacto = {
    id: Date.now().toString(36),
    nombre,
    email,
    telefono,
    tipoCliente: tipoCliente ?? null,
    categoria: categoria ?? null,
    mensaje,
    marketing: Boolean(marketing),
    fecha: new Date().toISOString(),
  }

  const contactos = await readContactos()
  contactos.push(contacto)
  await fs.mkdir(dataDir, { recursive: true })
  await fs.writeFile(contactosFile, JSON.stringify(contactos, null, 2))

  console.log('Nueva consulta de contacto:', contacto)
  res.status(201).json({ ok: true })
})

app.listen(PORT, () => {
  console.log(`API de Mujica Seguros escuchando en http://localhost:${PORT}`)
})

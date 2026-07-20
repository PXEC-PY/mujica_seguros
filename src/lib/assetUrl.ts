/**
 * Resuelve una ruta absoluta de la carpeta `public` (ej. '/images/foo.png')
 * respetando el base path configurado en Vite (ej. '/mujica_seguros/' en GitHub Pages).
 */
export function assetUrl(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

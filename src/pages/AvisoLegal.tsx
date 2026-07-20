import { company } from '../data/company'
import { useLocale } from '../i18n/LocaleContext'
import type { Locale } from '../i18n/config'

const bcpLink = (
  <a href="https://www.bcp.gov.py" target="_blank" rel="noreferrer" className="text-brandred underline">
    www.bcp.gov.py
  </a>
)

function Content({ locale }: { locale: Locale }) {
  if (locale === 'en') {
    return (
      <>
        <h1 className="font-serif text-3xl text-navy">Legal Notice</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-navy/80">
          <p>
            <strong>1. Identification.</strong> This website belongs to {company.legalName}{' '}
            [registered name pending], hereinafter «{company.brandName}», an insurance broker
            licensed by the Superintendencia de Seguros of the Central Bank of Paraguay, License
            No. {company.matricula}, Tax ID {company.ruc}, domiciled at {company.address}, Republic
            of Paraguay. Contact: {company.phone} / {company.email}.
          </p>
          <p>
            <strong>2. Nature of the business.</strong> {company.brandName} is an insurance broker:
            it intermediates between interested parties and insurance companies authorized to
            operate in Paraguay. It does not issue policies or assume risk. Insurance contracts
            are entered into directly with the chosen insurance company, which is responsible for
            coverage and claims payment.
          </p>
          <p>
            <strong>3. Nature of the information.</strong> The content of this site is informative
            and for guidance only. It does not constitute a contractual offer or definitive
            advice. The terms, coverage, exclusions and premiums of each policy are those stated
            in the policy issued by the relevant insurer. Quotes provided on this site or its
            forms are estimates and are subject to confirmation.
          </p>
          <p>
            <strong>4. License verification.</strong> {company.brandName}’s license can be
            verified in the public records of the Superintendencia de Seguros of the Central Bank
            of Paraguay ({bcpLink}).
          </p>
          <p>
            <strong>5. Intellectual property.</strong> The texts, logos and images on this site
            belong to {company.brandName} or their respective owners and may not be reproduced
            without authorization.
          </p>
          <p>
            <strong>6. Liability.</strong> {company.brandName} strives to keep the information up
            to date, but does not guarantee the absence of errors or uninterrupted availability of
            the site. Links to third-party sites are provided for convenience only.
          </p>
          <p>
            <strong>7. Inquiries and complaints.</strong> For any inquiry or complaint you may
            write to {company.email} or call {company.phone}. You may also contact the
            Superintendencia de Seguros (BCP) or the Secretaría de Defensa del Consumidor
            (SEDECO), as applicable.
          </p>
          <p>
            <strong>8. Governing law.</strong> This site is governed by the laws of the Republic
            of Paraguay, in particular Insurance Law No. 827/96, Electronic Commerce Law No.
            4868/13, Consumer Protection Law No. 1334/98, and the regulations of the
            Superintendencia de Seguros.
          </p>
          <p className="rounded border border-amber-200 bg-amber-50 p-4 text-xs text-amber-800">
            Internal note (do not publish): the Tax ID, license number, resolution and
            titleholder(s) in this draft are fictitious. Replace with the real data before
            publishing, and have the full text — in every language — confirmed by local counsel in
            accordance with Res. SS.SG. N° 190/2025 and related regulations.
          </p>
        </div>
      </>
    )
  }

  if (locale === 'pt') {
    return (
      <>
        <h1 className="font-serif text-3xl text-navy">Aviso Legal</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-navy/80">
          <p>
            <strong>1. Identificação.</strong> Este site pertence a {company.legalName} [denominação
            registrada pendente] (doravante, «{company.brandName}»), corretora de seguros
            registrada junto à Superintendencia de Seguros do Banco Central do Paraguai, Matrícula
            N° {company.matricula}, RUC {company.ruc}, com domicílio em {company.address},
            República do Paraguai. Contato: {company.phone} / {company.email}.
          </p>
          <p>
            <strong>2. Natureza da atividade.</strong> A {company.brandName} é uma corretora de
            seguros: intermedia entre os interessados e as seguradoras autorizadas a operar no
            Paraguai. Não emite apólices nem assume riscos. Os contratos de seguro são celebrados
            diretamente com a seguradora escolhida, que é responsável pelas coberturas e pelo
            pagamento de sinistros.
          </p>
          <p>
            <strong>3. Caráter da informação.</strong> O conteúdo deste site é informativo e
            orientativo. Não constitui uma oferta contratual nem consultoria definitiva. As
            condições, coberturas, exclusões e prêmios de cada seguro são as que constam na
            apólice emitida pela seguradora correspondente. As cotações comunicadas por este site
            ou seus formulários são estimativas e estão sujeitas a confirmação.
          </p>
          <p>
            <strong>4. Verificação do registro.</strong> A habilitação da {company.brandName} pode
            ser verificada nos registros públicos da Superintendencia de Seguros do Banco Central
            do Paraguai ({bcpLink}).
          </p>
          <p>
            <strong>5. Propriedade intelectual.</strong> Os textos, logotipos e imagens deste site
            pertencem à {company.brandName} ou a seus respectivos titulares e não podem ser
            reproduzidos sem autorização.
          </p>
          <p>
            <strong>6. Responsabilidade.</strong> A {company.brandName} procura manter a
            informação atualizada, mas não garante a ausência de erros nem a disponibilidade
            ininterrupta do site. Os links para sites de terceiros são oferecidos apenas por
            conveniência.
          </p>
          <p>
            <strong>7. Consultas e reclamações.</strong> Para qualquer consulta ou reclamação, você
            pode escrever para {company.email} ou ligar para {company.phone}. Também pode se
            dirigir à Superintendencia de Seguros (BCP) ou à Secretaría de Defensa del Consumidor
            (SEDECO), conforme o caso.
          </p>
          <p>
            <strong>8. Lei aplicável.</strong> Este site é regido pelas leis da República do
            Paraguai, em particular a Lei N° 827/96 de Seguros, a Lei N° 4868/13 de Comércio
            Eletrônico, a Lei N° 1334/98 de Defesa do Consumidor e as normas da Superintendencia de
            Seguros.
          </p>
          <p className="rounded border border-amber-200 bg-amber-50 p-4 text-xs text-amber-800">
            Nota interna (não publicar): RUC, número de matrícula, resolução e titular(es) deste
            rascunho são fictícios. Substituir pelos dados reais antes de publicar, e fazer
            confirmar o texto completo — em todos os idiomas — por um advogado local, conforme a
            Res. SS.SG. N° 190/2025 e normas complementares.
          </p>
        </div>
      </>
    )
  }

  return (
    <>
      <h1 className="font-serif text-3xl text-navy">Aviso Legal</h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-navy/80">
        <p>
          <strong>1. Identificación.</strong> Este sitio web pertenece a {company.legalName}{' '}
          [denominación registrada] (en adelante, «{company.brandName}»), corredor de seguros
          matriculado ante la Superintendencia de Seguros del Banco Central del Paraguay,
          Matrícula N° {company.matricula}, RUC {company.ruc}, con domicilio en {company.address}
          , República del Paraguay. Contacto: {company.phone} / {company.email}.
        </p>
        <p>
          <strong>2. Naturaleza de la actividad.</strong> {company.brandName} es un corredor de
          seguros: intermedia entre los interesados y las compañías aseguradoras autorizadas a
          operar en Paraguay. No emite pólizas ni asume riesgos. Los contratos de seguro se
          celebran directamente con la compañía aseguradora elegida, que es la responsable de las
          coberturas y del pago de siniestros.
        </p>
        <p>
          <strong>3. Carácter de la información.</strong> El contenido de este sitio es
          informativo y orientativo. No constituye una oferta contractual ni asesoramiento
          definitivo. Las condiciones, coberturas, exclusiones y primas de cada seguro son las que
          consten en la póliza emitida por la aseguradora correspondiente. Las cotizaciones
          comunicadas por este sitio o sus formularios son estimativas y están sujetas a
          confirmación.
        </p>
        <p>
          <strong>4. Verificación de la matrícula.</strong> La habilitación de {company.brandName}{' '}
          puede verificarse en los registros públicos de la Superintendencia de Seguros del Banco
          Central del Paraguay ({bcpLink}).
        </p>
        <p>
          <strong>5. Propiedad intelectual.</strong> Los textos, logotipos e imágenes de este
          sitio pertenecen a {company.brandName} o a sus respectivos titulares y no pueden
          reproducirse sin autorización.
        </p>
        <p>
          <strong>6. Responsabilidad.</strong> {company.brandName} procura mantener la información
          actualizada, pero no garantiza la ausencia de errores ni la disponibilidad
          ininterrumpida del sitio. Los enlaces a sitios de terceros se ofrecen solo por
          conveniencia.
        </p>
        <p>
          <strong>7. Consultas y reclamos.</strong> Ante cualquier consulta o reclamo puede
          escribir a {company.email} o llamar al {company.phone}. Asimismo, puede dirigirse a la
          Superintendencia de Seguros (BCP) o a la Secretaría de Defensa del Consumidor (SEDECO),
          según corresponda.
        </p>
        <p>
          <strong>8. Ley aplicable.</strong> Este sitio se rige por las leyes de la República del
          Paraguay, en particular la Ley N° 827/96 de Seguros, la Ley N° 4868/13 de Comercio
          Electrónico, la Ley N° 1334/98 de Defensa del Consumidor y la normativa de la
          Superintendencia de Seguros.
        </p>
        <p className="rounded border border-amber-200 bg-amber-50 p-4 text-xs text-amber-800">
          Nota interna (no publicar): RUC, N° de matrícula, resolución y titular/es de este
          borrador son ficticios. Reemplazar por los datos reales antes de publicar, y hacer
          confirmar el texto completo —en los tres idiomas— por un abogado local conforme a la
          Res. SS.SG. N° 190/2025 y medidas complementarias.
        </p>
      </div>
    </>
  )
}

export default function AvisoLegal() {
  const { locale } = useLocale()
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Content locale={locale} />
    </div>
  )
}

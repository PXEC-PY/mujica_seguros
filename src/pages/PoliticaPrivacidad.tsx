import { company } from '../data/company'
import { useLocale } from '../i18n/LocaleContext'
import type { Locale } from '../i18n/config'

function Content({ locale }: { locale: Locale }) {
  if (locale === 'en') {
    return (
      <>
        <h1 className="font-serif text-3xl text-navy">Privacy Policy</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-navy/80">
          <p>
            <strong>1. Data controller.</strong> {company.legalName} [registered name pending],
            Tax ID {company.ruc}, domiciled at {company.address} («{company.brandName}»), is
            responsible for processing the personal data collected through this site. Contact for
            data matters: {company.email}.
          </p>
          <p>
            <strong>2. Data we collect.</strong> The data you provide in contact or quote forms
            (name, ID, phone, email, details of the asset or risk to be insured) and basic
            technical browsing data (cookies, IP address).
          </p>
          <p>
            <strong>3. Purpose.</strong> We use your data to: (a) respond to inquiries and prepare
            insurance quotes; (b) manage intermediation with insurance companies; (c) support
            policy and claims management; and (d) send you information about our services, only if
            you agree to it.
          </p>
          <p>
            <strong>4. Basis and consent.</strong> We process your data with your free, express and
            informed consent, given when you submit the forms, and to the extent necessary to
            manage the requested insurance. You may withdraw your consent at any time, at no cost.
          </p>
          <p>
            <strong>5. Sharing.</strong> Your data is shared only with the authorized insurance
            companies with which your insurance is quoted or managed, and with authorities when
            required by law. We do not sell or transfer your data to third parties for advertising
            purposes.
          </p>
          <p>
            <strong>6. Retention and security.</strong> We retain data for as long as the
            relationship lasts and applicable legal deadlines require, and apply reasonable
            technical and organizational measures to protect it against unauthorized access, loss
            or alteration.
          </p>
          <p>
            <strong>7. Your rights.</strong> You may request, at any time and free of charge,
            access, rectification, updating, objection, deletion or portability of your data by
            writing to {company.email}. We will respond within a reasonable time, in accordance
            with Personal Data Protection Law No. 7593/2025 and other applicable regulations.
          </p>
          <p>
            <strong>8. Cookies.</strong> This site uses technical cookies necessary for its
            operation and, if you accept them, usage-measurement cookies. You can configure your
            browser to reject them.
          </p>
          <p>
            <strong>9. Changes.</strong> This policy may be updated; the current version will
            always be published on this site. Last updated: {company.privacyUpdatedAt}.
          </p>
          <p className="rounded border border-amber-200 bg-amber-50 p-4 text-xs text-amber-800">
            Internal note (do not publish): the Tax ID and titleholder(s) in this draft are
            fictitious. Replace with the real data before publishing.
          </p>
        </div>
      </>
    )
  }

  if (locale === 'pt') {
    return (
      <>
        <h1 className="font-serif text-3xl text-navy">Política de Privacidade</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-navy/80">
          <p>
            <strong>1. Responsável.</strong> {company.legalName} [denominação registrada
            pendente], RUC {company.ruc}, com domicílio em {company.address} («{company.brandName}
            »), é responsável pelo tratamento dos dados pessoais coletados através deste site.
            Contato para assuntos de dados: {company.email}.
          </p>
          <p>
            <strong>2. Dados que coletamos.</strong> Os que você nos fornece em formulários de
            contato ou cotação (nome, documento, telefone, e-mail, dados do bem ou risco a
            segurar) e dados técnicos básicos de navegação (cookies, endereço IP).
          </p>
          <p>
            <strong>3. Finalidade.</strong> Usamos seus dados para: (a) responder consultas e
            preparar cotações de seguros; (b) gerenciar a intermediação com as seguradoras; (c)
            acompanhar a gestão de apólices e sinistros; e (d) enviar informações sobre nossos
            serviços, somente se você aceitar.
          </p>
          <p>
            <strong>4. Base e consentimento.</strong> Tratamos seus dados com seu consentimento
            livre, expresso e informado, concedido ao enviar os formulários, e na medida
            necessária para gerenciar o seguro solicitado. Você pode revogar seu consentimento a
            qualquer momento, sem custo.
          </p>
          <p>
            <strong>5. Compartilhamento.</strong> Seus dados são compartilhados apenas com as
            seguradoras autorizadas junto às quais se cotiza ou gerencia seu seguro, e com
            autoridades quando exigido por lei. Não vendemos nem cedemos seus dados a terceiros
            para fins publicitários.
          </p>
          <p>
            <strong>6. Conservação e segurança.</strong> Conservamos os dados enquanto durar a
            relação e os prazos legais aplicáveis, e aplicamos medidas técnicas e organizacionais
            razoáveis para protegê-los contra acesso não autorizado, perda ou alteração.
          </p>
          <p>
            <strong>7. Seus direitos.</strong> Você pode solicitar a qualquer momento e
            gratuitamente o acesso, retificação, atualização, oposição, supressão ou
            portabilidade de seus dados, escrevendo para {company.email}. Responderemos dentro de
            um prazo razoável, conforme a Lei N° 7593/2025 de Proteção de Dados Pessoais e demais
            normas aplicáveis.
          </p>
          <p>
            <strong>8. Cookies.</strong> Este site utiliza cookies técnicos necessários para seu
            funcionamento e, se você os aceitar, cookies de medição de uso. Você pode configurar
            seu navegador para rejeitá-los.
          </p>
          <p>
            <strong>9. Alterações.</strong> Esta política pode ser atualizada; a versão vigente
            estará sempre publicada neste site. Última atualização: {company.privacyUpdatedAt}.
          </p>
          <p className="rounded border border-amber-200 bg-amber-50 p-4 text-xs text-amber-800">
            Nota interna (não publicar): RUC e titular(es) deste rascunho são fictícios.
            Substituir pelos dados reais antes de publicar.
          </p>
        </div>
      </>
    )
  }

  return (
    <>
      <h1 className="font-serif text-3xl text-navy">Política de Privacidad</h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-navy/80">
        <p>
          <strong>1. Responsable.</strong> {company.legalName} [denominación registrada], RUC{' '}
          {company.ruc}, con domicilio en {company.address} («{company.brandName}»), es
          responsable del tratamiento de los datos personales recogidos a través de este sitio.
          Contacto para temas de datos: {company.email}.
        </p>
        <p>
          <strong>2. Datos que recolectamos.</strong> Los que usted nos facilita en formularios de
          contacto o cotización (nombre, documento, teléfono, correo, datos del bien o riesgo a
          asegurar) y datos técnicos básicos de navegación (cookies, dirección IP).
        </p>
        <p>
          <strong>3. Finalidad.</strong> Usamos sus datos para: (a) responder consultas y preparar
          cotizaciones de seguros; (b) gestionar la intermediación con las compañías aseguradoras;
          (c) acompañar la gestión de pólizas y siniestros; y (d) enviarle información sobre
          nuestros servicios, solo si usted lo acepta.
        </p>
        <p>
          <strong>4. Base y consentimiento.</strong> Tratamos sus datos con su consentimiento
          libre, expreso e informado, que usted otorga al enviar los formularios, y en la medida
          necesaria para gestionar el seguro solicitado. Puede revocar su consentimiento en
          cualquier momento, sin costo.
        </p>
        <p>
          <strong>5. Compartición.</strong> Sus datos se comparten únicamente con las compañías
          aseguradoras autorizadas ante las que se cotiza o gestiona su seguro, y con autoridades
          cuando la ley lo exige. No vendemos ni cedemos sus datos a terceros con fines
          publicitarios.
        </p>
        <p>
          <strong>6. Conservación y seguridad.</strong> Conservamos los datos mientras dure la
          relación y los plazos legales aplicables, y aplicamos medidas técnicas y organizativas
          razonables para protegerlos contra acceso no autorizado, pérdida o alteración.
        </p>
        <p>
          <strong>7. Sus derechos.</strong> Usted puede solicitar en cualquier momento y en forma
          gratuita el acceso, rectificación, actualización, oposición, supresión o portabilidad de
          sus datos, escribiendo a {company.email}. Responderemos dentro de un plazo razonable,
          conforme a la Ley N° 7593/2025 de Protección de Datos Personales y demás normas
          aplicables.
        </p>
        <p>
          <strong>8. Cookies.</strong> Este sitio utiliza cookies técnicas necesarias para su
          funcionamiento y, si usted las acepta, cookies de medición de uso. Puede configurar su
          navegador para rechazarlas.
        </p>
        <p>
          <strong>9. Cambios.</strong> Esta política puede actualizarse; la versión vigente estará
          siempre publicada en este sitio. Última actualización: {company.privacyUpdatedAt}.
        </p>
        <p className="rounded border border-amber-200 bg-amber-50 p-4 text-xs text-amber-800">
          Nota interna (no publicar): RUC y titular/es de este borrador son ficticios. Reemplazar
          por los datos reales antes de publicar.
        </p>
      </div>
    </>
  )
}

export default function PoliticaPrivacidad() {
  const { locale } = useLocale()
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Content locale={locale} />
    </div>
  )
}

interface EmailTemplateProps {
  firstName: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName
}) => (
  <div>
    <h1>Hola {firstName}, gracias por utilizar mi servicio.</h1>
  </div>
)

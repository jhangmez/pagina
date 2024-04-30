interface EmailTemplateProps {
  firstName: string
}

export const EmailCV: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName
}) => (
  <div>
    <h1>Hola {firstName}, este es mi CV.</h1>
  </div>
)

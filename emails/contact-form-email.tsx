interface ContactFormEmailProps {
  name: string
  email: string
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email
}) => (
  <div>
    <h3>Formulario de contacto:</h3>
    <p>Nombre: {name}</p>
    <p>Email: {email}</p>
  </div>
)

export default ContactFormEmail

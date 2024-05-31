import { Container } from "react-bootstrap";
import Contacto from '../components/Formulario';

function FormPage() {
  return (
    <Container className="pt-5">
      <h1 className="mb-4">Escribenos</h1>
      <Contacto />
    </Container>
  )
}

export default FormPage



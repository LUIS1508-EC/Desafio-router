import React from 'react'
import { Container } from "react-bootstrap";
import Formulario from '../components/Formulario';

function FormPage() {
  return (
    <Container className="pt-5">
      <h1 className="mb-4">Escribenos</h1>
      <Formulario />
    </Container>
  )
}

export default FormPage



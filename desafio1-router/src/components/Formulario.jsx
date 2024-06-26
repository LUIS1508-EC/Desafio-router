import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Formulario = () => {
    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Cuentanos, ¿en que te podemos ayudar?</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button className='btn btn-danger' type="submit">Enviar</Button>
            </Form>
            
        </>
    );
}

export default Formulario;
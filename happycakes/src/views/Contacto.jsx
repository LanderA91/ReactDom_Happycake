import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Contacto() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo:</Form.Label>
                <Form.Control type="email" placeholder="ejemplo@example.com" />
                <Form.Text className="text-muted">
                    No compartiremos tu información con nadie
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" placeholder="Detalla aquí tu pedido" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Confirmo que la información es correcta" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
    );
}


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicSample() {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://imgcentauro-a.akamaihd.net/900x900/97770951/tenis-nike-lebron-xx-masculino-img.jpg" />
      <Card.Body>
        <Card.Title>Tenis lebron XX</Card.Title>
        <Card.Text>
            Lebron XX vem o sistema de amortecimento zoom
        </Card.Text>
        <Button variant="success">Comprar</Button>
      </Card.Body>
    </Card>
    </div>
    
  );
}


export default BasicSample;
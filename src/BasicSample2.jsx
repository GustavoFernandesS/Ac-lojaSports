import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicSample2() {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/226/115/products/regata-nba-nike-swingman-boston-celtics-preta-walker-81-b0d881c6f26d384e6715914000154258-640-0.jpg" />
      <Card.Body>
        <Card.Title>Regata Celtics</Card.Title>
        <Card.Text>
            Regata em dri-fit
        </Card.Text>
        <Button variant="success">Comprar</Button>
      </Card.Body>
    </Card>
    </div>
    
  );
}


export default BasicSample2;
import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://sportamerica.fbitsstatic.net/img/b/65937aa1-f4a2-4312-a874-c56bb4d1b193.jpg" height={500}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>GoodSports</h3>
          <p>Qualidade e Segurança na entrega e compra de seu produto</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://cdn6.campograndenews.com.br/uploads/noticias/2022/09/05/fad1c6f0e723ab98bfb34c65082b9d534b1aec16.jpg" height={500}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>GoodSports</h3>
          <p>Visite a nossa loja ou adquira pelo site!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://sportamerica.fbitsstatic.net/img/b/2bb5dd54-09ab-459c-b9c0-13af43ab4085.jpg" height={500}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>GoodSports</h3>
          <p>
            Venha Garanitir as sua roupas esportivas de melhor qualidade!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
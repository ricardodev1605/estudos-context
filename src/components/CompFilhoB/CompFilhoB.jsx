import { useContext } from "react";
import { BatataContext } from "../../contexts/BatataContext";
import "./CompFilhoB.css";
import Carousel from 'react-bootstrap/Carousel';

export function CompFilhoB() {

  const resultado = useContext(BatataContext)

  return (
  <div className="filho-b">
    <h3>FILHO B</h3>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-10"
          src="https://gifs.eco.br/wp-content/uploads/2021/09/gifs-animados-de-batatas-3.gif"
          alt="Batata Frita"
        />
        <Carousel.Caption>
          <h3>Primeira foto</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-10"
          src="https://img.freepik.com/fotos-gratis/batatas-fritas-crocantes-com-ketchup-e-maionese_1150-26588.jpg?w=996&t=st=1679594583~exp=1679595183~hmac=1e00383825ae55cdd8bda4edf2a422319c4db86e9a34a9b52fa8f454f3f8db2f"
          alt="Batata Doce"
        />

        <Carousel.Caption>
          <h3>Segundo slide </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../imgs/batatapalha.jpg"
          alt="Batata Palha"
        />

        <Carousel.Caption>
          <h3>Terceiro slide</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <p>
      <b>Valor:</b>
      {resultado}
    </p>
  
  </div>
  )
}

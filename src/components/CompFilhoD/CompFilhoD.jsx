import { useContext } from "react";
import { BatataContext } from "../../contexts/BatataContext";
import "./CompFilhoD.css";
import Accordion from 'react-bootstrap/Accordion';
import Toast from 'react-bootstrap/Toast';

export function CompFilhoD() {

  const contexto = useContext(BatataContext);

  return (
  <div className="filho-d">
    <h3>Filho D</h3>
    <div className="acordiao">
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Clique aqui para uma surpresa</Accordion.Header>
        <Accordion.Body>
        {contexto}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Quando nasce se espalha rama pelo chão...</strong>
        <small>Toooooomele</small>
      </Toast.Header>
      <Toast.Body>Eu amo {contexto}</Toast.Body>
    </Toast>
    
    </div>
  ;
  </div>)
}

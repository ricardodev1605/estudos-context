import { useContext } from "react";
import { BatataContext } from "../../contexts/BatataContext";
import "./CompFilhoE.css";

export function CompFilhoE(props) {
  
  const resultado = useContext(BatataContext)

  return (
  <div className="filho-e">
    <h3>Filho E</h3>
    <p>
      <b>Valor:</b>
      {resultado}
    </p>
  </div>
  )
}

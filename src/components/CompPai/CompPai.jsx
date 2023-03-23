import { useState } from "react";
import { CompFilhoA } from "../CompFilhoA/CompFilhoA";
import { CompFilhoB } from "../CompFilhoB/CompFilhoB";
import { BatataContext } from "../../contexts/BatataContext";
import "./CompPai.css";


export function CompPai() {
// Primeiramente definimos uma informação
  // que os componentes da hierarquia irão precisar
  const [batata, setBatata] = useState("batata")

  function repetir(){
    setBatata (batata + "a")
  }
  // Props Drilling = quando temos uma hierarquia de componentes muito extensa para passar props em cada componente
  return <div className="pai">
    <h3>PAI</h3>
    <p>
      <b>Valor: </b>
      {batata}
    </p>
    <button className = "btn btn-dark" onClick={repetir}>Repetir</button>
    
    {/* Fornece o "value" para a hierarquia */}
    <BatataContext.Provider value = {batata}>
      <CompFilhoA /> 
      <CompFilhoB />
    </BatataContext.Provider>
    
  </div>;
}

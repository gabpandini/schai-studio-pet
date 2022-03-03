import React from "react"
import "./sobre.css"

function Sobre () {
    return(
        <div className="Sobre" >
          <div>
            <h2 className="Sobre__titulos" >Aonde estamos:</h2>
            <p>*endereço aqui*</p>
          </div>
          <div>
            <h2 className="Sobre__titulos" >Acompanhe-nos em nossas redes socias!</h2>
            <span>*redes sociais aqui*</span>
          </div>
          <div>
            <h2 className="Sobre__titulos" >Ou fale conosco pelo WhatsApp</h2>
            <span>*zap aqui*</span>
          </div>
        </div>
    )
}

export default Sobre;
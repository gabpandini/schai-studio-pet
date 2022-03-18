import React from "react"
import "./sobre.css"
import Whats from "../../img/whats.png"
import Instagram from "../../img/insta.png"

function Sobre () {
    return(
        <div className="Sobre" >
          <div className="Sobre__endereco">
            <h2 className="Sobre__titulos" >Aonde estamos:</h2>
            <p>Rua Theodoro Holtrup, 504 - Sala 10 - Vila Nova</p>
            <p>Blumenau/SC, 89035-300</p>
          </div>
          <div className="Sobre__redesSociais">
            <h2 className="Sobre__titulos" >Acompanhe-nos em nossas redes socias!</h2>
            <a href="https://www.instagram.com/schai.studiopet/"><img className="Sobre__img" src={Instagram} alt="Link para o Instagram" /></a>
          </div>
          <div className="Sobre__whats">
            <h2 className="Sobre__titulos" >Ou fale conosco pelo WhatsApp:</h2>
            <a href="https://api.whatsapp.com/message/YPDMFML2QSPZB1?autoload=1&app_absent=0">
              <img className="Sobre__img" src={Whats} alt="Link para o WhatsApp" />
            </a>
          </div>
        </div>
    )
}

export default Sobre;
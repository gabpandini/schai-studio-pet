/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react"
import Whats from "../../img/whats.png"
import Instagram from "../../img/insta.png"
import { Title, DivGrid, DivAddress, DivSocialMedia, DivWhats } from "./styles"

function About () {
  return(
    <DivGrid>
      <DivAddress>
        <Title>Aonde estamos:</Title>
        <p>Rua Theodoro Holtrup, 504 - Sala 10 - Vila Nova</p>
        <p>Blumenau/SC, 89035-300</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.9088928361057!2d-49.08811964883826!3d-26.906386399339176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df1f31740d0143%3A0x61195d15269cd6b8!2sSchai%20Studio%20Pet!5e0!3m2!1spt-BR!2sbr!4v1655924333734!5m2!1spt-BR!2sbr" width="400" height="300" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </DivAddress>
      <DivSocialMedia>
        <Title>Acompanhe-nos em nossas redes socias!</Title>
        <a href="https://www.instagram.com/schai.studiopet/">
          <div>
            <img src={Instagram} alt="Link para o Instagram" />
            <span>@schai.studiopet</span>
          </div>
        </a>
      </DivSocialMedia>
      <DivWhats>
        <Title>Ou fale conosco pelo WhatsApp:</Title>
        <a href="wa.me/message/YPDMFML2QSPZB1">
          <div>
            <img src={Whats} alt="Link para o WhatsApp" />
            <span>47 99606-8880</span>
          </div>
        </a>
      </DivWhats>
    </DivGrid>
  )
}

export default About;
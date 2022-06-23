import React from "react"
import Logo from "../../img/logotipo-azul.png"
import { DivMain } from "./styles";

function Blog () {
    return(
        <DivMain>
            <img src={Logo} alt="Focinho de um cachorro escrito Schai Studio Pet" />
            <h2>blog</h2>
        </DivMain>
    )
}

export default Blog;

import styled from 'styled-components'
import { primaryOrange, primaryTurquoise, turquoiseLetter } from '../../styles/colors'

export const Title = styled.h3`
  color: ${primaryOrange};
  font-size: 2.8rem;
  font-weight: 800;

	@media (max-width: 768px) {
    font-size: 1.8rem;
  }
`

export const DivGrid = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-areas: "e r" "e w";
  text-align: center;
  height: 100%;

  a {
    text-decoration: none;
  }

  img {
    margin-top: 2vh;
    width: 8vw;
  }

  @media (max-width: 768px) {
    grid-template-areas: "e" "r" "w";

    img {
      margin-top: 2vh;
      width: 15vw;
    }
  }
`

export const DivAddress = styled.div`
  grid-area: e;
  padding: 4vh 2vh 1vh;

  font-weight: 500;
  font-size: 2.0rem;
  color: ${turquoiseLetter};

  iframe {
    padding: 4%;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 4vh 2vh 0;

    iframe {
      padding: 2%;
      width: 95%
    }
  }
`

export const DivWhats = styled.div`
  grid-area: w;
  padding: 0vh 2vh 0;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 2.8rem;
    color: ${primaryTurquoise};
    font-weight: 500;
  }

  @media (max-width: 768px) {
    div {
      flex-direction: column;
      font-size: 1.8rem;
    }
  }
`

export const DivSocialMedia = styled.div`
  grid-area: r;
  padding: 4vh 2vh 0;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 2.8rem;
    color: ${primaryTurquoise};
    font-weight: 500;
  }

  @media (max-width: 768px) {
    padding: 2vh;

    div {
      flex-direction: column;
      font-size: 1.8rem;
    }
  }
`

import styled from 'styled-components'

export const Div = styled.div`
  display: grid;
  grid-template-rows: 15vh 85vh;
  grid-template-areas: "h" "b";
  font-family: Montserrat;
`

export const DivHeader = styled.div`
    grid-area: h;
`

export const DivBody = styled.div`
	grid-area: b;
`

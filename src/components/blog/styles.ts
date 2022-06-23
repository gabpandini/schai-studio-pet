import styled from 'styled-components'
import { primaryOrange } from '../../styles/colors'

export const DivMain = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 5% 0;

	text-transform: uppercase;
	color: ${primaryOrange};
	font-family: Fascinate;
	font-weight: 800;
	font-size: 4rem;

	h2 {
		padding: 2% 0 0;
	}

	img {
		width: 13vw;
    height: auto;
	}

	@media (max-width: 920px) {
		font-size: 2.1rem;
	}

	@media (max-width: 660px) {
		font-size: 1.8rem;

		img {
			width: 25vw;
		}
	}
`
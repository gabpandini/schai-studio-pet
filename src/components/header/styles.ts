import styled from 'styled-components'
import { primaryTurquoise, white } from '../../styles/colors'

export const DivMain = styled.div`
	background-color: ${primaryTurquoise};
	height: 100%;
	font-weight: 500;

	display: flex;
	align-items: center;
	justify-content: space-between;

	img {
		width: auto;
		height: 8vh;
		margin-left: 10vw;
	}

	@media (max-width: 540px) {
		img {
			height: 6vh;
		}
	}
`

export const DivLinks = styled.div`
	margin-right: 10vw;
	display: flex;
	justify-content: space-evenly;
	width: 50%;

 	.Header__div--link{
		text-decoration: none;
		color: ${white};
		font-size: 1.8rem;
	}

	.Header__div--link:hover{
		color: rgb(206, 206, 206);
	}

	@media (max-width: 850px) {
		.Header__div--link {
			font-size: 1.2rem;
		}
	}

	@media (max-width: 540px) {
		margin-left: 5%;
		text-align: center;
		flex-direction: column;
		gap: 5px;

		.Header__div--link {
			font-size: 1.0rem;
		}
	}

`

import styled from 'styled-components'
import rhk from "../../images/logo4.png"

export const BackGroundImage = styled.div`
  background-image: url(${rhk});
  background-size: cover;
  height:100vh;
  width: 100vw;

  @media screen and (max-width: 2000px) {
    background-size: contain;
    background-position: center;
    height:100vh;
    width: 100vw;
  }
  
`;


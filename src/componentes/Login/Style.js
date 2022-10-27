import styled from 'styled-components'
import fotoLogin from '../../assents/login.jpg'

export const ContainerLogin = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 3.2rem;
  &::before {
    content: '';
    display: block;
    background: url(${fotoLogin}) no-repeat center center;
    background-size: cover;
  }

  .forms {
    max-width: 40rem;
    padding: 0 1.6rem;
  }

  @media (max-width: 64rem) {
    grid-template-columns: 1fr;
    &::before {
      display: none;
    }

    .forms {
      max-width: 100%;
      padding: 0 1.6rem;
    }
  }
`

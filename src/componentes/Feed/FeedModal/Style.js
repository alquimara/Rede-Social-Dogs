import styled from 'styled-components'

export const ContainerModal = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  z-index: 1000;
  padding: 3.2rem calc(6.4rem + 1.5rem) 3.2rem 6.4rem;
  background: rgba(0, 0, 0, 0.4);

  @media (max-width: 64rem) {
    padding: 3.2rem calc(3.2rem + 1.5rem) 3.2rem 3.2rem;
  }
`

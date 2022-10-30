import styled from 'styled-components'

export const ContainerPhoto = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
  margin-bottom: 1.6rem;
  justify-items: center;

  @media (max-width: 64rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`

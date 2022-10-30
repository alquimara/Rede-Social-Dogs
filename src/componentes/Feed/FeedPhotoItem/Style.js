import styled from 'styled-components'
import IconVisualizacao from '../../../assents/visualizacao.svg'

export const ContainerPhotoItem = styled.li`
  display: grid;
  border-radius: 0.3rem;
  overflow: hidden;
  cursor: pointer;

  img {
    grid-area: 1/1;
  }
  span {
    background: rgba(0, 0, 0, 0.3);
    color: white;
    font-size: 1.6rem;
    text-align: center;
    display: none;
    align-items: center;
    justify-content: center;
    grid-area: 1/1;
    &::before {
      content: '';
      width: 1.6rem;
      height: 1rem;
      display: inline-block;
      margin-right: 0.5rem;
      background: url(${IconVisualizacao}) no-repeat;
    }
  }
  &:hover span {
    display: flex;
  }

  &:nth-child(2) {
    grid-column: 2/4;
    grid-row: span 2;
  }
  @media (max-width: 64rem) {
    grid-column: initial;
    grid-row: initial;
  }
`

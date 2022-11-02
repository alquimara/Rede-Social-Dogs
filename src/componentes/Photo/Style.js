import styled from 'styled-components'
import IconVisualizacao from '../../assents/visualizacao-black.svg'

export const ContainerPhotoContent = styled.div`
  margin: auto;
  height: 57.6rem;
  border-radius: 0.5rem;
  background: white;
  display: grid;
  grid-template-columns: 57.6rem 32rem;
  grid-template-rows: auto, 1fr, auto;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.8);
  animation: scaleUp 0.3s forwards;

  .caracteristica {
    display: flex;
    font-size: 1.6rem;
    font-weight: bold;
    margin-top: 1.6rem;
    margin-bottom: 3.2rem;

    li {
      margin-right: 3.2rem;
      &::before {
        content: '';
        display: inline-block;
        height: 2rem;
        margin-right: 0.5rem;
        position: relative;
        top: 0.3rem;
        width: 0.2rem;
        background: #333;
        margin-top: 0.5rem;
      }
    }
  }

  @keyframes scaleUp {
    to {
      opacity: initial;
      transform: initial;
    }
  }

  form {
    label {
      display: block;
    }
  }

  .details {
    padding: 3.2rem 3.2rem 0 3.2rem;
  }
  .photo {
    grid-row: 1/4;
  }
  .comments {
    padding: 0 3.2rem;
  }
  .author {
    opacity: 0.5;
    margin-bottom: 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover a {
      text-decoration: underline;
    }
  }
  .visualizacao::before {
    display: inline-block;
    content: '';
    width: 1.6rem;
    height: 1rem;
    margin-right: 0.5rem;
    background: url(${IconVisualizacao});
  }
  .comentario {
  }

  @media (max-width: 64rem) {
    height: auto;
    max-height: calc(100vh - 6.4rem);
    overflow-y: auto;
    grid-template-columns: minmax(32rem, 64rem);
    &.photo {
      grid-row: 1;
    }
  }
`

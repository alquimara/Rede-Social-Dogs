import styled from 'styled-components'
export const ContainerPhotoPost = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.2rem;
  margin-bottom: 3.2rem;
  button {
    margin-top: 1.6rem;
  }

  .preview {
    border-radius: 1.6rem;
    background-position: center center;
    background-size: cover;

    &::after {
      content: '';
      display: block;
      height: 0;
      padding-bottom: 100%;
    }
  }
`

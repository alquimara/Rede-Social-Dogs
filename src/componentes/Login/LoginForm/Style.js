import styled from 'styled-components'

export const ContainerLoginForm = styled.section`
  form {
    margin-bottom: 3.2rem;
    .linkPerdeuSenha {
      display: inline-block;
      color: #666;
      padding: 2rem 0;
      line-height: 1;
      &::after {
        content: '';
        height: 0.2rem;
        width: 100%;
        display: block;
        background: currentColor;
      }
    }

    .cadastroForm {
      margin-top: 6.4rem;
      h2 {
        font-family: var(--type-second);
        font-size: 3.2rem;
        line-height: 1;
        &::after {
          content: '';
          width: 4.8rem;
          height: 0.8rem;
          display: block;
          background: #ddd;
          border-radius: 0.3rem;
        }
      }

      p {
        margin: 3.2rem 0 3.2rem 0;
      }
    }
  }
`

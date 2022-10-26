import styled from 'styled-components'

export const ContainerInput = styled.div`
  margin-bottom: 1.6rem;

  input {
    border: 1px solid #eee;
    width: 100%;
    display: block;
    font-size: 1.6rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background: #eee;
    &:hover,
    &:focus {
      outline: none;
      border: 1px solid var(--color-first);
      box-shadow: 0 0 0 3px var(--color-third);
    }
  }
  label {
    display: block;
    font-size: 1.6rem;
    line-height: 1;
    padding-bottom: 0.8rem;
  }
  .erro {
    color: #f31;
    font-size: 1.3rem;
    margin-top: 0.5rem;
  }
`

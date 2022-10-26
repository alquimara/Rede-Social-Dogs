import styled from 'styled-components'

export const ContainerButton = styled.button`
  font-size: 1.6rem;
  font-family: var(--type-first);
  cursor: pointer;
  border: none;
  /* min-width: 12.8rem; */
  border-radius: 0.5rem;
  background: var(--color-first);
  color: var(--color-second);
  padding: 0.8rem 5rem;
  transition: 0.1s;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px var(--color-third), 0 0 0 4px var(--color-first);
  }
  &.disabled {
    opacity: 0.5;
    cursor: wait;
  }
`

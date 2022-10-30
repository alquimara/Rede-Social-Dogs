import styled from 'styled-components'
export const ContainerUser = styled.div`
  header {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    margin-bottom: 3.2rem;
    margin-top: 1.6rem;
    position: relative;
  }
  .navWeb {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.6rem;

    .NavLink,
    & button {
      background: #eee;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4rem;
      height: 4rem;
      border: 1px solid transparent;
      transition: 0.1s;
      cursor: pointer;
      &:hover,
      &:focus {
        background: white;
        box-shadow: 0 0 0 3px #eee;
        border-color: #333;
        outline: none;
      }
      &.active {
        background: #eee;
        box-shadow: 0 0 0 3px var(--color-third);
        border-color: var(--color-first);
        & svg > * {
          fill: var(--color-first);
        }
      }
    }
  }
  .mobileButton {
    background: #eee;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    padding: 0;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;
    &::after {
      content: '';
      display: block;
      width: 2.5rem;
      height: 2px;
      outline: none;
      border-radius: 2px;
      background: currentColor;
      box-shadow: 0 6px currentColor, 0 -6px currentColor;
      transition: 0.2s;
    }
    &:hover,
    &:focus,
    &.active {
      outline: none;
      background: white;
      box-shadow: 0 0 0 3px var(--color-third);
      border-color: var(--color-first);
      color: var(--color-second);
    }

    &.active::after {
      transform: rotate(-90deg);
      width: 0.4rem;
      height: 0.4rem;
      box-shadow: 0 8px currentColor, 0 -8px currentColor;
    }
  }
  .navMobile {
    display: block;
    position: absolute;
    top: 70px;
    right: 0px;
    padding: 0 1.6rem;
    background: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    pointer-events: none;
    transform: translateX(-10px);
    opacity: 0;
    .NavLink,
    & button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      width: 100%;
      border: none;
      border-bottom: 1px solid #eee;
      padding: 0.8rem 0;
      cursor: pointer;
      &:hover svg > * {
        fill: var(--color-first);
      }
      & svg {
        margin-right: 0.8rem;
      }
    }
    & button {
      border-bottom: none;
    }
  }
  .navMobileActive {
    transition: 0.3s;
    transform: initial;
    opacity: 1;
    z-index: 100;
    pointer-events: initial;
  }
`

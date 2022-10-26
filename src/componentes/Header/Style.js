import styled from 'styled-components'
import Usuario from '../../assents/usuario.svg'
export const Container = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  background: white;
  z-index: 100;
  width: 100%;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6.4rem;
  }
  .logo {
    padding: 0.8rem 0;
  }
  .login {
    display: flex;
    align-items: center;
  }
  .login::after {
    content: '';

    width: 17px;
    height: 17px;
    background: url(${Usuario}) no-repeat center center;
    margin-left: 0.8rem;
    position: relative;
    top: -1px;
  }
`

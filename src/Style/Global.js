import { createGlobalStyle } from 'styled-components'
import fotoLogin from '../assents/login.jpg'

export default createGlobalStyle`

:root{
  --type-first:Helvetica,Arial, sans-serif;
  --type-second:'Spectral', Georgia;
  --color-text: #333;
  --color-first:#fb1;
  --color-second:#764701;
  --color-third:#fea;
}
*{
  box-sizing: border-box;
  margin:0;
  padding:0;
  text-decoration: none;
  list-style: none;
}
html{
  font-size:62.5%;

}
body{
  color: var(--color-text);
  font-family: var(--type-first);
  font-size: 1.6rem;
}
a {
  color: var(--color-text)
}
img{
  display: block;
  max-width: 100%;
}
button{
  display: block;
}
.container{
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 1rem;
}
.containerBody{
  padding-top: 6.4rem;
}
.erro {
    color: #f31;
    font-size: 1.5rem;
    margin: 1rem 0;
  }
  
  .animeLeft{
    opacity: 0;
    transform: translateX(-20px);
    animation: animeLeft .3s forwards;

    @keyframes animeLeft{
      to{
        opacity:1;
        transform:initial;
      }
    }
  }
  .title{
    font-family:var(--type-second);
    font-size:4.8rem;
    line-height:1;
    margin: 1.6rem 0;
    position:relative;
    z-index: 1;
    &::after{
      content:'';
      display: block;
      width: 2.4rem;
      height: 2.4rem;
      background:var(--color-first);
      position: absolute;
      bottom:0.5rem;
      left:-0.5rem;
      border-radius: 0.2rem;
      z-index:-1;
    }
  }
`

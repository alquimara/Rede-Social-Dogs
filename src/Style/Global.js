import { createGlobalStyle } from 'styled-components'

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


`

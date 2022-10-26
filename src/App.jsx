import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './componentes/Footer/Footer'
import Header from './componentes/Header/Header'
import Home from './componentes/Home/Home'
import Login from './componentes/Login/Login'
import { UseStoreContext } from './Context/useContext'
import Global from './Style/Global'

const App = () => {
  return (
    <>
      <Global />
      <BrowserRouter>
        <UseStoreContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
          <Footer />
        </UseStoreContext>
      </BrowserRouter>
    </>
  )
}

export default App

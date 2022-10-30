import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './componentes/Footer/Footer'
import Header from './componentes/Header/Header'
import Home from './componentes/Home/Home'
import Login from './componentes/Login/Login'
import ProtectedRouter from './componentes/ProtectedRouter/ProtectedRouter'
import User from './componentes/User/User'
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
            <Route
              path="/conta/*"
              element={
                <ProtectedRouter>
                  <User />
                </ProtectedRouter>
              }
            />
          </Routes>
          <Footer />
        </UseStoreContext>
      </BrowserRouter>
    </>
  )
}

export default App

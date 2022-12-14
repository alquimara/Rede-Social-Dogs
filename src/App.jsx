import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './componentes/Erro/NotFound'
import { Footer } from './componentes/Footer/Footer'
import Header from './componentes/Header/Header'
import Home from './componentes/Home/Home'
import Login from './componentes/Login/Login'
import Photo from './componentes/Photo/Photo'
import ProtectedRouter from './componentes/ProtectedRouter/ProtectedRouter'
import User from './componentes/User/User'
import UserProfile from './componentes/User/UserProfile'
import { UseStoreContext } from './Context/useContext'
import './Style/Global.css'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <UseStoreContext>
          <Header />
          <main className="appBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login/*" element={<Login />} />
              <Route path="/foto/:id" element={<Photo />} />
              <Route path="/perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound erro={true} />} />
              <Route
                path="/conta/*"
                element={
                  <ProtectedRouter>
                    <User />
                  </ProtectedRouter>
                }
              />
            </Routes>
          </main>
          <Footer />
        </UseStoreContext>
      </BrowserRouter>
    </div>
  )
}

export default App

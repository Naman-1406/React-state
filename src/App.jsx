import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Routers , Routes , Route } from 'react-router-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Registration from './pages/Registration'
import { Home } from './pages/Home'
import SignUp from './pages/SignUp'
import '../src/assets/css/style.css'
import LocalForm from './pages/LocalForm'
import ValidForm from './pages/ValidForm'
import User from './pages/User'
import View from './CrudOp/View'
import SingleUser from './CrudOp/SingleUser'
import Update from './pages/Update'

const App = () => {
  return (
    <>
    <Routers>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Registration' element={<Registration/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/localform' element={<LocalForm/>}></Route>
        <Route path='/valid' element={<ValidForm/>}></Route>
        <Route path='/user' element={<User/>}></Route>
        <Route path='/view' element={<View/>}></Route>
        <Route path='/SingleUser/:id' element={<SingleUser />}></Route>
        <Route path='/Update/:id' element={<Update />}></Route>
      </Routes>
      <Footer/>
    </Routers>
    </>
  )
}

export default App
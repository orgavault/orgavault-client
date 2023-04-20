import React,  { useState } from 'react'
import { Routes, Route } from 'react-router'

import MainLayout from './Layout/MainLayout'
import DashLayout from './Layout/DashLayout'

import Home from './pages/Home'
import Register from './pages/Register'
import Profile from './pages/Profile'
import MainDash from './containers/Dash/MainDash/MainDash'
import Todos from './containers/Dash/Todos/Todos'
import Agenda from './containers/Dash/Agenda/Agenda'
import Passwords from './containers/Dash/Passwords/Passwords'
import Notes from './containers/Dash/Notes/Notes'


function App() {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <Routes>
      <Route path='/' element={<MainLayout isLogged={isLogged}/>}>
        <Route index element={<Home/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='/Dash' element={<DashLayout/>}>
          <Route index element={<MainDash/>}/>
          <Route path='todos' element={<Todos/>}/>
          <Route path='notes' element={<Notes/>}/>
          <Route path='passwords' element={<Passwords/>}/>
          <Route path='agenda' element={<Agenda/>}/>
        </Route>
      </Route>
    </Routes>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Projects from './pages/Projects';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path ='/sign-up' element={<SignUp/>} />
        <Route path ='/dashboard' element={<Dashboard/>} />
        <Route path ='/projects' element={<Projects/>} />
      </Routes>
    </BrowserRouter>
  )
}

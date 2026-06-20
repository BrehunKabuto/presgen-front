// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import PresentationGenerate from "./pages/presentationGenerate.page.tsx"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/Register.page.tsx'
import LoginPage from './pages/Login.page.tsx'
import Presentations from './pages/PresentationLib.page.tsx'
import { Toaster } from 'react-hot-toast'
import { MainLayout } from './fetures/navbar/ui/MainLayout.tsx'
import MePage from './pages/Me.page.tsx'
import HomePage from './pages/home/Home.pages.tsx'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
   
    <Toaster position="top-center" reverseOrder={false} toastOptions={{
      style: {
      background: 'var(--color-card)',
      color: 'var(--color-text)',
      border: '1px solid var(--color-border)',} }} />
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/auth/register' element={<RegisterPage/>} />
      <Route path='/auth/login' element={<LoginPage/>}/> 

      <Route element={<MainLayout />}>
        <Route path='/user/me' element={<MePage/>}/>
        <Route path='/presentation/generate' element={<PresentationGenerate/>} />
        <Route path='/presentation/lib' element={<Presentations/>} />
      </Route>
    </Routes>
    </BrowserRouter>,
)

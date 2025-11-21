import React from 'react'
import Sidebar from './components/sidebar'
import Chatbox from './components/chatbox'
import Login from './pages/login'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <>
 <div className='dark:bg-gradient-to-b from-[#242124] to-[#000000]'>
     <div className='flex h-screen w-screen'>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Chatbox/>}/>
         <Route path='/login' element={<Login/>}/>
          {/* <Route path='/' element={<Chatbox/>}/> */}
      </Routes>
    </div>
 </div>
      
    </>
  )
}

export default App

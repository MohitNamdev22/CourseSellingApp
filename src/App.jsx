import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './Signup'
import Appbar from './Appbar'

function App() {
  return (
    <><div style={{width:"100vW", height:"100vh", backgroundColor:"#EEEEEE"}} >
      <Appbar></Appbar>
      <Signup></Signup>
    </div>
    </>
  )
}

export default App;

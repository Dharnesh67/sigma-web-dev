import { useState } from 'react'
import { useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const handleEvent = () => {
    alert("Hey i am  Clicked")
  }
  const handlemouse =() => {
  //  {document.body.style.backgroundColor="black"}
    alert("MOuse hover")
  }
  const [input, setinput] = useState({email:'',phone:''})
  const handleinput=(e) => {
      setinput({...input,[e.target.name]:e.target.value})
      // setinput({...form,[e.target.phone]:e.target.value})
  }
  
  return (
    <>
      <div className="button">
        <button onClick={handleEvent}>CLICK ME</button>
        <button onMouseEnter={handlemouse} >Mouse</button>
        {/* <input type="text" value={input} onChange={handleinput}/> */}
        <input type="text" name='email' value={input.email} onChange={handleinput}/>
        <input type="tel" name='phone'  value={input.phone} onChange={handleinput}/>
      </div>
    </>
  )
}

export default App

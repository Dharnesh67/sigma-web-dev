import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  return (
    <>
    <div className="count">
      This Count is {count}
    </div>
    <button onClick={() => {
      setCount(count*2)
    }
    }>INC</button>
    </>
  )
}

export default App


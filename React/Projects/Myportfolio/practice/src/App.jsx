import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
// import { createLogger } from 'vite'

function App() {
  const [posts, setposts] = useState([])
  const fetchdata =async () => {
    let a= await fetch('https://jsonplaceholder.typicode.com/posts')
    let data=await a.json()
    setposts(data)
    console.log(data)
  }
  
  useEffect(() => {
   fetchdata()
  }, [])

  return (
    <> 
      <div className="container">
        {
          posts.map((item) => (
            <Card
              // key={item.id}
              id={item.id}
              userId={item.userId}
              title={item.title}
              body={item.body}
            />
          )
          )
        }
      </div>
    </>
  )
}

export default App

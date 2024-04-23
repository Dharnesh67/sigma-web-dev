import React from 'react'
import Nav from './components/Nav'
import Foot from './components/Foot'
import Card from './components/card'
import './App.css'
function App() {
  return (
    <>
      <Nav />
      <div className="cards">
        <Card title="Card 1" description="hello this is Props" />
        <Card title="Card2" description="We can pass values to props" />
        <Card title="Card 3" description="and Use Them in various things " />
      </div>
      <Foot />
    </>
  )
}

export default App
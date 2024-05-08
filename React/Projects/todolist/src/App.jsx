import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar/navbar.jsx'
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  const handledelete = (id) => {
    let newtodos =todos.filter((item) => {
      return item.id!=id;
    }
    );
    settodos(newtodos)
  }
  const handleedit = (id) => {
    let index = todos.findIndex((item) => {
      return item.id ==id
    }
    )
    console.log(index)
  }
  const handleadd = () => {
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    settodo("")
  }

  const handlechange = (e) => {
    settodo(e.target.value)
  }
  const handlecheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex((item) => {
      return item.id === id
    }
    )
    let newtodos = [...todos];
    newtodos[index].isCompleted = !newtodos[index].isCompleted;
    settodos(newtodos)
  }

  return (
    <>
      <div className="body bg-back h-screen">

        <Navbar />
        <div className="container mx-auto bg-secbg rounded-xl my-5  p-5  min-h-[80%] " >
          <div className="addtodo text-lg font-bold m-4">
            <h1>Add Tasks</h1>
            <input onChange={handlechange} value={todo} type="text" className=' rounded-lg text-xl px-2 w-1/2' />
            <button onClick={handleadd} className='bg-font hover:bg-blue-500  rounded-lg px-4 ml-10 text-lg'>Add</button>
          </div>
          <div className="todos">
            {todos.map(item => {
              return <div key={item.id} className="todo flex bg-frnt  p-2 justify-between rounded-xl m-2">
                <input name={item.id} onChange={handlecheckbox} value={item.isCompleted} type="checkbox" id="" />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                <div className="buttons">
                  <button onClick={handleedit} className='bg-font hover:bg-blue-500 transition-all font-bold   rounded-lg px-4  mx-1'>Edit</button>
                  <button onClick={() => { handledelete(item.id) }} className='bg-font hover:bg-blue-500 transition-all font-bold  rounded-lg px-4 mx-1'>Delete</button>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>

    </>
  )
}

export default App

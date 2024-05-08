import { useEffect, useInsertionEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar/navbar.jsx'
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  const [showfinished, setshowfinished] = useState(true)
  useEffect(() => {
    let todostring = localStorage.getItem("todos")
    if (todostring) {
      let t = JSON.parse(localStorage.getItem("todos"))
      settodos(t)
    }
  }, [])

  // const togglefinished =(params) => {

  // }


  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const handledelete = (id) => {
    let newtodos = todos.filter((item) => {
      return item.id != id;
    }
    );
    saveToLS();
    settodos(newtodos)
  }
  const handleedit = (id) => {
    let t = todos.filter(i => i.id == id);
    settodo(t[0].todo)
    let newtodos = todos.filter((item) => {
      return item.id != id;
    }
    );
    settodos(newtodos)
    saveToLS();
  }
  const handleadd = () => {
    if (todo.trim() !== "") {
      settodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
      settodo("")
      saveToLS();
    }
  }

  const handlechange = (e) => {
    // console.log(e.target.value); // log the value of the event target
    if (e.target.value !== "") {
      settodo(e.target.value);
    }
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
    saveToLS();
  }

  return (
    <>
      <div className="body bg-back h-screen overflow-scroll">

        <Navbar />
        <div className="container mx-auto bg-secbg rounded-xl my-5  p-5  min-h-[80%] " >
          <div className="addtodo text-lg font-bold m-4">
            <h1>Add Tasks</h1>
            <input onChange={handlechange} value={todo} type="text" className=' rounded-lg text-xl px-2 w-1/2' />
            <button onClick={handleadd} disabled={todo.length<=3} className='bg-font hover:bg-blue-500  rounded-lg px-4 ml-10 text-lg'>Save</button>
          </div>
          <input type="checkbox" checked={showfinished}  /> Show Finished
          <div className="todos">
            {todos.length === 0 && <div className='font-bold text-2xl text-center items-center justify-center'>NO TASKS TO DISPLAY</div>}
            {todos.map(item => {
              return <div key={item.id} className="todo flex bg-frnt  p-2 justify-between rounded-xl my-2">
                <div className='flex gap-5 items-start'>
                  <input  name={item.id} onChange={handlecheckbox} checked={item.isCompleted} type="checkbox" id="green-checkbox" />
                  <div className={item.isCompleted ? "line-through" : "" + "font-bold"}>{item.todo}</div>
                </div>
                <div className="buttons flex items-start">
                  <button onClick={(e) => handleedit(item.id)} className='bg-font hover:bg-blue-500 transition-all font-bold   rounded-lg px-4  mx-1'>Edit</button>
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

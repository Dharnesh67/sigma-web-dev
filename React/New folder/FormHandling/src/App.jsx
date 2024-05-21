import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from "react-hook-form";
function App() {
  const [count, setCount] = useState(0)
  // React Hook form handling
  const {
    register,
    handleSubmit,
   
    watch,
    formState: { errors,isSubmitting},
  } = useForm();
  const delay = (t)=> {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve();
      }, t*1000);
    });
  }
  
  const onSubmit = async (data) => {
    await delay(2);
    console.log(data);
  };
  return (
    <> 
      {isSubmitting && <h1>Loading...</h1>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='Username' {...register("Username",{required:{value:true,message:"REQUIRED"},minLength:{value:5,message:"MINIMUM LENGTH IS 5"},maxLength:{value:8,message:"MAXIMUM LENGTH IS 8"}})} type="text" /> 
          {errors.Username && <p>{errors.Username.message}</p>}
          <br />
          <input placeholder='Password' {...register("Password",{required:true,maxLength:6,minLength:2})} type="password"  />
          {errors.Password && <p>Password is required</p>}
          <br />
          <input disabled={isSubmitting}  type="submit"  />
        </form>
      </div>
    </>
  )
}

export default App

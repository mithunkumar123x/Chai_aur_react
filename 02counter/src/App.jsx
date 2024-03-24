import  { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let  [counter,changeCounter] =  useState(15)
  let  [counter1,setCounter1]  = useState(10)
  let [counter2, setCounter2] = useState(12)
    
  const addValue = () => {
   if(counter < 20) {   
      changeCounter(counter + 1 )
    //  console.log("clicked", counter)  
     }
  }
  const removeValue = () => {
   if(counter > 0) {
    counter = counter - 1 ;
     changeCounter(counter)
   //  console.log("clicked", counter)
   }
  }

  const changeValue = () => {
    console.log(changeValue);
    setCounter1(counter1+1)
  }

  const updateValue = () => {
//   console.log(updateValue);
    setCounter2( counter2 - 2)
  }

  useEffect( () => {
    console.log("Mithun");
  },[changeValue,updateValue,addValue,removeValue])

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>
    <button
    onClick={addValue}>Add value {counter}</button>
    <br />
    < button 
    onClick={removeValue}>remove value {counter} </button>
     <p> footer: {counter} </p>

     <button onClick={changeValue}>Click Me {counter1}</button>
     <button onClick={updateValue}>Remove Me {counter2 }</button>
    </> 
  )
}

export default App

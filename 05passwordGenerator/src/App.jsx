import { useState,useCallback,useEffect ,useRef  } from 'react'



function App() {
  const [length , setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [Password , setPassword] = useState("")
  const [isTextSelected ,setIsTextSelected] = useState(false)

  // useRef hook
  const passwordRef = useRef(null)
  
  // generate the password
  const paasswordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789" 
    if(charAllowed) str += "!@#$%^&*+=`~_[]{}"
    
    for (let i = 1 ; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
     pass += str.charAt(char)
     
    }
    setPassword(pass)

    },[length,numberAllowed,charAllowed,setPassword])

    const copyPasswordToClipboard = useCallback( () => {
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0,9)
     window.navigator.clipboard.writeText(Password)
    },[Password])
    
    useEffect(() => {
      paasswordGenerator()
    } ,[length,numberAllowed,charAllowed,paasswordGenerator ])

  return (
    
   <div className='w-full max-w-md mx-auto shadow-md
     rounded-lg px-4 py-4 my-4 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center m-3'> Password Generator</h1>
        <div className='className = "flex shadow rounded-lg
          overflow-hidden mb-4"'>
         <input 
         type="text"
         value={Password}
         className='outline-none w-full py-1 px-3'
         placeholder='password'
         readOnly 
         ref = {passwordRef}
         // when set is TextSelected to true when text is selected !
         onSelect={ () => setIsTextSelected(true)}
          />
         <button
         onClick={copyPasswordToClipboard}
         className={`outline-none bg-${isTextSelected? 'green' : 'blue'}-700 text-black
         px-3 py-0.5 shrink-0`}
         >copy</button>

        </div>
      <div className='flex text-sm gap-x-2'>
         <div className='flex items-center gap-x-1'>
           <input
           type="range"
           min={6}
           max={100}
           value={length}
           className='cursor-pointer'
           onChange={(e) => {setLength(e.target.value)}}
           />
            <label>Length: {length}</label>
        </div>
         <div className="flex items-center gap-x-1">
           <input
            type="checkbox"
            defaultChecked={numberAllowed }
            id="numberInput"
            onChange={ () => {
            setNumberAllowed((prev) => !prev);
           }}
           /> 
           <label htmlFor="numberInput">Numbers</label>  
        </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={ () => {setCharAllowed((prev) => !prev)}   
                     }
           />
             <label htmlFor="characterInput">Characters</label>
        </div> 
      </div>
    </div>
    
  )
}

export default App

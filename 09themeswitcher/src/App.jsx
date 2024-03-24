import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='p-4 bg-pink-600 text-3xl' >Theme Switcher </h1>
    </>
  )
}

export default App

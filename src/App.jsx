import { useState } from 'react'
import './App.css'
import TextBox from './textbox'



function App() {
  const [count, setCount] = useState(0) 
  return (
    <>
      <div className="card">
        <TextBox />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

    </>
  )
}

export default App

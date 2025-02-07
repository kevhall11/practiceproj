import { useState } from 'react'
import './App.css'


const Navbar = () => {

  const [imageSrc, setImageSrc] = useState("/images/Michigan-State-Spartans-Logo.png");

  const changeImage = (newImage) => {
    setImageSrc(newImage);
  };
};


function App() {
  const [count, setCount] = useState(0) 
  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

    </>
  )
}

export default App

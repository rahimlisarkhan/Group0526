import { useState } from "react"


function App() {

  const [count,setCount] = useState(0) // [0, func()]
  const [mode, setMode] = useState(false)

  // let a = 5

  function increment(){
    // a++

    const newCount = count + 1

    setCount(newCount)
  }

    function descrement(){
    // a++

    const newCount = count - 1

    setCount(newCount)
  }

  function handleMode(){

    // const newMode = !mode
    const newMode = mode == true ? false :true

    setMode(newMode)
  }

  console.log(mode);
  

  return (
    <div style={{padding:"20px",border:"1px solid gray",transition:"all .5s", backgroundColor:mode ? "#000" : "#ffff", color:mode ? "#ffff" : "#000"}}>
      <button onClick={handleMode} >Toggle Mode </button>
      <button onClick={descrement}>Descrement</button>
      <h1>{count}</h1>
      <p>{count > 10 ? "More than" : "Less than"}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default App

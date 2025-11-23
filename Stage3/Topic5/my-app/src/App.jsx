import { useEffect, useRef, useState } from "react"
import { Nav } from "./components/Nav"


function App() {
 
  const inputRef = useRef()
  const [todo,setTodo] = useState([])

  const [show,setShow] = useState(false)

  const [age,setAge] = useState(0)

  // const a = 3.14

useEffect(()=>{
    console.log("Mounted");

    // Your logic here async operations, API calls, etc.
  //  document.title = `You have todos`
  // getMovies().then( data => console.log(data))
  // getMovies().then( data => console.log(data))

},[])


 

  const handleAddTodo = () =>{

    const value = inputRef.current.value

    if(value.trim() == ""){
      alert("Empty input")
      return
    }

    const newTodo = [...todo, value]

    setTodo(newTodo)

    inputRef.current.value = ""

  }


  const handleRmvEl = (i)=>{
    const newTodo = todo.filter((item,index)=>index !==i)
    setTodo(newTodo)
  }

  const todoElements = todo.map((item,index)=> {
          return <li 
              key={"todo-item-" + index} 
              style={{cursor:"pointer"}} 
              onClick={() => handleRmvEl(index)}
              >
              {index + 1} {item}
          </li>}
        )


  return (
    <div>
      {show && <Nav age={age} />}
      <input ref={inputRef} defaultValue="Oyun" />
      <button onClick={handleAddTodo} disabled={todo.length >= 10}
      >
        add
      </button>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
      <button onClick={() => setAge(age + 1)}>
        Increase Age
      </button>

      <ul>
       {todoElements}
      </ul>

    </div>
  )
}

export default App

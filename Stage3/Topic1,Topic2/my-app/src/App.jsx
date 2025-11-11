import { useRef, useState } from "react"


function App() {
 
  const inputRef = useRef()
  const [todo,setTodo] = useState([])

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
      <input ref={inputRef} defaultValue="Oyun" />
      <button onClick={handleAddTodo} disabled={todo.length >= 10}
      >
        add
      </button>

      <ul>
       {todoElements}
      </ul>
    </div>
  )
}

export default App

import { useEffect, useRef, useState } from "react"
import { Nav } from "./components/Nav"
import axios from "axios"


function App() {
 
  const inputRef = useRef()
  const [todo,setTodo] = useState([])

  const [show,setShow] = useState(false)

  const [age,setAge] = useState(0)

  // const a = 3.14



useEffect(()=>{
    console.log("Mounted");

    axios({
      method: 'get',
      // method: 'post',
      url: 'https://jsonplaceholder.typicode.com/todos',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer your_token_here",
        // "X-Branch-id": "your_branch_id_here"
      },
      // params: { mebel: '5', type: 'cartoon' }
      // data:{
      //   title:"foo",
      //   body:"bar",
      //   userId:1
      // }
    })
    .then((response)=> {
      console.log("Fetched movies data:", response.data);
      setTodo(response.data)
    })
    .catch( (error) => {
      console.error("Error fetching movies data:", error);
    });

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


    const payload = {
      title: value,
      id: Date.now()
    } 

    // const newTodo = [payload, ...todo]
    // setTodo(newTodo)

    setTodo((prevTodo)=>[payload, ...prevTodo])

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
              {index + 1} {item.title || item}
          </li>}
        )


  return (
    <div>
      {show && <Nav age={age} />}
      <input ref={inputRef} defaultValue="Oyun" />
      <button onClick={handleAddTodo}
      //  disabled={todo.length >= 10}
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

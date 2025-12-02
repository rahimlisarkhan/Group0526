import { useEffect, useRef, useState } from "react"
import { createTodo, deleteTodo, getTodos } from "./api/todo.api"


function App() {
 
  const inputRef = useRef()
  const [todo,setTodo] = useState([])
  const [loading,setLoading] = useState(false)

  // const a = 3.14



// useEffect(()=>{
//     console.log("Mounted");

//     axios({
//       method: 'get',
//       // method: 'post',
//       url: 'https://jsonplaceholder.typicode.com/todos',
//       headers: {
//         'Content-Type': 'application/json',
//         "Authorization": "Bearer your_token_here",
//         // "X-Branch-id": "your_branch_id_here"
//       },
//       // params: { mebel: '5', type: 'cartoon' }
//       // data:{
//       //   title:"foo",
//       //   body:"bar",
//       //   userId:1
//       // }
//     })
//     .then((response)=> {
//       console.log("Fetched movies data:", response.data);
//       setTodo(response.data)
//     })
//     .catch( (error) => {
//       console.error("Error fetching movies data:", error);
//     });

//     // Your logic here async operations, API calls, etc.
//   //  document.title = `You have todos`
//   // getMovies().then( data => console.log(data))
//   // getMovies().then( data => console.log(data))

// },[])

useEffect(()=>{
   
  async function fetchData(){

    setLoading(true)

    const res = await getTodos()

    setLoading(false)

    if(res.status !== 200){
      alert("Error fetching todos")
      return
    }
    
    setTodo(res.data)
  }

  fetchData()

},[])


  const handleAddTodo = async () =>{

    const value = inputRef.current.value

    if(value.trim() == ""){
      alert("Empty input")
      return
    }


    const payload = {
      title: value,
      completed: false,
      userId: 1

      // id: Date.now()
    } 

    setLoading(true)
    const res = await createTodo(payload)
    setLoading(false)

    if(!res){
      alert("Error creating todo")
      return
    }

    if(res.status !== 201){
        alert("Error fetching todos")
        return
    }

    // const newTodo = [payload, ...todo]
    // setTodo(newTodo)

    setTodo((prevTodo)=>[payload, ...prevTodo])

    inputRef.current.value = ""

  }


  const handleRmvEl = async (id)=>{
    setLoading(true)
   const res =  await deleteTodo(id)
    
    setLoading(false)
    if(res.status !== 200){
        alert("Error fetching todos")
        return
    }

    const newTodo = todo.filter((item)=>item.id !== id)
    setTodo(newTodo)
  }

  const todoElements = todo.map((item,index)=> {
          return <li 
              key={"todo-item-" + index} 
              style={{cursor:"pointer"}} 
              onClick={() => handleRmvEl(item.id)}
              >
              {index + 1} {item.title || item}
          </li>}
        )

  return (
    <div>
      <h1>{loading ? "Loading..." : "Todos"}</h1>
      <input ref={inputRef} defaultValue="Oyun" />
      <button onClick={handleAddTodo}
      //  disabled={todo.length >= 10}
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

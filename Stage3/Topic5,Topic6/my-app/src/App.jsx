import { useCallback, useId, useMemo, useState } from "react"
import { PI } from "./constants/math"
import Button from "./components/Button"




function App({ num = 0 }) {
 
  const [count1,setCount1] = useState(0)
  const [count2,setCount2] = useState(0)

  const componentId = useId() // unique id for the component instance - d8df


  console.log("componentId",componentId);
  

  //  const pi = useRef(3.14)

  const a = useMemo(()=>{
      let result = PI + count1 + num
      return result
    },[count1, num])

  // const b = 42 + count2 // cox agir bir hesablama varsa onu state deyisende yeniden hesablamaq duzgun deyil.eger state deyisende yeniden hesablamaq lazimdirsa useMemo-dan istifade etmek lazimdir.
  const b = useMemo(()=>{
      let result = 42 + count2 
      return result
    },[count2]) // cox agir bir hesablama varsa onu state deyisende yeniden hesablamaq duzgun deyil.eger state deyisende yeniden hesablamaq lazimdirsa useMemo-dan istifade etmek lazimdir.


  const handleCount1 = useCallback(() => {
    // your logic...
    let result = num * count1
      setCount1(result)
    }, [num, count1])

  const handleCount2 = useCallback(() => {
    // your logic...
      setCount2(prev=> prev + 1)
  },[])


  return (
    <div>
     <h1>A:{a}</h1>
     <h1>B:{b}</h1>
     <button onClick={handleCount1}>Increment Count 1</button>
     <button onClick={handleCount2}>Increment Count 2</button>
     <Button>
      Click Me
     </Button>
       <Button>
      Click Me
     </Button>
       <Button>
      Click Me
     </Button>
       <Button>
      Click Me
     </Button>
     
    </div>
  )
}

export default App

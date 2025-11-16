import { useRef } from "react"


function Video() {
 
 
  const elRef = useRef()

  console.log("elRef",elRef);
  

  const handlePause = ()=>{

    elRef.current.onpause()
  }

   const handlePlay = ()=>{

    elRef.current.onplay()
  }

  return (
    <div>

    <video ref={elRef} style={{padding:"20px",border:"1px solid gray",transition:"all .5s"}}>
    </video>

    <button onClick={handlePause}>
      play
    </button>

    <button onClick={handlePlay}>
      pause
    </button>
    </div>
  )
}

export default Video

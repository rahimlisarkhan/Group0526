// import {Product as ProductJavad } from "./Product"
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
import { Button } from "./components/Button";

import { Products } from "./Product"
import { currentTime } from "./utils/date";


function App() {

  const date = currentTime();
  const name = "Javad";

  const age = 15

  const list =[1,2,3,4,5];

  const myPerson = {
    name:"Rahim",
    age:25,
    job:"Developer"
  }

  function alertUser() {
    alert(`Hello ${name}! Current time is ${date}`);
  }

  const isWorking = true;

  return (
    <div style={{padding:"20px",border:"1px solid gray"}}>
      <Header showLogo age={age} />
      <div>
        <h1>Welcome to My App : {name}</h1>
        <p>Current Time: {date}</p>
        <button onClick={alertUser}>Show Alert</button>
        <Button variant="danger" showArrow>
          Click Me
        </Button>
        <Button size="small" variant="success" showArrow>
          Another Button
        </Button>

        <Button size="large" disabled>
          Another Button
        </Button>
      </div>
      {/* <Header/> */}
      <Products 
        name={name} 
        list={list} 
        age={age} 
        myPerson={myPerson} 
        isWorking={isWorking} 
        sayUserAlert={alertUser}>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
      </Products>

      <div>
        <p>This is a simple React application.</p>
      </div>
    </div>
  )
}

export default App

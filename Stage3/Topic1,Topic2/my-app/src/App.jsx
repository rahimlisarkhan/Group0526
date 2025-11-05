// import {Product as ProductJavad } from "./Product"
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
import { Button } from "./components/Button";

import { Products } from "./Product"
import { currentTime } from "./utils/date";

import productsData from "./data/products.json";


function App() {

  console.log("productsData",productsData);
  
  const date = currentTime();
  const name = "Javad";

  const age = 15

  const list =[1,2,3,4,5];

  const myPerson = {
    name:"Rahim",
    age:25,
    job:"Developer"
  }

  function alertUser(param) {
    alert(`Hello ${name}! Current time is ${date}`);
    console.log("Parameter:", param);

  }

  const isWorking = true;

  return (
    <div style={{padding:"20px",border:"1px solid gray"}}>
      <Header showLogo age={age} />
      <div>
        <h1>Welcome to My App : {name}</h1>
        <p>Current Time: {date}</p>
        <button onClick={() => alertUser("Button Clicked")}>Show Alert</button>

        <Button size="extraLarge">
          Click Me
        </Button>

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
          {productsData.map(product => (
            <ProductCard key={product.id} {...product}/>
          ))}
      </Products>

      <div>
        <p>This is a simple React application.</p>
      </div>
    </div>
  )
}

export default App

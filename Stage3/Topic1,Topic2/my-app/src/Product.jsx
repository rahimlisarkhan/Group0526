import ProductCard from "./components/ProductCard/ProductCard";



export function Products(props) {

  console.log("props",props);

  const workingText = props.isWorking ? "is working" : "is not working";


  const renderListItems = props.list.map((item,index) => (
    <li key={`item-${index}`}>Item: {item}</li>
  ));

  function sayHello() {
    console.log("Hello from Product Component");
  }

  return (
    <div style={{padding:"20px",border:"1px solid red"}}>
      <h2>Product Component: {props.name}</h2>
  
      <p>This is the Product component.:{workingText}</p>
      <p>Age: {props.age}</p>
      <p>Person Name: {props.myPerson.name}, Age: {props.myPerson.age}, Job: {props.myPerson.job}</p>
      <h3>List of Items:</h3>
      <ul>
        {renderListItems}
      </ul>

      {/* <button onClick={()=>sayHello()}>Click Me</button> */}
      <button onClick={sayHello}>Click Me</button>
      <button onClick={props.sayUserAlert}>Show Alert from Parent</button>
       {props.children}
    </div>
  )
}

// export default Product
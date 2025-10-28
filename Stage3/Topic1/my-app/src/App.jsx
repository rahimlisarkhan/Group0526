// import {Product as ProductJavad } from "./Product"
import Header from "./components/Header/Header";
import { Product } from "./Product"
import { currentTime } from "./utils/date";

function App() {

  const date = currentTime();
  const name = "Javad";

  return (
    <div>
      <Header/>
      <div>
        <h1>Welcome to My App : {name}</h1>
        <p>Current Time: {date}</p>
      </div>
      {/* <Header/> */}
      <Product />
      <div>
        <p>This is a simple React application.</p>
      </div>
    </div>
  )
}

export default App

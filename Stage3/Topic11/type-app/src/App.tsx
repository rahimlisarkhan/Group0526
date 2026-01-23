import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { sum } from './helper/sum'
import { timeShow } from './helper/time'
import type { EmployeeProfile, Person, ResultSum, ResultSum, Role, Role, UserProfile } from './types/profile'


const mockData: UserProfile = {
  id: 1,
  username: 'johndoe',
  email: 'rahimli@gmail.com',
  address: [
    {
      street: '123 Main St',
      city: 'Anytown',
      country: 'USA',
    },
  ],
};

const mockPerson: Person = {
  fullname: "John Doe",
  age: 30,
  isActive: true
};

const mockEmployee: EmployeeProfile = {
  id: 2,
  username: 'janedoe',
  email: 'janedoe@example.com',
  address: [
    {
      street: '456 Elm St',
      city: 'Othertown',
      country: 'USA',
    },
  ],
  department: 'Engineering',
  position: 'Software Engineer',
};

function App() {
  const [count, setCount] = useState(0)

  const result = sum(150, 3);


  const userRole: Role = "guest";

  // const timeFormat = timeShow('1234');
  const timeFormat = timeShow(result);

  // monitorName("John", "Doe", true);

  // console.log('Sum:', result);


  // const a: ResultSum = false;

  const handleCount = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e);
    setCount(count + 1)
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          {userRole}
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          {timeFormat}
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React :{result}</h1>
      <div className="card">
        <button onClick={(e) => handleCount(e)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

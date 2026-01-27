import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { sum } from './helper/sum'
import { timeShow } from './helper/time'
import { Gender, type Admin, type Employee, type EmployeeProfile, type Person, type ResponseSystem, type ResponseSystemAdmin, type ResultSum, type Role, type UserProfile } from './types/profile'
import { Button } from './components/Button'
import { Header } from './components/Header'


// const mockData: UserProfile = {
//   id: 1,
//   username: 'johndoe',
//   email: 'rahimli@gmail.com',
//   gender: Gender.MALE,
//   address: [{
//     street: '123 Main St',
//     city: 'Anytown',
//     country: 'USA',
//   }],
// };

// const mockPerson: Person = {
//   fullname: "John Doe",
//   age: 30,
//   isActive: true
// };

// const mockEmployee: EmployeeProfile = {
//   id: 2,
//   username: 'janedoe',
//   email: 'janedoe@example.com',
//   address: [
//     {
//       street: '456 Elm St',
//       city: 'Othertown',
//       country: 'USA',
//     },
//   ],
//   department: 'Engineering',
//   position: 'Software Engineer',
// };



const a: ResponseSystem<Admin> = {
  data: {
    fullname: "Admin User",
    role: "system admin",
    age: 40,
    address: ["123 Admin St", "Admin City", "Admin Country"]
  },
  balance: 1000,
  createdAt: "2024-01-01T00:00:00Z"
}


const b: ResponseSystem<Employee> = {
  data: {
    name: "Employee Name",
    surname: "Employee Surname",
    role: "system employee",
    age: 28
  },
  balance: 500,
  createdAt: "2024-02-01T00:00:00Z"
}

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
        <Header />
        <a href="https://vite.dev" target="_blank">
          {userRole} {mockData.username}
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          {timeFormat}
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React :{result}</h1>
      <div className="card">
        {mockData.gender == Gender.MALE ? "Kisi" : "Qadin"}
        <button onClick={(e) => handleCount(e)}>
          count is {count}
        </button>

        <Button onClick={() => console.log('Button clicked')}>
          Click
        </Button>
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

import { useMemo } from "react";
import { useParams } from "react-router-dom"



const Conversation = () =>  {

  const { num1, operator, num2 } = useParams();


  const calcResult = useMemo(()=>{

  let result;
  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  switch (operator) {
    case 'add':
      result = number1 + number2;
      break;
    case 'subtract':
      result = number1 - number2;
      break;
    case 'multiply':
      result = number1 * number2;
      break;
    case 'divide':
      result = number1 / number2;
      break;
    default:
      result = 'Invalid operator';
  }

  return result;

},[num1, num2, operator]);


   return <div>
      <h1>Conversation Page:{calcResult}</h1>
      <h2>Result of {num1} {operator} {num2} = {calcResult}</h2>
    </div>
}

export default Conversation
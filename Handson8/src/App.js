import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "./Stylesheets/mystyle.css";
import { CurrencyConverter } from "../src/Components/CurrencyConverter";
import { useState } from 'react';
function App() {
  const [count, setCount] =useState(0);

  const sayHello = (msg)=>{
    alert(msg);
  };

  const sayWelcome = (msg) => {
    alert("Welcome "+msg);
  };

  const handleEvent = () => {
    alert("I was clicked");
  };

  const CustomButton = ({ onPress }) => {
    return (
      <button className="btn btn-info" type="button" onClick={onPress}>
        Click on me
      </button>
    );
  }

  return (
  <div className="container">
    <p>{count}</p>
    <button class="btn btn-primary" onClick={()=>{setCount(count+1);sayHello("Hello World! Speed 1 Terra Hert, Memory 1 Zetta Byte")}}>Increment</button>
    <br/>
    <button class="btn btn-danger" onClick={()=>{setCount(count-1)}}>Deccrement</button>
    <br/>
    <button class="btn btn-success" onClick={()=>sayWelcome("Chandu")}>sayWelcome</button>
    <br/>
    <CustomButton onPress={handleEvent}/>
    <CurrencyConverter/>
  </div>
  )
}

export default App;

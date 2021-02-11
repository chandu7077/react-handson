import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import OfficeSpaces from "../src/Components/OfficeSpaces";
function App() {
  const data=[{name:"DBS",rent:50000,address:"Chennai",imgurl:"images/of1.jpg"},
              {name:"DBS",rent:61000,address:"Chennai",imgurl:"images/of2.jpg"},
              {name:"DBS",rent:59999,address:"Chennai",imgurl:"images/of3.jpg"},
              {name:"DBS",rent:67000,address:"Chennai",imgurl:"images/of4.jpg"},
              {name:"DBS",rent:70000,address:"Chennai",imgurl:"images/of5.jpg"},
              {name:"DBS",rent:50000,address:"Chennai",imgurl:"images/of6.jpg"},
              ];
  return (<div className="container">
    <h1>Office Space, at Affordable Range</h1>
    <div className="row">
      <OfficeSpaces data={data}/>
    </div>
  </div>)
}

export default App;

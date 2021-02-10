import './App.css';
import ListofPlayers from "../src/Components/ListofPlayers";
import ScoreBelow70 from "../src/Components/ScoreBelow70";
import OddPlayers from "../src/Components/IndianPlayers";
import {EvenPlayers} from "../src/Components/IndianPlayers";
import {ListOfIndianPlayers} from "../src/Components/IndianPlayers";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  const playersList =[{name:"MS Dhoni",score:99},
                        {name:"Virat Kohli",score:100},
                        {name:"Sachin",score:200},
                        {name:"R Ashwin",score:20}];
  const IndianTeam=["Sachin1","Dhoni2","Virat3","Rohit4","Yuvraj5","Raina6"];
  const T20Players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
  const IndianPlayers = [...T20Players,...RanjiTrophyPlayers];
  var flag=true;
  if(flag===true) {
  return (
    <div class="container">
      <h1>List of Players: </h1>
      <ListofPlayers players={playersList}/>
      <hr/>
      <h1>List of Players who scored under 70</h1>
      <ScoreBelow70 players={playersList}/>
    </div>
  );
  }
  else {
    return (
    <div class="container">
      <h1>Indian Players</h1>
      <div>
        <h1>Odd Players: </h1>
        {OddPlayers(IndianTeam)}
        <hr/>
        <h1>Even Players</h1>
        {EvenPlayers(IndianTeam)}
      </div>
      <hr/>
      <div>
        <h1>List of Indian Players Merged</h1>
        <ListOfIndianPlayers players={IndianPlayers}/>
      </div>
    </div>
    )
  }
}

export default App;

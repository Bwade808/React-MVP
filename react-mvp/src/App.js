import React,{useEffect, useState} from "react";
import ChoreList from "./ChoreList";

function App() {
  const [choreData, setChoreData] = useState([{}]);
  useEffect(() => {
    fetch('/api')
    .then(res => res.json())
    .then(data => setChoreData(data))
    // console.log('test', choreData)
  },[choreData])
  return (
    <div className="App">
      <ChoreList choreData={choreData} />
      <h1>First chore is to {choreData.chore}<br />
      Description: {choreData.descript}<br />
      Allowance of ${choreData.allowance} on a {choreData.freq} basis</h1>
    </div>
  );
}

export default App;

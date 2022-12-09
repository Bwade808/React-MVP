import React,{useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import ChoreList from "./ChoreList";
import Header from "./Header";
import { Home } from "./Header";
import CreateList from "./CreateList";
import Settings from "./Settings";

const url = "https://chorebank-api.onrender.com";

function App() {
  const [choreData, setChoreData] = useState([{}]);
  useEffect(() => {
    fetch(`${url}/api`)
    .then(res => res.json())
    .then(data => setChoreData(data))
    // console.log('test', choreData)
  },[choreData])
  return (
    <div className="App">
        <Header />
        <div className='main-container'>
          <Routes>
            <Route path="/plan" element={<ChoreList choreData={choreData} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateList />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        
    </div>
  );
}

export default App;

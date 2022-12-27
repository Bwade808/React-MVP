import React,{useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import ChoreList from "./ChoreList";
import Header from "./Header";
import { Home } from "./Header";
import CreateList from "./CreateList";
import Settings from "./Settings";

const url = "https://chorebank-api.onrender.com";
// const url = "http://localhost:3000";
function App() {

  const [choreData, setChoreData] = useState([]);
  const [reRender, setReRender] = useState(false);
  
  const fetchChores = async () => {
    const response = await fetch(`${url}/api`);
    const newData = await response.json();
    setChoreData(newData);
  };
 
  useEffect(() => {
    fetchChores();
    console.log('test', choreData)
  },[reRender])
  return (
    <div className="App">
        <Header />
        <div className='main-container'>
          <Routes>
            <Route path="/plan" element={<ChoreList reRender={reRender} setReRender={setReRender} setChoreData={setChoreData} choreData={choreData} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateList reRender={reRender} setReRender={setReRender}/>} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        
    </div>
  );
}

export default App;

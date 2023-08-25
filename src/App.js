import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import Nav from './components/Nav'
import { supabase } from './client';


function App() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    async function fetchData(){
    try{
      //will get every column from the creators table in database
      const { data } = await supabase.from('creators').select('*')
      console.log({data}, "data and error");
      setCreators(data);
    } catch (error){
      console.log(error, "error occured in fetching database info in App.js", error)
    }
  }
  fetchData();
}, [])

  return (
    <div className="App">
      <Router>
        <Nav>
        <Routes>
          <Route path="/" element = {<ShowCreators creators={creators}/>} />
          <Route path="/view/:id" element = {<ViewCreator/>} />
          <Route path="/edit/:id" element={<EditCreator/>} />
          <Route path="/addcreator" element={<AddCreator/>} />
        </Routes>
        </Nav>
      </Router>
    </div>
  );
}

export default App;

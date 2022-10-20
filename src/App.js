import React, {useState, useEffect} from 'react'
import Container from '@mui/material/Container'
import Header from './Header'
import Card from './Card'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Women from './Women.js'
import Men from './Men.js'

function App() {
  const [data, setData] = useState([])

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/`)
    .then(res=> res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  }, [])

    return (
      <div className="App">
        <Container>
          <Header/>
          <Routes>
            <Route path="/" element={<Card data={data}/>}/>
            <Route path="/women" element={<Women data={data}/>}/>
            <Route path="/men" element={<Men data={data}/>}/>
          </Routes>
        </Container>
      </div>
    );
}

export default App;

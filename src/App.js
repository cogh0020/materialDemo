import React, {useState, useEffect} from 'react'
import Container from '@mui/material/Container'
import Header from './Header'
import Card from './Card'
import './App.css'

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
          <Card data={data} />
        </Container>
      </div>
    );
}

export default App;

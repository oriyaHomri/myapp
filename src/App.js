import React, { useState, useEffect} from 'react'
import './App.css';
import Admin from './components/Admin';
import Home from './components/Home';
import Stats from './components/Stats';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';

function App() {
  //List of prodacts
  const [listProdacts,setListProdacts]=useState([
    {title:'Shirt', price:80, description:'Girls shirt' , image:'https://m.media-amazon.com/images/I/61yZs5IUNLL._UX569_.jpg'},
    {title:'Pants', price:100, description:'Boys shorts' , image:'https://i.cubmcpaws.com/316x440/https://cdn.cubmcpaws.com/dropbox_2217211102011144.jpg'},
    {title:'Dress', price:250, description:'Girls dress' , image:'https://www.collinsdictionary.com/images/full/dress_31690953_1000.jpg'}
 ])
  // useEffect(()=>{
  //   fetch('/prodacts/').then((res)=>{return res.json()}).then((jesonRes)=>{setListProdacts(jesonRes.myProdact)})
  // })
  
 //function to add prodact
 const addProdact=(title,price,description,image)=>{
  setListProdacts([ ...listProdacts,{title:title, price:price, description:description , image:image}])
}
 //List of shoping cart
 const [listBasket,setListBasket]=useState([{title:0,price:0}])

 const addToBasket=(tite,price)=>{
  setListBasket([ ...listBasket,{title:tite,price:price}])
}
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Admin listProdacts={listProdacts} addProdact={addProdact}/>} />
          <Route path='/home' element={<Home listProdacts={listProdacts} listBasket={listBasket} addToBasket={addToBasket}/>} />
          <Route path='/stats' element={<Stats/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

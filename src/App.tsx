import React, {useEffect, useState} from 'react';
import './App.css';
import { Card } from './compoenents/Card/Card';
import { Navbar } from './compoenents/Navbar/Navbar';
import {Product} from './Product'

function App() {

  const [price, setPrice] = useState(0);
  const [numCart, setNumCart] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setPrice(products.reduce((acc, {price, quantity})=> acc + price * quantity, 0));
  }, [products]);
  
  useEffect(() => {
    setNumCart(products.reduce((acc, {quantity})=> {
      return quantity > 0 ? acc +1 : acc;
    },0));
  }, [products]);
   
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const json = await response.json();
      setProducts([...json].map((item) => {
        return {...item, quantity: 0}
      }))
      return json;
      }

   fetchData()
  }, [])
  
  return (
    <>
    <div className="container-fluid">
      <Navbar num = {numCart}></Navbar>
    </div>
    
    <div className="container">
    <h1>My Personal Shop</h1>
    <div>
          <h4><span className = "badge text-bg-secondary">Price: <span className ="price">{price} </span>  €</span></h4>
    </div>
      <div className = "row">
        {products.map((item,index) => <Card key={index} setProducts={setProducts} product={item} index={index}></Card>)}
      </div>
    </div>
    </>
  );
}

export default App;




import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import TableProduct from './components/Table';
import {getProduct} from './services';

const API_KEY = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ';
const baseUrl = `https://eshop-deve.herokuapp.com/api/v2/orders`;


function App() {

  const [products,  setProducts] = useState([])

  useEffect(() => { 
    async function loadProducts(){
      const response = await getProduct()
      if(response.status == 200){
        setProducts(response.data.orders)
      }
    }
    loadProducts()
  },[])

  console.log(products)
    return (
      <div className="App">
      <TableProduct product={products}/>
      </div>
      
    );
}

export default App;

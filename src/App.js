import './App.css';

import { useEffect, useState } from 'react';
import TableProduct from './components/Table';
import {getProduct} from './services';


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

    return (
      <div className="App">
      <TableProduct product={products}/>
      </div>
      
    );
}

export default App;

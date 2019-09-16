import React, {useState,useEffect} from 'react';
import api from "../../services/api"

// import { Container } from './styles';

export default function Products(props) {
  const [products,SetProducts] = useState([])
  const [formValue,setformValue]=useState({name:''})

  useEffect(()=>{
    async function loadProducts(){
    const { id } = props.match.params;

        const response= await api.get(`products?market_id=${id}`)
        SetProducts(response.data)
    }
    loadProducts()
  },[props])

  async function handleSubmint(){
    const response = await api.post('products',formValue)
    SetProducts([...products,response.data])
    setformValue({name:''})
}

  async function handleDelete(id){
    api.delete(`products/${id}`)
    SetProducts(products.filter(products=>products.id !== id))
  }

  return (
    <>
      <h1>Lista de produtos</h1>

      <input placeholder="Product"
      label='mercado'
      value={formValue.name}
      onChange={(event) => setformValue({...formValue, name: event.target.value})}
      />

      <button 
      type='button'
      onClick={(handleSubmint)}
      >Send</button>

      <ul>
        {products.map(product=>(
          <li
          check={product.check}
          key={product.id}>
            {product.name}
            <button 
              type='button'
              onClick={() => handleDelete(product.id)} 
            >X</button>
          </li>
        )
        )}
      </ul>
    </>
  );
}

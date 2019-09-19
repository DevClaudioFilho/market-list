import React, {useState,useEffect} from 'react';
import {MdClose} from 'react-icons/md'
import api from "../../services/api"
import { Container, MyButton } from './styles';
import { toast } from 'react-toastify';

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
    if(formValue.name ===""){
      toast.error('Products not defined')
    }
    else{
    const response = await api.post('products',formValue)
    SetProducts([...products,response.data])
    setformValue({name:''})
    toast.success('registered confirmed')
  }
}

  async function handleDelete(id){
    api.delete(`products/${id}`)
    SetProducts(products.filter(products=>products.id !== id))
  }

  return (
    <Container>
      <h1>Lista de produtos</h1>

      <input
      placeholder="Produtos"
      label='mercado'
      value={formValue.name}
      onChange={(event) => setformValue({...formValue, name: event.target.value})}
      />
      <MyButton 
      color='green'
      type='button'
      onClick={(handleSubmint)}
      >Send</MyButton>

      <ul>
        {products.map(product=>(
          <li check={product.check} key={product.id}>
            {product.name}
              <MyButton color="#e74c3c" type='button' onClick={() => handleDelete(product.id)}>
               <MdClose  size={20} color='#fff'/> 
             </MyButton>
          </li>
        ))}
      </ul>
    </Container>
  );
}

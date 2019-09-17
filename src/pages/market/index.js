import React, {useState,useEffect} from 'react';
import {Container, MyButton} from './styles'
import {Link} from 'react-router-dom'
import api from "../../services/api"


export default function Markets(){

    const [markets,setMarkets]=useState([])
    const [formValue,setformValue]=useState({name:''})

    //Busca minhas info
    useEffect(()=>{
        async function loadMarkets(){
            const response= await api.get('markets')
            setMarkets(response.data)
        }
        loadMarkets()
    },[])
    

    async function handleSubmint(){
        if(formValue.name ===""){
            alert("not defined")
        }
        else{
            const response = await api.post('markets',formValue)
            setMarkets([...markets,response.data])
            setformValue({name:''})
        }
    }

    async function handleDelete(id){
        api.delete(`markets/${id}`)
        setMarkets(markets.filter(markets=> markets.id !== id))
    }

    return(
        <Container>
            <h1>Mercados</h1>
            <input
                required
                placeholder='Cadastrar Mercado'
                label='mercado'
                value={formValue.name}
                onChange={(event) => setformValue({...formValue, name: event.target.value})}
            
            />
            <MyButton 
                color='green'
                type='button'
                onClick={(handleSubmint)}
            >
                Send
            </MyButton>
            <ul>
                {markets.map(market=>(
                        <li 
                        check={market.check}
                        key={market.id}>
                            <Link to={`/market/${market.id}/products`}>{market.name}</Link>
                            <MyButton 
                            color='red'
                            type='button'
                            onClick={() => handleDelete(market.id)} 
                            >X</MyButton>
                        </li>
                    )
                )}
            </ul>
        </Container>   
    )
}
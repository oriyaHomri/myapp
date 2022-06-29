import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../App.css'

export default function Home(props) {
    const [display,setDisplay]=useState('hidden')
    const changDisplay=()=>{
        if(display=='hidden'){
            setDisplay('visible')
        }
        else setDisplay('hidden')
    }
    const numProdacts=0
    const[title, setTitle]=useState('')
    const[price, setPrice]=useState('')
    const buyProdact=(prodact)=>{
        setTitle(prodact.title)
        setPrice(prodact.price)
        props.addToBasket(title,price)
    }

    return (
        <div>
            <br />
            <button type="button" class="btn btn-outline-light text-dark" onClick={changDisplay}>shopping cart *{numProdacts}*</button>
            {
                    props.listBasket.map((prodact) => {
                        return <h4 style={{visibility:display}}>{prodact.title}  - {prodact.price}</h4>
                    })}
            <br />
            <br />
            <div className='prodacts' >
                {props.listProdacts.map((prodact) => {
                    return <div class="card" className='prodact'>
                        <div class="card-body">
                            <img src={prodact.image} alt="prodact" width={250} height={300} />
                            <h4 class="card-title">{prodact.title} </h4>
                            <p class="card-text">{prodact.price}</p>
                            <p class="card-text">{prodact.description}</p>
                            <br />
                            <button type="button" class="btn btn-success"  >buy</button>
                            <br />
                        </div>
                    </div>
                })
                }
            </div>
        </div>
    )
}
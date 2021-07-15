import React from 'react'
import { useState } from 'react'

export default function Producto(props){

    const[qty, setQty] = useState(1);


    return(
        <div className='producto'>
            <div className='pr_tittle'>
                <h3>{props.tittle}</h3>
            </div>
            <div className='image'>
                <img src= {props.image}/>
            </div>
            <div className='desc'>
                <p>{props.desc}</p>
            </div>
            <div className='pr_qty'>

                <form onSubmit={(data)=>{props.addToCart(data,props)}}>
                    <button type='button' onClick={()=>{setQty(qty+1)}}>+</button>
                    <input type='number' disabled value={qty}/>
                    <button type='button' onClick={()=>{setQty(qty-1)}}>-</button>
                    <button type='submit'>Carrito</button>

                </form>
            </div>
            <div className='pr_price'>
                <p> $ {props.price}</p>

            </div>

        </div>

    )
    
}
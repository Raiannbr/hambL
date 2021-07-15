import React, { useRef } from 'react'
import { useState } from 'react'
import Producto from './Producto'
import { useEffect } from 'react'

export default function ProductCointainer(){
    
    const[cart,setCart] = useState([]);
    const primerRender = useRef(true)

    const getProducts = (form, producto) => {
       form.preventDefaut();
       console.log(form);
       console.log(producto);

       let item = {
           producto:producto.title,
           image:producto.image,
           price:producto.price,
           qty:form.target[1].value
       }
       setCart([...cart,item]);
       console.log(cart);
       
    }

    


    useEffect(()=>{

        if(primerRender.current){
            primerRender.current = false;
        }
        else{
            alert('Se agrego Correctamente')
        }

    },[cart])



    
    return(
        <div>
            <Producto
            title='Hamburguesa'
            image='https://www.recetahamburguesa.com/ImagenesRecetaHamburguesa/ImagenesRecetaHamburguesa/receta-hamburguesa-lentejas.webp'
            desc='Hamburguesa Lenteja'
            addToCart={getProducts}
            price={300}            
            />

            <div className='subTotal'>
                {cart.map(element=>{
                    return(
                        <>
                        <h3>Producto</h3>
                        {element.title}
                        <h3>cantidad</h3>
                        {element.qty}
                        <h3>Subtotal por producto</h3>
                        {element.price}
                        <h3>total de producto</h3>
                        {element.price * element.qty}
                        </>
                    )
                   
                })}

            </div>
        </div>
    )
}
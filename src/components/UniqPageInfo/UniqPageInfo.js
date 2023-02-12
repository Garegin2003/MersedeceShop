import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


function UniqPageInfo(props) {
    const params  = useParams()

    const buy = () => {

        if (props.cart.some(e=>e.id === params.id)) {
            props.setCart([
                ...props.cart.map(e=>{
                    if(e.id !== params.id) return e
                    return {
                        ...e,
                        count: e.count + 1,
                        price: e.price + e.price/e.count
                    }
                })
            ])
        }
        else{
            if (props.currentUser) {
                      props.setCart([
                ...props.cart,
                {
                    email:props.currentUser,
                    id:props.id,
                    title:props.title,
                    price:props.price,
                    img:props.img,
                    count:1
                }
             
            ])
            }
        }
        // axios({
        //     method: 'PUT',
        //     url: 'http://localhost:3000/profile',
        //     data: props.cart
        // })
    }

   console.log(props.cart);

    return(
        <div className="info">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <h3>${props.price}</h3>
            <button onClick={buy}><span>Buy</span></button>
        </div>
    )
}

export default UniqPageInfo
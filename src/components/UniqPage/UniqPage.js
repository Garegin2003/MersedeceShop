import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UniqPageImg from "../UniqPageImg/UniqPageImg";
import UniqPageInfo from "../UniqPageInfo/UniqPageInfo";
import './UniqPage.css'

function UniqPage({data, cart, setCart, currentUser}) {

    const [currentProduct, setCurrentProduct] = useState(null)
    const params = useParams()


    useEffect(() => {
        setCurrentProduct({
            ...data.find(e=>e.id === params.id)
        })
    },[])

    return(
        <div className="uniq">
            <UniqPageImg key ={currentProduct?.id}   img = {currentProduct?.img}/>
            <UniqPageInfo currentUser = {currentUser} setCart = {setCart} cart = {cart} key = {currentProduct?.id} title = {currentProduct?.title} description = {currentProduct?.description} price = {currentProduct?.price} id = {currentProduct?.id} img = {currentProduct?.img} />
        </div> 
    )
}

export default UniqPage
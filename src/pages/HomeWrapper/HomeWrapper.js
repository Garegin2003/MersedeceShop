import React, { useState } from "react";
import { Outlet } from "react-router";
import Cart from "../../components/Cart/Cart";
import Menu from "../../components/Menu/Menu";

function HomeWrapper(props) {

    const [currentCart , setCurrentCart] = useState(false)

    return(
        <>
            <Menu setCurrentUser = {props.setCurrentUser} currentUser = {props.currentUser} setCurrentCart = {setCurrentCart} currentCart = {currentCart}/>
            {props.currentUser && currentCart ? <Cart setCart = {props.setCart} cart = {props.cart} currentUser = {props.currentUser} /> : null}
            <Outlet />
        </>
    )
}

export default HomeWrapper
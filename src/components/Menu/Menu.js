import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'

function Menu(props) {

    return(
        <nav>
            <div className='container'>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/products">Products</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    {props.currentUser ? <li><NavLink onClick={() => props.setCurrentCart(props.currentCart ? false : true)}>Cart</NavLink></li> : null}
                    {props.currentUser ? <li><NavLink onClick={() => props.setCurrentUser('')} to="/signup">Log out</NavLink></li> : <li><NavLink to="/signup">SignUp</NavLink></li>}
                    <p>{props.currentUser}</p>
                </ul>
            </div>
        </nav>
    )
}

export default Menu
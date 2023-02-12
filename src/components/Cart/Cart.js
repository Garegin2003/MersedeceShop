import React, { memo, useState } from "react";
import './Cart.css'

function Cart(props) {
    
    const [cartProd, setCartProd] = useState(props.cart.filter(e=>e.email === props.currentUser))

    const clear = () => {
      setCartProd([])
    }
    
    const delItem = (id) => {
      props.setCart([
        ...props.cart.filter(e=>e.id !== id)
      ])
      setCartProd([
        ...cartProd.filter(e =>e.id !== id)
      ])
    }

    const plus  = () => {
      props.setCart([
        ...props.cart.map(e=>{ 
            return {
                ...e,
                count:e.count + 1,
                price:e.price + e.price/e.count
            }
        }),
    ])
    setCartProd([
      ...props.cart.map(e=>{ 
          return {
              ...e,
              count:e.count + 1,
              price:e.price + e.price/e.count
          }
      }),
  ])
    } 

    const minus = () => {
      props.setCart([
        ...props.cart.map(e => {
          if (e.count > 1) {
            return {
              ...e,
              count:e.count - 1,
              price:e.price - e.price/e.count
            } 
            
          }
          return e
        })
      ])
      setCartProd([
        ...props.cart.map(e => {
          if (e.count > 1) {
            return {
              ...e,
              count:e.count - 1,
              price:e.price - e.price/e.count
            } 
            
          }
          return e
        })
      ])
    }

    return(
        <div className="cartItems">
                <div>
            <h1>Total ${cartProd.reduce((acc, e) => (acc+e.price),0)} </h1>
            <h4 onClick={clear}>Clear Cart</h4>
          </div>
        {cartProd.map(e => (
          <div className="cart-item">
            <img src={e.img} />
            <h1>{e.title}</h1>
            <h3>${e.price}</h3>
            <p onClick={() => delItem(e.id)}>X</p>
            <span onClick={plus} className="plus">+</span>
            <span>{e.count}</span>
            <span onClick={minus} className="minus">-</span>
          </div>
        ))}
      </div>
    )
}

export default memo(Cart)

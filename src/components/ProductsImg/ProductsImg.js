import React from "react";

function ProductsImg(props) {
    return(
        <div className="item-img">
            <img src={props.img}/>
        </div>
    )
}
export default ProductsImg
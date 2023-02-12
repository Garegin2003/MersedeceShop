import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ProductsInfo(props) {

    const navigate = useNavigate()

    return(
        <div className="item-info">
            <h2>{props.title}</h2>
            <h3>$ {props.price}</h3>
            <Link to={'/products/' + props.id} onClick={() => navigate(props.id)}>More</Link>
        </div>
    )
}

export default ProductsInfo
import React from "react";
import { Link } from "react-router-dom";

function HomeDescription(props) {

    return(
        <div className="desc">
            {props.desc.map(e => (
                <div className="desc-img">
                    <div>
                        <img src={e.image} />
                    </div>
                    <div className="desc-info">
                        <h4>{e.title}</h4>
                        <p>{e.description}</p>
                        <Link>{e.href}</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HomeDescription
import ProductsItems from "../ProductsItems/ProductsItems"
import './Products.css'


function Products({data}) {
    

    return(
        <div className="prod">
            {data.map(e=><ProductsItems key = {e.id} id = {e.id} price = {e.price} title = {e.title} img = {e.img}/>)} 
        </div>
    )
}

export default Products
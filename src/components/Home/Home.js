import axios from "axios"
import { useEffect, useState } from "react"
import HomeDescription from "../HomeDescription/HomeDescription"
import HomeTitle from "../HomeTitle/HomeTitle"
import './Home.css'

function Home() {

    const [desc, setDesc] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/home')
        .then(res=>{
            setDesc(res.data.map(e => ({
                id: e.id.toString(),
                title: e.title,
                description: e.description,
                href: e.href,
                image: e.image
            })))
        })
    }, [])

    console.log(desc);
    
    return(
        <section>
            <div className="container">
                <HomeTitle />
                <HomeDescription  desc = {desc} />
            </div>
        </section>
    )
}
export default Home
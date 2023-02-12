import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes, Router, Link } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import UniqPage from './components/UniqPage/UniqPage';
import ErrorPages from './pages/ErrorPages/ErrorPages'
import HomeWrapper from './pages/HomeWrapper/HomeWrapper';

function App() {

  const [user, setUser] = useState([])
  const [data , setData] = useState([])
  const [ currentUser, setCurrentUser ] = useState('')
  const [cart, setCart] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/profile')
    .then(res => {
     setUser(res.data.map(e=>({
      id:e.id.toString(),
      login:e.login,
      password:e.password
     })))
    })
}, [])


useEffect(()=>{
    axios.get('http://localhost:3000/posts').then(res => {
        setData(res.data.map(e=>({
          id: e.id.toString(),
          title:e.title,
          price: e.price,
          description: e.description,
          category: e.category,
          img: e.img
        })))
    })
},[])

  return (
    <>
        <Routes>
          <Route path='/' element={<HomeWrapper setCart = {setCart} cart = {cart} currentUser = {currentUser} setCurrentUser = {setCurrentUser}/>}>
            <Route index element={<Home /> } />
            <Route path='/products'>
              <Route index element={<Products data={data}  />} />
              <Route path=':id' element = {<UniqPage currentUser = {currentUser} cart={cart} setCart = {setCart} data = {data} />} />
            </Route>
            <Route path='/contact' element={<Contact />} />
            <Route path='/signup' element={<SignUp user = {user} setCurrentUser = {setCurrentUser} currentUser = {currentUser} />} />
            <Route path='/signin' element={<SignIn />} />
          </Route>
          <Route path='*' element={<ErrorPages />} />
        </Routes>
    </>
  );
}

export default App;

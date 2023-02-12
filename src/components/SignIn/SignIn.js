import userEvent from "@testing-library/user-event";
import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup"
import './SignIn.css'


function SignIn(){
    const [ arr, setArr ] = useState([])
    const navigate = useNavigate()
    const validationSchema = yup.object().shape({
        name:yup.string().typeError("petq e lini tox").required("required"),
        email:yup.string().typeError("petq e lini tox").email("Dont have email").required("required"),
        password:yup.string().typeError("petq e lini tox").required("required"),
        confirmPassword:yup.string().typeError("petq e lini tox").oneOf([yup.ref("password")], "No").required("required"),
    } )

    return(
        <Formik
        initialValues={{
            name:"",
            email:"",
            password:"",
            confirmPassword:"",
        }}
        onSubmit={(values, {resetForm})=> {
           setArr([
            ...arr,
            values
           ])

           axios({
               method: 'POST',
               url: 'http://localhost:3000/profile',
               data: {
                login:values.email,
                password:values.password
               }
           })
           .then(function (res) {
               console.log(res.data)
               
           })
           .catch(function (res) {
               console.log(res)
           })
            
            resetForm()
           navigate('/signup')

        }}
        validateOnBlur
        validationSchema={validationSchema}
        >
        {({values,errors,touched,handleChange,handleBlur,isValid,handleSubmit,dirty}) => (
            <div className="signIn">
                <form   onSubmit={handleSubmit}>
                    <h1>Sign In</h1>
                    <input type={"text"}
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        placeholder=""/>
                    {touched.name && errors.name && <p  style={{
                        color:"red"
                    }}>{errors.name}</p>}
                    <label>first name</label><br/>
                    <input type={"text"}
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder=""/>
                    {touched.email && errors.email && <p  style={{
                        color:"red"
                    }}>{errors.email}</p>}
                    <label>email</label><br/>
                    <input type={"text"}
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder=""/>
                    {touched.password && errors.password && <p  style={{
                        color:"red"
                    }}>{errors.password}</p>}
                    <label>password</label><br/>
                    <input type={"text"}
                        name="confirmPassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                        placeholder=""/>
                    {touched.confirmPassword && errors.confirmPassword && <p style={{
                        color:"red"
                    }}>{errors.confirmPassword}</p>}
                    <label>confirmPassword</label><br/>
                    <button type="submit" disabled={!isValid || !dirty}><span>Sign In</span></button>
                    <Link to={'/signup'}>Sign Up</Link>
                </form>
            </div>
        )}
        </Formik>
    )
    
}
export default SignIn
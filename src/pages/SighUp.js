import React, { useState } from 'react'
import styled from 'styled-components'
import { createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import { firebaseAuth } from '../utils/firebase'
import Header from "../components/Header"
import Background from "../components/Background"
import {   useNavigate } from 'react-router-dom'
// import {async} from "@firebase/util"
function SighUp() {
  const [showPassword,setshowpassword]=useState(false)
  const[formValues,setformValues]=useState({email:"",password:""})
  const navigate=useNavigate()
  const handelsignIn=async()=>{
    try{
      const {email,password}=formValues;
      await createUserWithEmailAndPassword(firebaseAuth,email,password)
    }catch (error) {
      console.log(error)
    }
  }
   onAuthStateChanged(firebaseAuth, (currentUser) =>{
     if(currentUser) navigate('/')
   } )
  return (
    <Container>
    <Background/>
        <div className='content'>
          <Header login />
            
        
          <div className='body'>
            <div className='text' >
              <h1>Unlimited movies ,Tv show and more</h1>
              <h4>watch anywhere,Cancel Anytime</h4>
              <h6> Ready to watche? Enter your email to create or restart membership </h6>
            </div>
            <div  className='form'>
              {showPassword ? (
              <input type='password' placeholder='password ' name='password' value={formValues.password} onChange={(e)=>setformValues({
                ...formValues,[e.target.name]:e.target.value
              })} />

              ):               <input type='email' placeholder='email address' name='email'   value={formValues.email} onChange={(e)=>setformValues({
                ...formValues,[e.target.name]:e.target.value      })} />
}
{
  !showPassword? (
    <button onClick={()=>setshowpassword(true)}>Get started</button>

  ):              <button onClick={handelsignIn}>Sign Up</button>

}
            </div>
          </div>
        </div>
    </Container>
  )
}
const Container=styled.div`
position: relative;
.content{
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.79);
  height: 100vh;
  width: 100vw;
  grid-template-columns: 15vh 85vh ;
}
.body{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.text{
display: flex;
flex-direction: column;
text-align: center;
font-size: 2rem;
color: white;
}
h1{
  padding: 0  25rem;
}
h4{
  margin-top: 1.5rem;
}
h6{
  margin-top: 1rem;
}
.form{
display: grid;
width: 60%;
margin-top: 20px;
grid-template-columns: ${({showPassword})=>showPassword?"1fr 1fr":"2fr 1fr"};
input{
  color: black;
  padding: 1rem;
  font-size: 1rem;
  width: 50rem;
  &:focus{
    outline: none;
  }
}
button{
padding: 0.5rem 1rem ;
background-color: red;
border: none;
cursor: pointer;
color: white;
font-size: 1.05rem;
width: 10rem;
}
}
`

export default SighUp

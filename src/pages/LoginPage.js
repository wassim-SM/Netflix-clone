import React, { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Background from "../components/Background";
import styled from "styled-components";
import { firebaseAuth } from "../utils/firebase";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const navigate=useNavigate()

  const handelLogin=async()=>{
    try{
      await signInWithEmailAndPassword(firebaseAuth,email,password)

    }catch (error) {
      console.log(error)
    }
  }
  onAuthStateChanged(firebaseAuth, (currentUser) =>{
    if(currentUser) navigate("/")} )

  return (
    <Wraper>
      <Background />
      <div className="LoginContent">
        <Header />
        <div className="form-wrapper">
          <div className="form">
            <div className="titel">
              <h1>Login</h1>
            </div>
            <div className="container">
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setpassword(e.target.value)}
                value={password}
              />
              <button onClick={handelLogin} >Login</button>
            </div>
          </div>
        </div>
      </div>
    </Wraper>
  );
}
const Wraper = styled.div`
  position: relative;
  .LoginContent {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    height: 100vh;
    width: 100vw;
    grid-template-columns: 15vh 85vh;
  }
  .form-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    height: 85vh;
  }
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    background-color: #000000b0;
    height: 60vh;
    padding: 2rem;
    color: white;
    border-radius: 0.4rem;
    background-color: rgba(0, 0, 0, 0.83);
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    input {
      border-radius: 0.4rem;
      padding: 0.5rem 1rem;
      height: 2.4rem;
      outline: none;
    }
    button {
      padding: 0.5rem;
      background-color: red;
      border: none;
      cursor: pointer;
      border-radius: 0.4rem;
      height: 3.4rem;
      color: white;
      font-size: bolder;
      font-size: 1.05rem;
    }
  }
`;

export default LoginPage;

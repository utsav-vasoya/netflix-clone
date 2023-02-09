import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import { Header } from "../components/Header";
import { firebaseAuth } from "../utils/firebase-config";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValue, setFormValue] = useState({
    email:"",
    password :""
  });
  const navigate = useNavigate()
  const handleSignup =async () =>{
    try{
      const {email,password} = formValue
      await createUserWithEmailAndPassword(firebaseAuth,email,password)
    }catch(error){
      console.log(error);
    }
  }
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  }); 
  return (
    <Container showPassword={showPassword}>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body flex column a-center jcenter">
          <div className="text flex column">
            <h1>unlimited movies, Tv shows and more</h1>
            <h4>watch anywhere. cancle anytime</h4>
            <h6>
              Ready to watch? Enter your email to create and restart your
              membership
            </h6>
          </div>
          <div className="form">
            <input type="email" name="email" placeholder="Enter email" value={formValue.email} onChange={(e)=>setFormValue({...formValue,[e.target.name]:e.target.value})} />
            {showPassword && (
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formValue.password} onChange={(e)=>setFormValue({...formValue,[e.target.name]:e.target.value})}
              />
            )}
            {!showPassword && (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            )}
          </div>
          <button onClick={handleSignup}>Sign Up</button>
        </div>
      </div>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
    position:relative;
    .content{
        position:absolute;
        top:0;
        left:0;
        background-color:rgba(0,0,0,0.5);
        width:100vw;
        height:100vh;
        display: grid;
        grid-template-rows: 15vh 85vh;
    }
    .body{
        gap:1rem;
        .text{
            gap:1rem;
            text-align:center;
            font-size:2rem;
            h1{
                padding 0 25rem;
            }
        }
        .form{
            display:grid;
            grid-template-columns:${({ showPassword }) =>
              showPassword ? "1fr 1fr" : "2fr 1fr"};
            width:60%;
            input{
                color:black;
                border: none;
                padding:1.5rem;
                font-size:1.2rem;
                border:1ox solid black
            }
            &:focus{
                outline:none
            }
            button{
                padding: 0.5rem 1rem;
                background-color: #e50914;
                border: none;
                cursor: pointer;
                color: white;
                font-weight: bolder;
                font-size: 1.05rem;
            }
        }
        button{
                padding: 0.5rem 1rem;
                background-color: #e50914;
                border: none;
                cursor: pointer;
                color: white;
                border-radius: 0.2rem;
                font-weight: bolder;
                font-size: 1.05rem;
            }
    }
`;


import React, { useState } from 'react';
import timage from '../../assets/images/a.png' ;
import ticon from "../../assets/images/favicon.ico";
import { useSignInWithEmailAndPassword , useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    
    const [email, setEmail] = useState('');            //2. to get email and password in the console
    const [password, setPassword] = useState('');      
    //const [error, setError] = useState('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle (auth);

    if (user || googleUser){
        navigate("/");
        console.log(user);
        console.log(googleUser);
    }

    if(error){
        console.log(error.message);
    }
    if(loading){
        console.log('loading..');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        signInWithEmailAndPassword(email,password);
    }
     
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    return (
        <div className='login-container'>
            <div className='image-container'>
                <img className='image' src={timage} alt='t'/>
            </div>
            <div className='form-container'>
                
                <div className='form-box'>
                <img src={ticon} alt='t1'/>
                <h1 className='heading'>Happening Now</h1>
                <h3 className='heading1'>Join today.</h3>
                <form onSubmit={handleSubmit}>
                    <input 
                    type='email'
                    className='email'
                    placeholder='Email address'
                    onChange={(e) => setEmail(e.target.value)}    //2
                    />
                    <input 
                    type='password'
                    className='password'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}  //2
                    />

                    <div className='btn-login'>
                        <button type='submit' className='btn'>Login</button>
                    </div>
                </form>
                </div>


                <hr/>
                    <div className='google-button'>
                        <GoogleButton
                            className='g-btn'
                            type='light'
                            onClick={handleGoogleSignIn}
                        />
                    </div>
                    <div>
                        Don't have account?
                        <Link 
                        to = '/signup'
                        style = {{ 
                            textDecoration: 'none',
                            color: 'black',
                            fontWeight: '600',
                            marginLeft: '5px'
                        }}> 
                        <br/>
                        <button>Sign up</button>
                        </Link>
                    </div>
            </div>
        </div> 
    ); 
};

export default Login;

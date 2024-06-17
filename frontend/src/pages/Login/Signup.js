import React, { useState } from 'react';
import timage from '../../assets/images/a.png' ;
import ticon from "../../assets/images/favicon.ico";
import {useCreateUserWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';


const Signup = () => {
    
    const [username, setUsername] = useState('');
    const [name, setname] = useState(''); 
    const [email, setEmail] = useState('');            //2. to get email and password in the console
    const [password, setPassword] = useState('');      //2
    //const [error, setError] = useState('');
    const navigate = useNavigate();

    const [
        CreateUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    if (user || googleUser){
        navigate('/');
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
        CreateUserWithEmailAndPassword(email,password);
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
                        <img className='Twittericon' src={ticon} alt='t1'/>
                        <h1 className='heading'>Happening Now</h1>
                        <h3 className='heading1'>Join today.</h3>
                        <form onSubmit={handleSubmit}>
                        
                            <input 
                            type='text'
                            className='display-name'
                            placeholder='@username'
                            onChange={(e) => setUsername(e.target.value)} 

                            />
                            <input
                            type='text'
                            className='display-name'
                            placeholder='Enter full-name'
                            onChange={(e) => setname(e.target.value)} 
                            />

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
                                <button type='submit' className='btn'>Sign up</button>
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
                        Already have an account?
                        <Link 
                        to = '/login'
                        style = {{ 
                            textDecoration: 'none',
                            color: 'black',
                            fontWeight: '600',
                            marginLeft: '5px'
                        }}> 
                        <br/>
                        <button>Login</button>
                        </Link>
                    </div>
            </div>
        </div> 
    ); 
};

export default Signup;

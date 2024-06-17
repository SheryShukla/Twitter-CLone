import {signOut} from 'firebase/auth';
import auth from '../firebase.init';
import React from 'react';
import {Outlet} from 'react-router-dom';
import Widgets from './Widgets/Widgets';
import Sidebar from './Sidebar/Sidebar';
import {useAuthState} from 'react-firebase-hooks/auth';
//import {useUserAuth} from '../context/UserAuthContext';
//import {useNavigate} from 'react-router';



const Home = () => {
    const {user}=useAuthState(auth)
    
    const handleLogout = ()=>{
        signOut(auth)
    }
    
    
    /*const { logOut, user } = useAuthState(auth);
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/login");
        } catch (error) {
            console.log(error.message);
        }
    };
    */ 

    return (
        <div className='app'>
            
           <Sidebar handleLogout={handleLogout} user={user}/>
           <Outlet/>
           <Widgets/>
        </div> 
    );
};

export default Home;
 
import React, { useState , createContext, useEffect } from "react";
import base64 from 'base-64';
import superagent from "superagent";
import jwt from "jsonwebtoken";
import cookie from "react-cookies"

export const LoginContext = React.createContext();

const API = `http://localhost:3030`;

export default function loginProvider(props){
    const [loggedIn,setLoggedIn] = useState (false);
    const [user,setUser] =useState({});

   // function to send username and his password to backend
    async function login(username,password){
        const response = await superagent.post(`${API}/signin`).set('authorization',`Basic ${base64.encode(`${username}:${password}`)}`);
        console.log('inside login >> response', response);//userInfo + token
        validateMyUser(response.body);
    }

    function validateMyUser(data){
        if (data){
            const validUser = jwt.decode(data.token);
            if (validUser){
                setLoginState(true, data);
                cookie.save('userData',data);
            }
            else{
                setLoginState(false,{});
            }
        }
        else{
            setLoginState(false,{})
        }

    }

    function setLoginState(isLooged,userData){
        setLoggedIn(isLooged);
        setUser(userData);
    }

    function logout(){
        setLoggedIn(false);
        setUser({});
        cookie.remove("userData");

    }

    const state = useState({
        loggedIn:loggedIn,
        user:user,
        login:login,
        logout:logout,

    });

    useEffect(()=>{
        const myUserInfor = cookie.load("userData");
        validateMyUser();
    },[]);

    return (
    <LoginContext.Provider value={state}>
        {props.children}
    </LoginContext.Provider>
    );
}
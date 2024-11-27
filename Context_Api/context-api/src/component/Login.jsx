import React, { useContext, useState } from 'react';
import Usercontext from '../context/Usercontext';


const Login = () => {

    const user = useContext(Usercontext)
    

    return (
        <>
            {user.name}
        </>
    );
}

export default Login;
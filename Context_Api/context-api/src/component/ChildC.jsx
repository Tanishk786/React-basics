import React, { useContext } from "react";
import Usercontext from "../context/Usercontext";

const ChildC = () => {

    const consumer = useContext(Usercontext);

    return (
        <>
            {consumer.name}         
        </>
    );
}

export default ChildC;
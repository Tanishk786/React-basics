import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
    const {userid} = useParams()
    return (
        <>
            <p>User : {userid}</p>
        </>
    );
}

export default User;
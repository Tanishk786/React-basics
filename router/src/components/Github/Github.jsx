import React, { useState } from "react";
import { useEffect } from "react";
// optimization loader
import { useLoaderData } from "react-router-dom";

const Github = () => {
    // optimization loader
    const data = useLoaderData()

    // const [data, setdata] = useState(0)
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/tanishksarathe')
    //     .then((response)=> response.json())
    //     .then((data)=> setdata(data))
    // },[])

    return (
        <>
        <img className=" mx-auto h-80 w-80 rounded-full m-3 " src={data.avatar_url} alt="Mypic" />
            <div className="text-center m-5 bg-gray-600 text-white p-2 text-3xl ">
            Github Followers : {data.followers}<br/>
            Github Name : {data.name}<br/>
            Github Location : {data.location}<br/>
            Github Repositories : {data.public_repos}
            </div>
        </>
    );
}


export default Github;

export const loaderforgithub = async() => {
    const res = await fetch("https://api.github.com/users/tanishksarathe")
    return res.json()
} 

//optimization loader
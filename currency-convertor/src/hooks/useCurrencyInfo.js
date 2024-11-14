import { useEffect, useState } from "react"


let useCurrencyInfo = (currency) => {
    const [data , setdata] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json`)
        .then((response)=> response.json())
        .then((response)=> response[currency])
    }, [currency])
    return data;
}

export default useCurrencyInfo;
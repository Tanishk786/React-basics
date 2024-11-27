import React, { useContext } from 'react'
import Themecontext from '../Themecontext'

function ChildD() {

    const consumer = useContext(Themecontext)

    return (
        <>
            Hii bhaiyoo.....<br/>
            {consumer}

        </>
    )
}

export default ChildD

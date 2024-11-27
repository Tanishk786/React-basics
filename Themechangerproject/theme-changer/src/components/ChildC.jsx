import React, { useContext } from 'react'
import Themecontext from '../Themecontext'

function ChildC() {

    const {theme,settheme} = useContext(Themecontext)

    const changetheme = () => {
        if (theme === 'light'){
            settheme('dark')
        }
        else {
            settheme('light')
        }
        console.log(theme);
    }

    return (
        <>

            <div className='flex flex-col justify-center items-center'>

            Hello Mitroo.... <br/>
            <button
            onClick={changetheme}
            className='h-10 w-20 bg-black text-white'>
                THEME
            </button>
             <br/>

            </div>
            
        </>
    )
}

export default ChildC

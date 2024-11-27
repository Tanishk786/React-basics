import { useState } from 'react'
import './App.css'
// context created here
import Themecontext from './Themecontext'
import ChildA from './components/ChildA'
import ChildD from './components/ChildD'

function App() {

  const [theme,settheme] = useState('light')
  const [color,setcolor] = useState('blue')
  return (
    <>

    <div className='flex flex-col items-center justify-center bg-violet-200 h-screen'>

    {/* context provided here */}
    <Themecontext.Provider value={{theme,settheme}}>
     <div className='h-40 w-40 bg-sky-200' style={{backgroundColor:theme==='light'?"pink":"yellow"}}>
       <ChildA/>
     </div> 
  
    </Themecontext.Provider>
    
    <Themecontext.Provider value={color}>
        <ChildD/>
    </Themecontext.Provider>

    </div>
    
    </>
    )
}

export default App

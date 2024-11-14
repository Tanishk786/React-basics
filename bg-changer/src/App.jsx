import { useState } from "react"


function App() {
const [color, setColor] = useState('olive')

  return (
    <> 
   <div className="w-full h-screen" style={{ backgroundColor: color }}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap rounded-3xl justify-center bg-white gap-3 px-3 py-3 shadow-lg'>
        <button
        onClick={()=> setColor('red')}
        className='outline-none px-4 py-1 rounded-full'
        style={{backgroundColor:'red'}}
        >Red</button>

        <button
        onClick={()=> setColor('blue')}
        className='outline-none px-4 py-1 rounded-full'
        style={{backgroundColor:'blue'}}
        >Blue</button>

        <button
        onClick={()=> setColor('aliceblue')}
        className='outline-none px-4 py-1 rounded-full text-black'
        style={{backgroundColor:'aliceblue'}}
        >Lavender</button>

        <button
        onClick={()=> setColor('green')}
        className='outline-none px-4 py-1 rounded-full'
        style={{backgroundColor:'green'}}
        >Green</button>

        <button
        onClick={()=> setColor('purple')}
        className='outline-none px-4 py-1 rounded-full'
        style={{backgroundColor:'purple'}}
        >Purple</button>
        
      </div>
    </div>
   </div>

    </>
  )
}

export default App

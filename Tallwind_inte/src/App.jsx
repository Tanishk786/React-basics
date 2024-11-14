import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  const myarr = ["Aryan", "Rohit", "Mitraz"]

  return (
    <>
  <Card username='Aryan' myarray = {myarr} subtitle = 'Mitraz'/>
  <Card username = 'Tanishk' subtitle = 'Yo Yo Divine'/>
    </>
  )
}

export default App

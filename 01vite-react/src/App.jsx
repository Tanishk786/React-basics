import { useState } from "react";
function App() {
  let [counter,setcounter] = useState(10)
  
  const addValue = () => {
    if (counter < 20){
    counter = counter+1;
      setcounter(counter);
    }
  }

  const decvalue = () => {
    if (counter > 0){
    setcounter(counter-1)
    }
  }

  return (
<>
<h1>My React + Vite Journey</h1>
<button
  onClick={addValue}
>
Counter Increase{counter}
</button>
<button
  onClick={decvalue}
>
Counter decrease {counter}
</button>
<h2>my name is tanishk{counter}</h2>
</>
  )
}

export default App





import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberhai, setnumberhai] = useState(false); // to enable or disable number field
  const [charhai, setcharhai] = useState(false); // to enable or disable character field
  const [storeval, setstoreval] = useState("");
  
  const passwordRef = useRef(null); // to satisfy user that value is copied
  // let's make a password generator \\

  const passwordgenerator = useCallback(() => {
    let pass = ""; // main password to be generated
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; // string of letters

    if (numberhai) {
      // their run depends upon checkbox clicked
      str += "0123456789";
    } 
    if (charhai) {
      // their run depends upon checkbox clicked
      str += "!@#$%^&*()_+{}[]|:;<>,.?/";
    }

    for (let i = 1; i <= length; i++) {
      let singlecharacter = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(singlecharacter); // takes the value from random places in the string
    }

    setstoreval(pass);
  }, [length, numberhai, charhai]);

  const copyToClipboard = () => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,50) // how much value to select
    window.navigator.clipboard.writeText(storeval)
  }

  useEffect(()=>{
    passwordgenerator();
  }, [length, numberhai, charhai, passwordgenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto rounded-xl shadow-lg my-8 text-blue-950 bg-blue-200">
        {/* main div started */}
        <div className="flex flex-col rounded-lg px-4 py-4 shadow-sm overflow-hidden">

          <h1 className="heading">Password Generator</h1>
          {/* creating input field using react */}

          {/* helping div */}

          <div className="flex h-full w-full outline-1 py-1 px-1">
            <input
              value={storeval}
              type="text"
              className="w-full h-full outline-1 rounded-md py-1 px-1"
              placeholder="Password Will Generate..."
              readOnly
              ref={passwordRef}
            />
            <button
            onClick={copyToClipboard}
            className="w-20 h-7.2 rounded-md bg-black text-white">
              Copy
            </button>
          </div>

          <div className="flex h-full w-full rounded-sm text-sm gap-y-4 gap-x-3">

            <input
              type="range"
              min={8}
              max={50}
              value={length}
              onChange={(e) => {
                setlength(e.target.value);
              }} // this will enable the scroll of range with a specific callback function
            />
            <label>Length : {length}</label>

            <input type="checkbox"
              defaultChecked={numberhai}
              id="numinput"
              onChange={() => {
                setnumberhai((prev) => !prev);
              }}
            />
            <label>Numbers</label>
            <input type="checkbox"
              defaultChecked={charhai}
              id="charinput"
              onChange={() => {
                setcharhai((prev) => !prev);
              }}
            />
            <label>Characters</label>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;

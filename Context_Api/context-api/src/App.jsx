import './App.css'
import React, { useState } from "react";
// context created here separately
import Usercontext from './context/Usercontext'
import ChildA from './component/ChildA'

const App = () => {

    const [user,setUser] = useState({name : "Tanishk"})
    
    return (
      // called the provider here for all who can access the context api
        <Usercontext.Provider value={user}>
             <ChildA/>
            {/* We used ChildA because we have to provide it all our childs and childA is a global PAPA */}
        </Usercontext.Provider>
    );
}

export default App;

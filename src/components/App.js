import React from "react";
import Home from './Home'
import NavBar from './Navbar'


function About(){
  return <h2 id="about">About</h2>
}


function App() {
  return (
    <div>
      <NavBar/>
     <Home/>
      <About/>     

      </div>
  );
}

export default App;

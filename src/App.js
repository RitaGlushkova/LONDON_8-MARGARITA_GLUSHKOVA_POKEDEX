
// import "./App.css";
import React from "react";
import Logo from "./Logo.js";
import BestPokemon  from "./BestPokemon.js";
import CaughtPokemon from "./CaughtPokemon.js";
//import ReactDOM from "react-dom";

function App() {
  return (
    <div className="App">
      <Logo appName={"Pokedex"} />
      <BestPokemon/>
      <CaughtPokemon date = {new Date().toLocaleDateString()} />
    </div>
  );
}

export default App;

// Using the pokedex React app that you created earlier, open the App.js file.
// Pass a prop appName="Pokedex" to the Logo component.
// Now open the Logo.js file.
// Delete the appName variable. What do you see in your web browser? Why?
// Change the Logo function to access the first argument and call it props. Use console.log to inspect the props variable.
// Change the usage of appName in the <h1> to be props.appName instead. Does this fix the problem? Why?
// Now open the BestPokemon.js file.
// Copy the abilities variable and then delete it from BestPokemon.js.
// Paste the abilities variable into App.js.
// Pass the abilities variable as a prop to BestPokemon from App.js.
// In the BestPokemon.js file replace the existing usage of abilities with the abilities prop. You should still see the Pokemon ability names in your web browser.
// (STRETCH GOAL) Repeat the process with the date variable in the CaughtPokemon.js file.
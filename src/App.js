
import "./App.scss";
import { useState } from "react";
import React from "react";
import Home from "./Paginas/Home/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [menuAbierto, setMenuAbierto] = useState(true)

  return (

    <Home/>
    
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Categoria from "./components/Categoria";
import Contacto from "./components/Contacto";
import Registrarse from "./components/Registrarse";
import "./app.scss";
import Cities from "./components/Cities/Cities";
import Collection from "./components/Collections/Collection";
import Card from "./components/Card/Card";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/categoria" element={<Categoria />} /> 
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/registrarse" element={<Registrarse />} />
          <Route path="/cities" element={<Cities />} />
        </Routes>
        <Collection />
        <Cities />
      </div>
    </Router>
  );
}

export default App;

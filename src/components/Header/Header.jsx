import React, { useState } from "react";
import "./Header.scss";
import Logo from "../../assets/images/Zomato-Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import blackLogo from "../../assets/images/blackLogo.webp";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <nav>
        <span>Conce Guate</span>
        <div className="right">
          <span>Inicio</span>
          <span>Categoria</span>
          <span>Registrarse</span>
          <span>Iniciar Sesion</span>
        </div>
      </nav>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <CloseIcon style={{ color: "black" }} /> : <MenuIcon />}
      </div>
      {open && (
        <div className="sideMenu">
          <img src={blackLogo} alt="logo" />
          <div className="innerMenu">
            
          </div>
        </div>
      )}
      <div className="headerContent">
        <img src={Logo} alt="logo" />
        <h3>Transforma ideas en realidad, emprende con pasión</h3>
        <div className="input">
          <select name="" id="">
            <option value="Chennai">Ceramica</option>
            <option value="Jaipur">Masetas</option>
            <option value="Delhi">Joyería</option>
            <option value="Mumbai">Textiles</option>
            <option value="Kolkata">Madera tallada</option>
          </select>
          |
          <input
            type="text"
            placeholder="Bucar Emprendimiento"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

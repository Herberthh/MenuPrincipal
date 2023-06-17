import React, { useState } from "react";
import "./Header.scss";
import Logo from "../../assets/images/Zomato-Logo.png";
import { Link } from "react-router-dom";
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
          <Link to="/">Inicio</Link>
          <Link to="/categoria">Categoría</Link> {/* Modifica esta línea */}
          <Link to="/registrarse">Registrarse</Link>
          <Link to="/contacto">Contacto</Link> 
        </div>
      </nav>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <CloseIcon style={{ color: "black" }} /> : <MenuIcon />}
      </div>
      {open && (
        <div className="sideMenu">
          <img src={blackLogo} alt="logo" />
          <div className="innerMenu">
            {/* Contenido del menú */}
          </div>
        </div>
      )}
      <div className="headerContent">
        <img src={Logo} alt="logo" />
        <h3>Transforma ideas en realidad, emprende con pasión</h3>
        <div className="input">
          <select name="" id="">
            <option value="Masetas">Masetas</option>
            <option value="Joyería">Joyería</option>
          </select>
          |
          <input type="text" placeholder="Buscar Emprendimiento" />
        </div>
      </div>
    </div>
  );
};

export default Header;

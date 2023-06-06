import React from "react";
import "./Card.scss";
import Dine from "../../assets/images/Dine-Out.png";
import Night from "../../assets/images/Night-Life.png";
import Online from "../../assets/images/Online-Food.png";

const Card = () => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={Dine} alt="dineImg" />
        <h1>Ceramica</h1>
        <span>La cerámica guatemalteca es otra opción popular.</span>
      </div>
      <div className="cardImg">
        <img src={Night} alt="nightImg" />
        <h1>Textiles</h1>
        <span>cortinas, manteles, bufandas, bolsos, cojines y ropa hecha a mano</span>
      </div>
      <div className="cardImg">
        <img src={Online} alt="onlineImg" />
        <h1>Madera tallada</h1>
        <span>Esculturas, máscaras, marcos de espejos, cajas decorativas y otros objetos tallados a mano.</span>
      </div>
    </div>
  );
};

export default Card;

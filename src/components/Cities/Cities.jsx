import React from "react";
import "./Cities.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Cities = () => {
  return (
    <div className="cities">
      <h1>
        Emprendimientos del Area de Solola <span>EmprendeGuate</span>
      </h1>
      <div className="cityContainer">
        <div className="city">
          <div className="cityLeft">
            <h3>Floreria</h3>
            <span>Solola</span>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>Costuras</h3>
            <span>Santiago Atitalan</span>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>Velas Artesanales</h3>
            <span>San Pedro</span>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>Artesanías de Cuero</h3>
            <span>San Lucas Toliman</span>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>Productos de Vidrio Soplado</h3>
            <span>Solola, Solola</span>
          </div>
          <div className="icon">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>Cerámica Maya</h3>
            <span>San Juan La Laguna</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cities;

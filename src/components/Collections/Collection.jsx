import React from "react";
import "./Collection.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import collection1 from "../../assets/images/collection1.png";
import collection2 from "../../assets/images/collection2.png";
import collection3 from "../../assets/images/collection3.png";
import collection4 from "../../assets/images/collection4.png";

const Collection = () => {
  return (
    <div className="collection">
      <h1>Fotos de Nuetra Bella Guatemala</h1>
      <div className="collectionText">
        <p>
          
Así como te deleitas con los encantos de los emprendimientos artesanales, sumérgete en las maravillas de nuestra amada Guatemala, donde la riqueza cultural y la belleza natural te cautivarán sin medida.
        </p>
        <span>
          Mas fotos... <ArrowRightIcon />
        </span>
      </div>
      <div className="collectionCard">
        <div className="collectionImg">
          <img src={collection1} alt="img" />
          <h3>Panajachel</h3>
          <span>
            1 Foto <ArrowRightIcon />
          </span>
        </div>
        <div className="collectionImg">
          <img src={collection2} alt="img2" />
          <h3>Antigua Guatemala</h3>
          <span>
            1 Foto <ArrowRightIcon />
          </span>
        </div>
        <div className="collectionImg">
          <img src={collection3} alt="img4" />
          <h3>Peten</h3>
          <span>
            1 Foto <ArrowRightIcon />
          </span>
        </div>
        <div className="collectionImg">
          <img src={collection4} alt="img4" />
          <h3>SAMUC PAMPEY</h3>
          <span>
            1 Foto<ArrowRightIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Collection;

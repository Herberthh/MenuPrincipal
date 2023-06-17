import React from "react";
import "./Categoria.scss";
import vasosImage from "../assets/images/vasos.jpg";
import fajasImage from "../assets/images/fajas.jpg";
import mascarasImage from "../assets/images/mascaras.jpg";
import jugetesImage from "../assets/images/jugetes.jpg";
import bolsasImage from "../assets/images/bolsas.jpg";
import gautelaImage from "../assets/images/gautela.jpg";
import platosImage from "../assets/images/platos.jpg";
import adornosImage from "../assets/images/adornos.jpg";
import { Link } from "react-router-dom";

const Categorias = () => {
  const categorias = [
    {
      id: 1,
      nombre: "Cerámica",
      telefono: "+50254144873",
      descripcion: "Cerámicas disponibles",
      imagenes: [
        {
          id: 1,
          ruta: vasosImage,
          titulo: "Vasos de cerámica",
          descripcion:
            "Disfrute con nuestros vasos de cerámica. Hechos a mano con materiales de alta calidad, estos vasos destacan por su elegancia y durabilidad. Perfectos para cualquier ocasión, su diseño único y artesanal los convierte en una opción ideal para disfrutar de tus bebidas favoritas con estilo.",
        },
        {
          id: 2,
          ruta: platosImage,
          titulo: "Platos de cerámica",
          descripcion:
            "Hechos a mano por hábiles artesanos, estos platos añaden un toque de elegancia a tu mesa y realzan la presentación de tus platos favoritos. Disfruta de una experiencia gastronómica única con nuestros platos de cerámica, donde la estética y la calidad se unen en armonía.",
        },
        {
          id: 3,
          ruta: adornosImage,
          titulo: "Adornos artesanales",
          descripcion:
            "Embellece tu hogar con nuestros encantadores adornos artesanales. Cada pieza es una obra de arte única, cuidadosamente creada por talentosos artesanos con pasión y dedicación.",
        },
      ],
    },
    {
      id: 2,
      nombre: "Textiles",
      telefono: "+50254144873",
      descripcion: "Textiles disponibles",
      imagenes: [
        {
          id: 4,
          ruta: gautelaImage,
          titulo: "Textiles de gautela",
          descripcion:
            "La suavidad de los tejidos acariciará tu piel, mientras que el diseño sofisticado añadirá un toque de estilo a tu espacio. Ya sea que estés buscando una prenda de vestir o un elemento decorativo, nuestros textiles de gautela son la elección perfecta.",
        },
        {
          id: 5,
          ruta: bolsasImage,
          titulo: "Bolsos artesanales",
          descripcion:
            "Diseñados con atención a cada detalle, nuestros bolsos son el complemento perfecto para cualquier ocasión. Confeccionados con materiales de alta calidad, ofrecen durabilidad y resistencia, sin comprometer el estilo.",
        },
        {
          id: 6,
          ruta: fajasImage,
          titulo: "Fajas modeladoras",
          descripcion:
            "Nuestras fajas son la opción ideal para moldear y resaltar tu figura. Confeccionadas con materiales transpirables y elásticos, te brindan comodidad y soporte durante todo el día.",
        },
      ],
    },
    {
      id: 3,
      nombre: "Madera tallada",
      telefono: "+50254144873",
      descripcion: "Maderas talladas disponibles",
      imagenes: [
        {
          id: 8,
          ruta: jugetesImage,
          titulo: "Juguetes de madera tallada",
          descripcion:
            "Déjate sorprender por la magia y la nostalgia de nuestros juguetes de madera tallada. Cada pieza es cuidadosamente esculpida a mano, utilizando técnicas tradicionales de tallado en madera.",
        },
        {
          id: 9,
          ruta: mascarasImage,
          titulo: "Máscaras de madera tallada",
          descripcion:
            "Descubre el encanto y el misterio de nuestras máscaras de madera tallada. Cada máscara es una verdadera obra de arte, meticulosamente esculpida a mano por hábiles artesanos. Estas máscaras capturan la esencia de la cultura y la tradición, con diseños detallados y expresiones cautivadoras.",
        },
      ],
    },
  ];

  return (
    <div className="categorias">
      <h1>Categorías</h1>
      {categorias.map((categoria) => (
        <div key={categoria.id} className="categoria">
          <h2>{categoria.nombre}</h2>
          <p>{categoria.descripcion}</p>
          <div className="imagenes">
            {categoria.imagenes.map((imagen) => (
              <div key={imagen.id} className="imagen">
                <h3>{imagen.titulo}</h3>
                <img src={imagen.ruta} alt={categoria.nombre} />
                <p>{imagen.descripcion}</p>
              </div>
            ))}
          </div>
          {categoria.telefono && (
            <a
              href={`https://wa.me/${categoria.telefono.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Hacer pedido por WhatsApp
            </a>
          )}
        </div>
      ))}
      <Link to="/">Volver a la página principal</Link>
    </div>
  );
};

export default Categorias;
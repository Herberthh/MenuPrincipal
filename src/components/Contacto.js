import React, { useState } from "react";
import "./Contacto.scss";
import perfilImage from "../assets/images/Perfil.png";

const Contactos = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica para enviar el correo electrónico aquí

    // Restablecer el formulario
    setNombre("");
    setEmail("");
    setMensaje("");
    setEnviado(true);
  };

  return (
    <div className="contactos">
      <h1>Contacto</h1>
      <div className="perfil">
        <img src={perfilImage} alt="Perfil" />
        <div className="informacion">
          <h2>Nombre: Herberth Juracan y Deysy Sajche</h2>
          <p>Email: jur201103@uvg.edu.gt</p>
          <p>Teléfono: +502 44144876</p>
        </div>
      </div>
      <div className="formulario">
        <h2>Envíanos un mensaje</h2>
        {enviado ? (
          <p className="mensaje-enviado">¡Mensaje enviado correctamente!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
            ></textarea>

            <button type="submit">Enviar</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contactos;
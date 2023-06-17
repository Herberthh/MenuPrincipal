import React, { useState } from "react";
import "./Registrarse.scss";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: "",
    businessName: "",
    products: "",
    description: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos de registro a tu servidor
    console.log(formData);
    // Restablecer el formulario
    setFormData({
      email: "",
      businessName: "",
      products: "",
      description: "",
      phoneNumber: "",
    });
  };

  return (
    <div className="registration-form">
      <h2>Registro de Emprendimiento</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Nombre de Emprendimiento:</label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Productos:</label>
          <input
            type="text"
            name="products"
            value={formData.products}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Descripción de Emprendimiento:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Número de Teléfono:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
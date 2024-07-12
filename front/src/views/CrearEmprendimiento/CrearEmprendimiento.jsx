import React, { useState } from 'react';
import './crearEmprendimiento.css';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

const CrearEmprendimiento = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <div className='create-bussiness-container'>
      <Nav />
      <h2>Crear Emprendimiento</h2>
      <div className="form-container">
        <form action="">
          <div className="first-part">
            <div className='left'>
              <label htmlFor="name">
                Nombre del emprendimiento
                <input placeholder='Ingresa el nombre del emprendimiento' type="text" name="name" id="name" />
              </label>
              <label htmlFor="description">
                Descripción
                <textarea placeholder='Ingresa la descripción del emprendimiento' name="description" id="description" cols="30" rows="10" />
              </label>
            </div>
            <div className='right'>
              <label htmlFor="image">
                Upload the banner Img
                <div className="img">
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" />
                ) : (
                  <p>Upload Img</p>
                )}
              </div>
              </label>
              <input  type="file" name="image" id="image" onChange={handleImageUpload} />
              
            </div>
          </div>
          <label htmlFor="mensaje-conact" className='mensaje-contact'>
                Mensaje del Contact
                <textarea placeholder='La descripción...' name="description" id="mensaje" cols="100" rows="5" />
              </label>

              
    
              <div className='div-rapido'>
    <label for="correo_electronico" className="label-rapido">Correo electrónico:</label>
        <input type="email" id="correo_electronico" name="correo_electronico" className="input-rapido" required/>

    <label for="telefono" className="label-rapido">Teléfono:</label>
    <input type="tel" id="telefono" name="telefono" className="input-rapido" required/>

    <label for="facebook" className="label-rapido">Facebook:</label>
    <input type="text" id="facebook" name="facebook" className="input-rapido" required/>

    <label for="instagram" className="label-rapido">Instagram:</label>
    <input type="text" id="instagram" name="instagram" className="input-rapido" required/>

    <label for="direccion" className="label-rapido">Dirección:</label>
    <input type="text" id="direccion" name="direccion" className="input-rapido" required/>

    <label for="wallet_id" className="label-rapido">Enter bussiness wallet id:</label>

    <input type="text" id="wallet_id" name="wallet_id" className="input-rapido" required/>

    <button type="submit">Send</button>
    </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default CrearEmprendimiento;

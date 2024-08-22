import { useState } from 'react';
import './crearEmprendimiento.css';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import apiService from '../../api/apiService'; // Asegúrate de que la ruta sea correcta

const CrearEmprendimiento = () => {
  const [mainImagePreview, setMainImagePreview] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [lastImagePreview, setLastImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    city: '',
    email: '',
    contact_message: '',
    phone: '',
    facebook: '',
    instagram: '',
    address: '',
    wallet_key: '',
  });

  const handleMainImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMainImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setFormData({ ...formData, mainImage: file });
    } else {
      setMainImagePreview(null);
    }
  };

  const handleAdditionalImagesUpload = (event) => {
    const files = Array.from(event.target.files);

    if (files.length > 0) {
      if (additionalImages.length + files.length > 5) {
        alert('You can only upload up to 5 images.');
        return;
      }

      setAdditionalImages(prevImages => {
        const updatedImages = [...prevImages, ...files].slice(0, 5);

        const lastFile = updatedImages[updatedImages.length - 1];
        const reader = new FileReader();
        reader.onloadend = () => {
          setLastImagePreview(reader.result);
        };
        reader.readAsDataURL(lastFile);

        return updatedImages;
      });
    }
  };

  const handleRemoveLastImage = () => {
    setAdditionalImages(prevImages => {
      if (prevImages.length === 0) return prevImages;

      const updatedImages = prevImages.slice(0, -1);

      if (updatedImages.length > 0) {
        const lastFile = updatedImages[updatedImages.length - 1];
        const reader = new FileReader();
        reader.onloadend = () => {
          setLastImagePreview(reader.result);
        };
        reader.readAsDataURL(lastFile);
      } else {
        setLastImagePreview(null);
      }

      return updatedImages;
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalFormData = new FormData();
    const user = JSON.parse(localStorage.getItem('user'));
    finalFormData.append('name', formData.name);
    finalFormData.append('description', formData.description);
    finalFormData.append('contact_message', formData.contact_message);
    finalFormData.append('email', formData.email);
    finalFormData.append('phone', formData.phone);
    finalFormData.append('facebook', formData.facebook);
    finalFormData.append('instagram', formData.instagram);
    finalFormData.append('city', formData.city);
    finalFormData.append('address', formData.address);
    finalFormData.append('wallet_key', formData.wallet_key);
    finalFormData.append('user_id', user.id)

    if (formData.mainImage) {
      finalFormData.append('mainImage', formData.mainImage);
    }

    additionalImages.forEach((image) => {
      finalFormData.append('additionalImages', image);
    });

    try {
      const response = await apiService.createBusiness(finalFormData);

      console.log('Emprendimiento creado exitosamente:', response.data);
      // Puedes agregar lógica adicional como redirigir a otra página o mostrar un mensaje de éxito
      alert('Emprendimiento creado exitosamente');

    } catch (error) {
      console.error('Error al crear el emprendimiento:', error);
      // Manejar el error, por ejemplo, mostrar un mensaje de error al usuario
    }
  };

  return (
    <>
      <div className='create-bussiness-container'>
        <Nav />
        <h2>Crear Emprendimiento</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="first-part">
              <div className='left'>
                <label htmlFor="name">
                  Nombre del emprendimiento
                  <input
                    placeholder='Ingresa el nombre del emprendimiento'
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleInputChange}
                  />
                </label>
                <label htmlFor="description">
                  Descripción
                  <textarea
                    placeholder='Ingresa la descripción del emprendimiento'
                    name="description"
                    id="description"
                    cols="30"
                    rows="10"
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div className='right'>
                <label htmlFor="mainImage">
                  Upload the banner Img
                  <div className="img">
                    {mainImagePreview ? (
                      <img src={mainImagePreview} alt="Main Image Preview" />
                    ) : (
                      <p>Upload Main Image</p>
                    )}
                  </div>
                </label>
                <input type="file" name="mainImage" id="mainImage" onChange={handleMainImageUpload} />

                <input type="file" name="additionalImages" id="additionalImages" onChange={handleAdditionalImagesUpload} multiple />
              </div>
            </div>
            <label htmlFor="mensaje-conact" className='mensaje-contact'>
              Mensaje del Contact
              <textarea placeholder='La descripción...' name="contact_message" id="mensaje" cols="100" rows="5" onChange={handleInputChange} />
            </label>
            <div className='div-rapido'>

            <label htmlFor="city" className="label-rapido">City:</label>
              <input type="text" id="city" name="email" className="input-rapido" onChange={handleInputChange} required />


              <label htmlFor="correo_electronico" className="label-rapido">Correo electrónico:</label>
              <input type="email" id="correo_electronico" name="email" className="input-rapido" onChange={handleInputChange} required />

              <label htmlFor="telefono" className="label-rapido">Teléfono:</label>
              <input type="tel" id="telefono" name="phone" className="input-rapido" onChange={handleInputChange} required />

              <label htmlFor="facebook" className="label-rapido">Facebook:</label>
              <input type="text" id="facebook" name="facebook" className="input-rapido" onChange={handleInputChange} required />

              <label htmlFor="instagram" className="label-rapido">Instagram:</label>
              <input type="text" id="instagram" name="instagram" className="input-rapido" onChange={handleInputChange} required />

              <label htmlFor="direccion" className="label-rapido">Dirección:</label>
              <input type="text" id="direccion" name="address" className="input-rapido" onChange={handleInputChange} required />

              <label htmlFor="wallet_id" className="label-rapido">Enter business wallet id:</label>
              <input type="text" id="wallet_id" name="wallet_key" className="input-rapido" onChange={handleInputChange} required />

              <div className="additionalImages-container">
                <label className='additionalImages' htmlFor="additionalImages">
                  <div className="img-multiple">
                    {additionalImages.length > 0 ? (
                      <>
                        <div className="img-container">
                          {lastImagePreview && (
                            <img className='last-img' src={lastImagePreview} alt="Last Uploaded Image" />
                          )}
                          <p>{additionalImages.length} image(s) uploaded</p>
                        </div>

                        <button type="button" onClick={handleRemoveLastImage}>Remove Last Image</button>
                      </>
                    ) : (
                      <p className='upload'>Upload Additional Images</p>
                    )}
                  </div>
                </label>
              </div>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CrearEmprendimiento;

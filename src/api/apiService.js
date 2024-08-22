import axios from "axios";

const API_BASE_URL = 'http://localhost:8080/api/v1'

const apiService = {
  login: (credentials) => axios.post(`${API_BASE_URL}/login`, credentials),
  registerUser: (userData) => axios.post(`${API_BASE_URL}/register`, userData),

  // Subir imagen de perfil
  uploadProfileImage: (id, formData) => axios.post(`${API_BASE_URL}/upload/profile-image/${id}`, formData)
    .then(response => response.data)
    .catch(error => {
      throw new Error("Error al subir la imagen: " + error.message);
    }),

  // Obtener la URL de la imagen de perfil
  getProfileImg: (id) => axios.get(`${API_BASE_URL}/img_path/${id}`)
    .then(response => {
      //console.log('URL de la imagen:', response.data);
      return response.data;
    })
    .catch(error => {
      console.error('Error al obtener la imagen:', error);
      throw error;
    }),

    updateUser: (id, user) => axios.put(`${API_BASE_URL}/users/edit/${id}`, user, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.data)
    .catch(error => {
      throw new Error("Error al actualizar el usuario: " + error.message);
    }),

    //get Business
    getBusiness: () => axios.get(`${API_BASE_URL}/businesses`)
      .then(response => response.data)
      .catch(error => {
        throw new Error("Error al obtener los emprendimientos: " + error.message);
      }),

    getBusinessScore: ( id ) => axios.get(`${API_BASE_URL}/businesses/${id}/average-score`)
    .then(response => response.data)
    .catch(error => {
      throw new Error("Error al obtener la calificación del emprendimiento: " + error.message);
    }),

    createBusiness: (formData) => axios.post(`${API_BASE_URL}/businesses/create`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
      .then(response => response.data)
      .catch(error => {
        throw new Error("Error al crear el emprendimiento: " + error.message);
      }),

      //get business by user id (entrepreneur)
      getBusinessByUserId: (id) => axios.get(`${API_BASE_URL}/business/user/${id}`)
      .then(response => response.data)
      .catch(error => {
        throw new Error("Error al obtener los emprendimientos: " + error.message);
      }),

  // Add other API methods here
};

export default apiService;

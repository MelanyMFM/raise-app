import './editProfile.css'
import Nav from '../../components/Nav/Nav'
import { useEffect, useState } from 'react';
import DefaultImg from '../../assets/honey.png';

const EditProfile = ( ) => {

	const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		image: '',
		publicKey: ''

	});

	useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    // Do something with the user
		setUser(user);	
	}, []);

	useEffect(() => {
		// Obtén la altura de la barra de navegación
		const navbar = document.querySelector(".nav-bar");
		const header = document.querySelector(".edit-profile-container");
		
		// Establece el padding-top en el contenido para evitar la superposición
		if (navbar && header) {
				const navbarHeight = navbar.offsetHeight;
				header.style.paddingTop = `${navbarHeight+30}px`;
		}
}, []);

const handleImageUpload = (event) => {
	const file = event.target.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onloadend = () => {
			setImagePreview(reader.result);
		};
		reader.readAsDataURL(file);
		setImageFile(file); // Guarda el archivo para su posterior subida
	} else {
		setImagePreview(null);
		setImageFile(null); // Restablece el archivo si se elimina la selección
	}
};

	return (
		<>
			<Nav />
			<div className='edit-profile-container'>
				<div className='edit-profile-form'>
					<h2>Profile Settings</h2>
					<form action="">
						<div className='input-form'>
						<label htmlFor="name">Name: </label> <input type="text" name="name" id="name" placeholder={user.name.length > 0 ? user.name : "Edit your name"}/>
						</div>

						<div className='input-form'>
						<label htmlFor="email">Email: </label> <input type="mail" name="email" id="email" placeholder={user.email.length > 0 ? user.email : "Edit your email	"}/>
						</div>

						<div className='input-form'>
						<label htmlFor="password">Password: </label> <input type="password" name="password" id="password" placeholder='Enter a new password'/>
						</div>

						<div className='input-form'>
						<label className='image-input' htmlFor="image">Profile pic: 
            <img src={ imagePreview == null ? DefaultImg: imagePreview } alt="Preview" />
						<span>select file</span>
							
							</label> 
							<input type="file" name="image" id="image" accept="image/*" onChange={handleImageUpload}/>
						</div>
						<div className='input-form wallet-input'>
						<label htmlFor="wallet">Wallet-id: </label> <input type="text" name="wallet" id="wallet" placeholder={user.publicKey == null ||user.publicKey.length < 0 ? "Edit your wallet	": user.publicKey }/>
						</div>
						<button className='btn-form'>Save</button>
					</form>
				</div>
			</div>

		</>
	)
}

export default EditProfile
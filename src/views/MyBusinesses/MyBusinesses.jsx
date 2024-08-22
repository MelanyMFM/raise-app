import { Link } from 'react-router-dom'
import './myBusinesses.css'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import { useEffect, useState } from 'react'
import Emprendimiento from '../../components/Emprendimiento/Emprendimiento'
import apiService from '../../api/apiService'

const MyBusinesses = () => {

	const [myBusinesses, setMyBusinesses] = useState([]);


	useEffect(() => {
		const userId = JSON.parse(localStorage.getItem('user')).id;
		apiService.getBusinessByUserId( userId )
				.then(data => {
					console.log(data);
					setMyBusinesses(data);
				})
				.catch(error => {
					console.error('Error:', error);
				});
		}, []);

	useEffect(() => {
		// Obtén la altura de la barra de navegación
		const navbar = document.querySelector(".nav-bar");
		const header = document.querySelector(".myBusinesses-container");
		
		// Establece el padding-top en el contenido para evitar la superposición
		if (navbar && header) {
				const navbarHeight = navbar.offsetHeight;
				header.style.paddingTop = `${navbarHeight+30}px`;
		}
}, []);
	return (
		<>
		<Nav />
		<div className='myBusinesses-container' >
			<h2>Manage Your Businesses</h2>
			
			<div className='myBusinesses'>
			<Link to={"/CrearEmprendimiento"}>
				<div className='create-business'>
					<span>+</span>
					<p>Create a new business</p>
				</div>
			</Link>

				{myBusinesses.length > 0 ? myBusinesses.map(emprendimiento => (
					<Emprendimiento key={emprendimiento.id} props={emprendimiento} />
				)) : <p>No businesses found</p>}

			</div>
			
		</div>
		<Footer />
		</>
		
		
	)
}

export default MyBusinesses
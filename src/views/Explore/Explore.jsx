import './explore.css';
import Nav from '../../components/Nav/Nav';
import Emprendimiento from '../../components/Emprendimiento/Emprendimiento';
import emprendimientos from '../../assets/emprendimientos/emprendimientos';
import { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import TextoAnimado from '../../components/Texto-animado/TextoAnimado';

function Explore() {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState(''); //No va
    const itemsPerPage = 9;

    const filteredItems = searchTerm ? emprendimientos.filter(emprendimiento =>
         emprendimiento.nombre.toLowerCase().includes(searchTerm.toLowerCase())
          ): emprendimientos;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    function handlePrevPage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    function handleNextPage() {
        if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    }
 
    function handleSearch(event) {  //No va
        setSearchTerm(event.target.value);
        setCurrentPage(1); 
    }

    return (
        <>
            <div className='explore'>
                <Nav/>
                <div className='header-explore'>
                    <p className='titulo-explore amarillo'>Explore ☻</p>
                    <TextoAnimado className="texto-animado"/>
                    <input
                        type="text"
                        placeholder="🔍︎ Search"
                        value={searchTerm}
                        onChange={handleSearch}
                        className="search-bar"
                    />
                </div>
                <p className='subtitulo-header'>Join the movement. Build a stronger tomorrow.</p>
                <p className='titulo-emprendimientos amarillo'>Emprendimientos</p>
                <div className='emprendimientos'>
                    {currentItems.map(emprendimiento => 
                    <Emprendimiento key={emprendimiento.id}
                        props = {emprendimiento}
                        className= "emprendimiento"//{emprendimiento.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ? 'highlight' : ''}
                        />)}
                </div>
                <div className='pagination'>
                    <p onClick={handlePrevPage} disabled={currentPage === 1}> &lt;-- </p>
                    <span>Page {currentPage}</span>
                    <p onClick={handleNextPage} disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)}>--&gt; </p>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Explore;

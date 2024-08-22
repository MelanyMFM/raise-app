import './explore.css';
import Nav from '../../components/Nav/Nav';
import Emprendimiento from '../../components/Emprendimiento/Emprendimiento';
import { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import TextoAnimado from '../../components/Texto-animado/TextoAnimado';
import apiService from '../../api/apiService';
import DataNotFound from '../../assets/data-not-found.svg';

function Explore() {
    const [emprendimientos, setEmprendimientos] = useState([]); // a
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPage = 9;

    useEffect(() => {
        apiService.getBusiness()
            .then(data => {
                console.log(data);
                setEmprendimientos(data); // b
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filteredItems = searchTerm ? emprendimientos.filter(emprendimiento =>
        emprendimiento.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    ) : emprendimientos;

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

    function handleSearch(event) {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    }

    return (
        <>
            <div className='explore'>
                <Nav />
                <div className='header-explore'>
                    <p className='titulo-explore amarillo'>Explore ☻</p>
                    <TextoAnimado className="texto-animado" />
                    <input
                        type="text"
                        placeholder="🔍︎ Search"
                        value={searchTerm}
                        onChange={handleSearch}
                        className="search-bar"
                    />
                </div>
                <p className='subtitulo-header'>Join the movement. Build a stronger tomorrow.</p>
                {
                    emprendimientos.length === 0 ? 
                    <>
                    <div className="no-business-container">
                        <h4 className="no-business-text">
                            There is not business to show
                        </h4>
                        <img src={DataNotFound} alt="" />
                    </div>                    
                    </> : (
                        <>
                            <p className='titulo-emprendimientos amarillo'>Business</p>
                            <div className='emprendimientos'>
                                {currentItems.map(emprendimiento =>
                                    <Emprendimiento 
                                    key={emprendimiento.id}
                                    props={emprendimiento}
                                    className="emprendimiento"
                                    />
                                )}
                            </div>
                            <div className='pagination'>
                                <p onClick={handlePrevPage} disabled={currentPage === 1}> &lt;-- </p>
                                <span>Page {currentPage}</span>
                                <p onClick={handleNextPage} disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)}>--&gt; </p>
                            </div>
                        </>
                    )
                }
            </div>
            <Footer />
        </>
    )
}

export default Explore;

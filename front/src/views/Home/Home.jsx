import Contact from '../../components/Contact/Contact'
import './home.css'
import About from '../../components/About/About'
import Nav from '../../components/Nav/Nav'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function Home(){
    return(<>
        <div className='page-container'>
            <Nav />
            <Header/>
            <About/>
            <Contact/>
            <Footer />
        </div>
        

    </>)
}

export default Home;
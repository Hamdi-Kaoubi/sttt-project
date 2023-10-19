import {useState, useEffect} from 'react'
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import './index.css';
import GridLoader from "react-spinners/GridLoader";
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Up from './components/Up/Up';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
// import Staff from './components/Staff/Staff';
import Services from './components/Servicess/Services';
import { Helmet } from 'react-helmet';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])


  return (
    <div className="App">
    <Helmet>
      <title>STTT</title>
      <meta
      name="description"
      content="STTT - Revolutionizing Telecommunication Technology. Explore our cutting-edge solutions in network technology, optic fiber innovations, and more."
      />
      <meta 
      name="keywords"
      content="telecommunication, technology, network, wifi, optic-fibre"
      />
    </Helmet>
      {
        loading ?
        <GridLoader
        className='spinner'
        color='#168aad'
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        :
        <div>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route  path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>} />
            {/*<Route path='/staff' element={<Staff/>} />*/}
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
          <Up/>
          <Footer/>
        </div>
      }
      
    </div>
  );
}

export default App;

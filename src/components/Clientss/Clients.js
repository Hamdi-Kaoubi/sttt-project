import React from 'react'
import './Clients.css'
import client1 from '../../assets/TunTel.jpg'
import client2 from '../../assets/SNCFT.jpg'
import client3 from '../../assets/Sotetel.jpg'
import client4 from '../../assets/SIRTTP.jpg'
import client5 from '../../assets/chabaket.jpg'
import client6 from '../../assets/Affimtech.jpg'
import client7 from '../../assets/sotelsud.jpg'
import { useLanguage } from '../../LanguageContext'

const Clients = () => {

  const {language} = useLanguage();

  return (
    <React.Fragment>
    {language === 'fr' ? (
      <div id='clients-section' className='clients-contain' >
        <h1>Clients et <span>cooperants:</span></h1>
        <div className='images'>
            <img src={client1} alt='client'/>
            <img src={client2} alt='client'/>
            <img src={client3} alt='client'/>
            <img src={client4} alt='client'/>
            <img src={client5} alt='client'/>
            <img src={client6} alt='client'/>
            <img src={client7} alt='client'/>
        </div>
    </div>
    ) : (
      <div id='clients-section' className='clients-contain' >
        <h1>Clients and <span>parteners:</span></h1>
        <div className='images'>
            <img src={client1} alt='client'/>
            <img src={client2} alt='client'/>
            <img src={client3} alt='client'/>
            <img src={client4} alt='client'/>
            <img src={client5} alt='client'/>
            <img src={client6} alt='client'/>
            <img src={client7} alt='client'/>
        </div>
    </div>
    )}
    </React.Fragment>
  )
}

export default Clients;
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Contact.css'
import { useLanguage } from '../../LanguageContext';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const Contact = () => {

    const {language} = useLanguage();

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_omehu22', 'template_yhvssu9', form.current, 'b9q8zWOJi4IMAS9m7')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

return (
    <div className='contact'>
    <Helmet>
        <title>STTT Contact</title>
        <meta name='description' content='STTT is awlays at the customers service and you contact us when ever you need.'/>
        <meta name="keywords" content="telecommunication, technology, network, wifi, optic-fibre"/>
    </Helmet>
        <motion.div 
        className='message'
        initial={{opacity: 0, y: 70}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.5}}
        >
            {language === 'fr' ? (
                <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='first_name' placeholder='votre prenom' required/>
                <input type='text' name='last_name' placeholder='votre nom' required/>
                <input type='email' name='email' placeholder='votre adresse email' required/>
                <textarea name='message' rows='7' placeholder='votre message' required/>
                <button type='submit'>Envoyez</button>
            </form>
            ) : (
                <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='first_name' placeholder='Your first name' required/>
                <input type='text' name='last_name' placeholder='Your last name' required/>
                <input type='email' name='email' placeholder='Your email adress' required/>
                <textarea name='message' rows='7' placeholder='Your message' required/>
                <button type='submit'>Send</button>
            </form>
            )}
        </motion.div>
        <motion.div 
        className='our-coordinates'
        initial={{opacity: 0, y: 70}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.8}}
        >
            <h1>Contact infos</h1>
            <div className='coordinates-item'>
                <LocationOnIcon style={{cursor: 'pointer'}}/>
                <div>
                <p>Cyber Parc Sidi Bouzid, Rue de l'Hopital</p>
                <p>9100 Bureau numéro 1, Premier etage</p>
                </div>
            </div>
            <div className='coordinates-item'>
                <EmailIcon style={{cursor: 'pointer'}}/>
                <p>contacte.sttt@gmail.com</p>
            </div>
            <div className='coordinates-item'>
                <CallIcon style={{cursor: 'pointer'}}/>
                <p>(+216) 76628628 | (+216) 98622614</p>
            </div>
            <div className='some-icons'>
                <FacebookIcon style={{cursor: 'pointer'}}/>
                <a href='https://www.linkedin.com/in/sttt-soci%C3%A9t%C3%A9-tasnim-bb0463297/?fbclid=IwAR26velLO-Ihv_w0GudAtK6pQ9yPZY7Etnx81fkUGDQkdRepycSxs7pTXP8' rel="noreferrer" target='_blank'><LinkedInIcon style={{cursor: 'pointer'}}/></a>
            </div>
        </motion.div>
        <motion.div 
        className='maps'
        initial={{opacity: 0, y: 70}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 1}}
        >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5494.57160495608!2d9.460360503598737!3d35.02943269567242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fec35103a9b08d%3A0x7798e114a035c14a!2sCyber%20Parc!5e0!3m2!1sen!2stn!4v1695734279246!5m2!1sen!2stn" title='map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </motion.div>
    </div>
)
}

export default Contact
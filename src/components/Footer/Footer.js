import React from 'react'
import './Footer.css'
import logo from '../../assets/New Project-2.png'
import { Center, Divider } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Footer = () => {
return (
    <React.Fragment>
    <div className='footer'>
        <div className='left-side'>
            <img src={logo} alt='logo' style={{backgroundColor: 'white'}}/>
            <article style={{textAlign: 'left'}}>
                Cyber Parc de Sidi Bouzid<br/>
                Rue de l'Hopital, 9100<br/>
                Bureau numero 1, premier étage, Sidi Bouzid Ouest
            </article>
            <div className='flx-bx'>
                <h6>Email: </h6>
                <p>contacte.sttt@gmail.com</p>
            </div>
            <div className='flx-bx'>
                <h6>Tél: </h6>
                <p>(+216) 76628628 | (+216) 98622614</p>
            </div>
        </div>
        <Center height='350px' className='devider'>
            <Divider orientation='vertical'/>
        </Center>
        <div className='right-side'>
            <Link to='/about' className='links'>about</Link>
            <Link to='/services' className='links'>services</Link>
            <Link to='/staff' className='links'>Equipe</Link>
            <Link to='/contact' className='links'>Contact</Link>
        </div>
    </div>
    <Divider />
    <p>&copy; 2023 STTT, all rights reserved</p>
    </React.Fragment>
)
}

export default React.memo(Footer);
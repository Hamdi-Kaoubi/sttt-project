import React from 'react'
import './About.css'
import { Center, Divider } from '@chakra-ui/react'
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import Projects from '../Projects/Projects';
import Clients from '../Clientss/Clients';
import { useLanguage } from '../../LanguageContext';
import { Helmet } from 'react-helmet';

const About = () => {

    const {language} = useLanguage();

    const handleClick = (anchor) => () => { 
        const id = `${anchor}-section`; 
        const element = document.getElementById(id); 
        if (element) { 
          element.scrollIntoView({ 
            behavior: "smooth", 
            block: "start",
          }); 
        } 
      };

  return (
    <React.Fragment>
    <Helmet>
        <title>About STTT</title>
        <meta name='description' content='All you need to know about our new STTT startup and more.'/>
    </Helmet>
        {language === 'fr' ? (
            <div className='about'>
        <div className='container'>
        <div className='left'>
            <h1>Qui somme nous ?</h1>
            <div className='paragraph'>
                <p><span>STTT: </span> <span>S</span>ocieté <span>T</span>asnim des <span>T</span>echniques de <span>T</span>élécommunication</p>
                <p>fondée en 2019, est une startup avant-gardiste dédiée à la transformation</p>
                <p>des technologies de télécommunications et des solutions réseau.</p> 
                <p>Notre engagement envers l'innovation et l'expertise nous pousse à repousser</p> 
                <p>les limites de ce qui est possible dans le monde des télécommunications.</p>
                <p>Rejoignez-nous dans ce voyage passionnant vers un avenir connecté.</p>
            </div>
        </div>
        <Center height='250px' color='#00296b' className='devider'>
            <Divider orientation='vertical'/>
        </Center>
        <div className='right'>
            <h1><span>STTT</span> en quelques chiffres: </h1>
            <div className='chiffres'>
                <div className='item'>
                    <a href='#project' onClick={handleClick('project')}><AccountTreeIcon sx={{fontSize: 60, color: '#168aad'}}/></a>
                    <h3><span>+7</span> grands projets</h3>
                    <h4>(+ en cours)</h4>
                </div>
                <div className='item'>
                    <a href='#clients' onClick={handleClick('clients')}><GroupAddOutlinedIcon sx={{fontSize: 60, color: '#168aad'}}/></a>
                    
                    <h3><span>+6</span> Clients</h3>
                    <h4>(Entreprises/ Societés)</h4>
                </div>
                <div className='item'>
                    <EngineeringOutlinedIcon sx={{fontSize: 60, color: '#168aad'}}/>
                    <h3><span>22</span> travailleurs</h3>
                    <h4>(En augmentant)</h4>
                </div>
            </div>
        </div>
        </div>
        <Projects/>
        <Clients/>
    </div>
        ) : (
            <div className='about'>
        <div className='container'>
        <div className='left'>
            <h1>Who are we ?</h1>
            <div className='paragraph'>
                <p><span>STTT: </span> <span>T</span>asnime <span>S</span>ociety of <span>T</span>elecommunication <span>T</span>echnics</p>
                <p>founded in 2019, is a forward-thinking startup dedicated to transforming</p>
                <p>telecommunication technologies and network solutions.</p> 
                <p>Our commitment to innovation and expertise drives us to push the boundaries </p> 
                <p>of what's possible in the world of telecommunications.</p>
                <p> Join us on this exciting journey towards a connected future.</p>
            </div>
        </div>
        <Center height='250px' color='#00296b' className='devider'>
            <Divider orientation='vertical'/>
        </Center>
        <div className='right'>
            <h1><span>STTT</span> in some numbers: </h1>
            <div className='chiffres'>
                <div className='item'>
                    <a href='#project' onClick={handleClick('project')}><AccountTreeIcon sx={{fontSize: 60, color: '#168aad'}}/></a>
                    <h3><span>+7</span> Big projects</h3>
                    <h4>(+ in progress)</h4>
                </div>
                <div className='item'>
                    <a href='#clients' onClick={handleClick('clients')}><GroupAddOutlinedIcon sx={{fontSize: 60, color: '#168aad'}}/></a>
                    
                    <h3><span>+6</span> Clients</h3>
                    <h4>(Companies/ Societies)</h4>
                </div>
                <div className='item'>
                    <EngineeringOutlinedIcon sx={{fontSize: 60, color: '#168aad'}}/>
                    <h3><span>22</span> workers</h3>
                    <h4>(increasing)</h4>
                </div>
            </div>
        </div>
        </div>
        <Projects/>
        <Clients/>
    </div>
        )}
    </React.Fragment>
  )
}

export default About
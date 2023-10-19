import React from 'react'
import './Workers.css'
import { useLanguage } from '../../LanguageContext'
import image from '../../assets/gerant.jpg'


const workerData = [
    {
        id: 1,
        name: 'Azizi Habib',
        image:image,
        position: 'Gerant de STTT'
    },
    {
        id: 2,
        name: 'Azizi Habib',
        image:image,
        position: 'Gerant de STTT'
    },
    {
        id: 3,
        name: 'Azizi Habib',
        image:image,
        position: 'Gerant de STTT'
    },
];
const workerData2 = [
    {
        id: 1,
        name: 'Azizi Habib',
        image:image,
        position: 'STTT Manager'
    },
    {
        id: 2,
        name: 'Azizi Habib',
        image:image,
        position: 'STTT Manager'
    },
    {
        id: 3,
        name: 'Azizi Habib',
        image:image,
        position: 'STTT Manager'
    },
];

const Workers = () => {
    const {language} = useLanguage();
  return (
    <React.Fragment>
        {language === 'fr' ? (
            <div id='workers-section' className='workers'>
                <div>
                    <h2>Equipe et Travailleurs</h2>
                    <p>
                        STTT compte une équipe enthousiaste d'ingénieurs,<br/> 
                        de techniciens et d'ouvriers qui s'adaptent à toutes les conditions de travail.<br/> 
                        Si vous êtes impatient de rejoindre l'équipe, vous pouvez nous contacter 
                    </p>
                </div>
                <div className='cards_cnt'>
                    {workerData.map((e) => {
                        return (
                        <div className='card-worker'>
                            <img src={e.image} alt=''/>
                            <h2>{e.name}</h2>
                            <p>{e.position}</p>
                        </div>
                        )
                    })}
                </div>
            </div>
        ) : (
            <div id='workers-section' className='workers'>
                <div>
                    <h2>Team and Workers</h2>
                    <p>
                        STTT has an enthusiastic team of engineers,<br/> 
                        of technicians and workers who adapt to all working conditions.<br/> 
                        If you are eager to join the team, you can contact us
                    </p>
                </div>
                <div className='cards_cnt'>
                    {workerData2.map((e) => {
                        return (
                        <div className='card-worker'>
                            <img src={e.image} alt=''/>
                            <h2>{e.name}</h2>
                            <p>{e.position}</p>
                        </div>
                        )
                    })}
                </div>
            </div>
        )}
    </React.Fragment>
  )
}

export default React.memo(Workers)
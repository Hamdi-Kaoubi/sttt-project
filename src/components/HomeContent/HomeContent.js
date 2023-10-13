import React from "react";
import "./HomeContent.css";
import { useLanguage } from "../../LanguageContext";
import before from "../../assets/before.jpg";
import after from "../../assets/after.jpg";
import team1 from "../../assets/canalisation.jpg";
import team2 from "../../assets/staff1.jpg";
import team3 from "../../assets/staff2.jpg";
import team4 from "../../assets/tirage.jpg";
import team5 from "../../assets/tirage1.jpg";
import CellTowerIcon from "@mui/icons-material/CellTower";
import ConstructionIcon from "@mui/icons-material/Construction";

const HomeContent = () => {
  const { language } = useLanguage();
  return (
    <React.Fragment>
      {language === "fr" ? (
        <div className="homeCntainer">
          <h1>STTT, la technologie de demain</h1>
          <div className="homeItems">
            <div className="itm1">
              <h2>Efficacité</h2>
              <div className="efficace">
                <div className="avant-apres">
                  <img src={before} alt="before" id="img1" />
                  <p>Avant</p>
                </div>
                <div className="avant-apres">
                  <img src={after} alt="after" id="img2" />
                  <p>Apres</p>
                </div>
              </div>
            </div>
            <div className="itm2">
              <p>
                Dans le domaine de la technologie des télécommunications, cette
                entreprise incarne une efficacité et une discipline
                remarquables. Grâce à une équipe dévouée, elle optimise les
                ressources et met en œuvre une gestion de projet disciplinée.
                Cet engagement envers l'innovation la positionne comme un acteur
                prometteur dans l'industrie.
              </p>
            </div>
            <div className="itm3">
              <p>
                La startup compte une équipe motivée et travailleuse, animée par
                une passion commune pour l'innovation et l'excellence. Leur
                dévouement est la force motrice derrière le succès de
                l'entreprise, les propulsant à surmonter les défis et à obtenir
                des résultats remarquables.
              </p>
            </div>
            <div className="itm4">
              <h2>Equipe motivée</h2>
              <div className="imgs">
                <img src={team1} alt="team" />
                <img src={team2} alt="team" />
                <img src={team3} alt="team" />
                <img src={team4} alt="team" />
                <img src={team5} alt="team" />
              </div>
            </div>
            <div className="itm5">
              <CellTowerIcon className="installation__icon" />
              <h2>Infrastructure de réseau</h2>
              <article>
                - Installation des nouvelles abonées.
                <br />
                - Installation et raccordement des fibres en cuivre et optiques.
                <br />
                - Installation des tours de réseau.
                <br />
              </article>
            </div>
            <div className="itm6">
              <ConstructionIcon className="installation__icon"/>
              <h2>Entretiens & Mesures</h2>
              <article>
                - Entretiens préventifs.<br/>
                - Entretiens correctifs et maintenances.<br/>
                - Etudes, mesures, ADSL, signalisation.
              </article>
            </div>
          </div>
        </div>
      ) : (
        <div className="homeCntainer">
          <h1>STTT, the technology of tomorrow</h1>
          <div className="homeItems">
            <div className="itm1">
              <h2>Efficiency</h2>
              <div className="efficace">
                <div className="avant-apres">
                  <img src={before} alt="before" id="img1" />
                  <p>Before</p>
                </div>
                <div className="avant-apres">
                  <img src={after} alt="after" id="img2" />
                  <p>After</p>
                </div>
              </div>
            </div>
            <div className="itm2">
              <p>
                In the field of telecommunications technology, this company
                exemplifies remarkable efficiency and discipline. With a
                dedicated team, it optimizes resources and employs disciplined
                project management. This commitment to innovation positions it
                as a promising player in the industry. You're welcome! If you
                have any more questions or need further assistance, feel free to
                ask.
              </p>
            </div>
            <div className="itm3">
              <p>
                The startup boasts a motivated and hardworking team, driven by a
                shared passion for innovation and excellence. Their dedication
                is the driving force behind the company's success, propelling
                them to overcome challenges and achieve remarkable results.
              </p>
            </div>
            <div className="itm4">
              <h2>Motivated team</h2>
              <div className="imgs">
                <img src={team1} alt="team" />
                <img src={team2} alt="team" />
                <img src={team3} alt="team" />
                <img src={team4} alt="team" />
                <img src={team5} alt="team" />
              </div>
            </div>
            <div className="itm5">
              <CellTowerIcon className="installation__icon" />
              <h2>Network infrastructure</h2>
              <article>
                - Installation of new subscriptions.
                <br />
                - Installation and connection of copper and optical fibers.
                <br />
                - Installation of network towers.
                <br />
              </article>
            </div>
            <div className="itm6">
              <ConstructionIcon className="installation__icon"/>
              <h2>Maintenance & measurements</h2>
              <article>
                - Preventive maintenance.<br/>
                - Corrective maintenance and servicing.<br/>
                - Studies, measurements, ADSL, signaling.
              </article>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default HomeContent;

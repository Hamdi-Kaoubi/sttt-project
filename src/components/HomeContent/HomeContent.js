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
import { motion } from "framer-motion";

const HomeContent = ({ textVariants }) => {
  const { language } = useLanguage();
  return (
    <React.Fragment>
      {language === "fr" ? (
        <div className="homeCntainer">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
          >
            STTT, la technologie de demain
          </motion.h1>
          <div className="homeItems">
            <div className="itm1">
              <motion.h2
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
              >
                Efficacité
              </motion.h2>
              <motion.div
                className="efficace"
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
              >
                <div className="avant-apres">
                  <img src={before} alt="before" id="img1" />
                  <p>Avant</p>
                </div>
                <div className="avant-apres">
                  <img src={after} alt="after" id="img2" />
                  <p>Apres</p>
                </div>
              </motion.div>
            </div>
            <div className="itm2">
              <motion.p
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
              >
                Dans le domaine de la technologie des télécommunications, cette
                entreprise incarne une efficacité et une discipline
                remarquables. Grâce à une équipe dévouée, elle optimise les
                ressources et met en œuvre une gestion de projet disciplinée.
                Cet engagement envers l'innovation la positionne comme un acteur
                prometteur dans l'industrie.
              </motion.p>
            </div>
            <div className="itm3">
              <motion.p
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
              >
                La startup compte une équipe motivée et travailleuse, animée par
                une passion commune pour l'innovation et l'excellence. Leur
                dévouement est la force motrice derrière le succès de
                l'entreprise, les propulsant à surmonter les défis et à obtenir
                des résultats remarquables.
              </motion.p>
            </div>
            <div className="itm4">
              <motion.h2
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
              >
                Equipe motivée
              </motion.h2>
              <motion.div
                className="imgs"
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
              >
                <img src={team1} alt="team" />
                <img src={team2} alt="team" />
                <img src={team3} alt="team" />
                <img src={team4} alt="team" />
                <img src={team5} alt="team" />
              </motion.div>
            </div>
            <motion.div
              className="itm5"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
            >
              <CellTowerIcon className="installation__icon" />
              <motion.h2>Infrastructure de réseau</motion.h2>
              <motion.article>
                - Installation des nouvelles abonées.
                <br />
                - Installation et raccordement des fibres en cuivre et optiques.
                <br />
                - Installation des tours de réseau.
                <br />
              </motion.article>
            </motion.div>
            <motion.div
              className="itm6"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
            >
              <ConstructionIcon className="installation__icon" />
              <h2>Entretiens & Mesures</h2>
              <article>
                - Entretiens préventifs.
                <br />
                - Entretiens correctifs et maintenances.
                <br />- Etudes, mesures, ADSL, signalisation.
              </article>
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="homeCntainer">
          <motion.h1 
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          >
            STTT, the technology of tomorrow
          </motion.h1>
          <div className="homeItems">
            <div className="itm1">
              <motion.h2 
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              >
                Efficiency
              </motion.h2>
              <motion.div 
              className="efficace"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              >
                <div className="avant-apres">
                  <img src={before} alt="before" id="img1" />
                  <p>Before</p>
                </div>
                <div className="avant-apres">
                  <img src={after} alt="after" id="img2" />
                  <p>After</p>
                </div>
              </motion.div>
            </div>
            <div className="itm2">
              <motion.p 
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              >
                In the field of telecommunications technology, this company
                exemplifies remarkable efficiency and discipline. With a
                dedicated team, it optimizes resources and employs disciplined
                project management. This commitment to innovation positions it
                as a promising player in the industry. You're welcome! If you
                have any more questions or need further assistance, feel free to
                ask.
              </motion.p>
            </div>
            <div className="itm3">
              <motion.p 
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              >
                The startup boasts a motivated and hardworking team, driven by a
                shared passion for innovation and excellence. Their dedication
                is the driving force behind the company's success, propelling
                them to overcome challenges and achieve remarkable results.
              </motion.p>
            </div>
            <div className="itm4">
              <motion.h2 
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              >
                Motivated team
              </motion.h2>
              <motion.div 
              className="imgs"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              >
                <img src={team1} alt="team" />
                <img src={team2} alt="team" />
                <img src={team3} alt="team" />
                <img src={team4} alt="team" />
                <img src={team5} alt="team" />
              </motion.div>
            </div>
            <motion.div 
            className="itm5"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            >
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
            </motion.div>
            <motion.div 
            className="itm6"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            >
              <ConstructionIcon className="installation__icon" />
              <h2>Maintenance & measurements</h2>
              <article>
                - Preventive maintenance.
                <br />
                - Corrective maintenance and servicing.
                <br />- Studies, measurements, ADSL, signaling.
              </article>
            </motion.div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
export default React.memo(HomeContent);
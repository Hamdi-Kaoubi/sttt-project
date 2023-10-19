import React from "react";
import "./Projects.css";
import Card from "../Card/Card";
import { useLanguage } from "../../LanguageContext";

const Projects = () => {
  const { language } = useLanguage();

  const Data1 = [
    {
      id: 1,
      title: "Entretiens SNCFT",
      description1: "-Entretien RSX et signalisation.",
      description2: "-Entretien préventif de marché fibres optiques.",
      description3: "",
    },
    {
      id: 2,
      title: "Sotetel marché FTTX et edunet",
      description1: "-Construction et nouvelles installations fibres optiques.",
      description2: "",
      description3: "",
    },
    {
      id: 3,
      title: "Entretiens AFFIMATECH Plus",
      description1: "-Entretien reseau RLA.",
      description2: "-construction et raccordement d'une nouvelle abonnée.",
      description3: "",
    },
    {
      id: 4,
      title: "Projet CHABAKET",
      description1: "-Terminé une nouvelle construction.",
      description2: "",
      description3: "",
    },
    {
      id: 5,
      title: "Entretiens SIRTTP",
      description1: "-Entretien préventif  RLA chez Tunisie Telecom",
      description2: "",
      description3: "",
    },
    {
      id: 6,
      title: "Autres",
      description1: "-ADSL.",
      description2: "-Tirage et raccordement cables/fibres.",
      description3: "",
    },
  ];
  const Data2 = [
    {
      id: 1,
      title: "SNCFT maintenances",
      description1: "-maintenance RSX and signaling.",
      description2: "-preventive maintenance of optic fibers deal.",
      description3: "",
    },
    {
      id: 2,
      title: "Sotetel deal FTTX and edunet",
      description1: "-Construction of new optic fibers installations.",
      description2: "",
      description3: "",
    },
    {
      id: 3,
      title: " AFFIMATECH Plus Maintenances",
      description1: "-RLA network maintenance.",
      description2: "-construction and connecting of a new subscription.",
      description3: "",
    },
    {
      id: 4,
      title: "CHABAKET project",
      description1: "-Finishing of a new construction.",
      description2: "",
      description3: "",
    },
    {
      id: 5,
      title: "SIRTTP maintenences",
      description1: "-Preventive maintenance of RLA near Tunisie Telecom",
      description2: "",
      description3: "",
    },
    {
      id: 6,
      title: "Others",
      description1: "-ADSL.",
      description2: "-Pulling and connecting cables/fibres.",
      description3: "",
    },
  ];

  return (
    <React.Fragment>
      {language === "fr" ? (
        <div id="project-section" className="project">
          <h1>Nos projets</h1>
          <p>Voici quelques-uns des projets</p>
          <p>
            que nous avons réalisés et sur lesquels nous travaillons
            actuellement
          </p>
          <di className="projects-container">
            {Data1.map((e) => (
              <Card key={e.id} e={e} />
            ))}
          </di>
        </div>
      ) : (
        <div id="project-section" className="project">
          <h1>Our projects</h1>
          <p>Here are some of our projects</p>
          <p>that we have achieved and are currently working on</p>
          <di className="projects-container">
            {Data2.map((e) => (
              <Card key={e.id} e={e} />
            ))}
          </di>
        </div>
      )}
    </React.Fragment>
  );
};

export default React.memo(Projects);

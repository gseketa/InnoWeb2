/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import {useState} from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";


// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Testimonials from "pages/Presentation/sections/Testimonials";


// Routes
import routes from "routes";
import routesDE from "routesDE";
import routesHR from "routesHR";

// Icons
import IconConsulting from "assets/images/IconConsulting.png";
import IconEngineering from "assets/images/IconEngineering.png";

// Images
import bgImage from "assets/images/innMain3.png";
import innserv1 from "assets/images/innserv1.jpg";
import innserv2 from "assets/images/innserv2.png";

const date = new Date().getFullYear();

const LANGUAGES = {
  english: {
    weAre: 'WE ARE',
    weAreText:`an engineering company specializing in project management, 
    engineering design, and digital twin solutions`,
    consultingTitle: 'ENGINEERING & PROJECT MANAGEMENT',
    consultingText: `Our state-of-the-art project management services cover 
    projects of all sizes, from initial planning to successful 
    execution. As a trusted supplier and coordinator, 
    we also provide innovative and reliable multidisciplinary 3D concurrent
     engineering solutions for power and process plants, 
     tailored to meet the unique needs of each client.`,
    engineeringTitle: 'DIGITAL TWIN SOLUTIONS',
    engineeringText: `We strive to provide our customers with complete control 
    over their physical assets through the power of digital twin technology. 
    By consolidating data and documentation from various sources 
    into a single, reliable source of truth, we empower our customers 
    to make informed decisions and optimize their asset performance.`,
    services1Title: 'ENGINEERING & PROJECT MANAGEMENT',
    services1Text1: `We offer engineering design and project management services 
    for capital projects, as well as ongoing plant maintenance 
      and construction support. Our expert team has vast experience 
    in plant facility engineering and operation, using state-of-the-art tools 
    and complying with international and national norms. `,
    services1Text2: `With our team and a wide network of partners we can offer 
    the following services:`,
    services1Bullet1: 'Project management',
    services1Bullet2: 'Project monitoring and control',
    services1Bullet3: 'Process engineering and design',
    services1Bullet4: 'Mechanical engineering',
    services1Bullet5: 'Arrangement design and piping engineering',
    services1Bullet6: 'Civil and structural engineering',
    services1Bullet7: 'Electrical engineering',
    services1Bullet8: 'I&C engineering',
    services2Title: 'DIGITAL TWIN SOLUTIONS',
    services2Text1: `A digital twin is a virtual model of physical assets 
    that consolidates 2D and 3D data, laser scans, lists, drawings, and asset 
    history into a single point of truth for easy access to asset data from any source.
    By aligning documentation with the actual asset conditions, 
    stakeholders can make informed decisions based on accurate and up-to-date information, 
    ultimately closing the gap between the as-built (how the asset was constructed) 
    and as-documented (how the asset was supposed to be constructed) conditions. `,
    services2Text2: `Based on our extensive experience with integrating data 
    from various applications and tools into digital twin solutions, we are capable to provide 
    the following services:`,
    services2Bullet1: 'Collecting and migrating existing documentation and data',
    services2Bullet2: 'Reviewing and updating assets data and uncovering potential data and documentation gaps',
    services2Bullet3: 'Interlinking data and documentation in a single virtual model',
    services2Bullet4: 'Deploying the digital twin in daily operations, maintenance, and projects',
    services2Bullet5: 'Coaching and training customer staff and/or contractors',
    contactCountrySwitzerland: `Switzerland`,
    contactCountryCroatia: `Croatia`,
    contactCountryGermany: `Germany`,
    contactVATSwitzerland: `VAT No`,
    contactVATCroatia: `VAT No`,
    contactVATGermany: `VAT No`,
    contactDirector: `Managing Director`,
  },
  deutsch: {
    weAre: 'WIR SIND',
    weAreText:`ein Ingenieurunternehmen, das auf Projektmanagement, Engineering und digitale Zwilling-Lösungen spezialisiert ist.`,
    consultingTitle: 'ENGINEERING & PROJEKTMANAGEMENT', 
    consultingText: `Unsere hochmodernen Projektmanagementdienstleistungen decken Projekte 
    jeder Grösse von der detaillierten Planung bis zur erfolgreichen Ausführung und darüber 
    hinaus ab. Als zuverlässiger Lieferant und effizienter Koordinator bieten wir zudem 
    massgeschneiderte multidisziplinäre Engineering-Lösungen für eine optimale Leistung 
    von Kraftwerken und Prozessanlagen.`, 
    engineeringTitle: 'DIGITALE ZWILLING-LÖSUNGEN',
    engineeringText: `Durch Einsatz digitaler Zwillingstechnologie erhalten 
    unsere Kunden die vollständige Übersicht und Kontrolle über ihre Anlagen. 
    Mittels Konsolidierung von Daten und Dokumenten aus verschiedenen Quellen in eine einzige, 
    können unsere Kunden fundierte Entscheidungen treffen und die Leistung ihrer Anlagen optimieren.`,
    services1Title: 'ENGINEERING & PROJEKTMANAGEMENT',
    services1Text1: `Wir bieten Engineering- und Projektmanagementdienstleistungen 
    für Investitionsprojekte sowie laufende Anlagenwartung und Baustellenunterstützung an. 
    Unser Expertenteam verfügt über umfangreiche Erfahrung in der Anlagentechnik und im Anlagenbetrieb, 
    unter Verwendung modernster Tools sowie Erfüllung internationaler und nationaler Normen.`,
    services1Text2: `Mit unserem Team und einem breiten Netzwerk von Partnern bieten wir folgende Dienstleistungen an:`,
    services1Bullet1: 'Projektmanagement',
    services1Bullet2: 'Projektüberwachung und -steuerung',
    services1Bullet3: 'Verfahrenstechnik und -design',
    services1Bullet4: 'Maschinenbau',
    services1Bullet5: 'Anordnungs- und Rohrleitungsdesign',
    services1Bullet6: 'Bauingenieurwesen',
    services1Bullet7: 'Elektrotechnik',
    services1Bullet8: 'Mess- und Regeltechnik',
    services2Title: 'DIGITALE ZWILLING-LÖSUNGEN',
    services2Text1: `Ein digitaler Zwilling ist ein virtuelles Modell physischer Anlagen, 
    welches 2D- und 3D-Daten, Laserscans, Listen, Zeichnungen und Anlagenhistorie konsolidiert 
    und somit den Zugriff auf Anlagendaten jeder Quelle ermöglicht. Durch die Ausrichtung der Dokumentation 
    auf die tatsächlichen Anlagenbedingungen können Entscheidungsträger fundierte 
    Entscheidungen auf der Grundlage genauer und aktueller Informationen treffen und 
    letztendlich die Kluft zwischen den As-built-Bedingungen (wie die Anlage gebaut wurde) 
    und den As-documented-Bedingungen (wie die Anlage gebaut werden sollte) schliessen.`,
    services2Text2: `Basierend auf unserer umfangreichen Erfahrung bei der Integration von Daten aus 
    verschiedenen Anwendungen und Tools in digitale Zwilling-Lösungen bieten wir folgende Dienstleistungen an:`,
    services2Bullet1: 'Sammeln und Migrieren bestehender Dokumentation und Daten',
    services2Bullet2: 'Überprüfen und Aktualisieren von Anlagendaten sowie Aufdecken potenzieller Daten- und Dokumentationslücken',
    services2Bullet3: 'Verknüpfen von Daten und Dokumentation in einem einzigen virtuellen Modell',
    services2Bullet4: 'Einsatz des digitalen Zwillings in täglichen Betriebsabläufen, bei Wartung und in Projekten',
    services2Bullet5: 'Coachings und Schulungen von Kundenmitarbeitern und/oder Kontraktoren',
    contactCountrySwitzerland: `Schweiz`,
    contactCountryCroatia: `Kroatien`,
    contactCountryGermany: `Deutschland`,
    contactVATSwitzerland: `MwStNr`,
    contactVATCroatia: `USt-IdNr`,
    contactVATGermany: `USt-IdNr`,
    contactDirector: `Geschäftsführer`,
  },
  hrvatski: {
    weAre: 'MI SMO',
    weAreText:`inženjerska tvrtka specijalizirana za upravljanje projektima, 
    inženjerski dizajn i digitalizaciju postrojenja`,
    consultingTitle: 'INŽENJERING I UPRAVLJANJE PROJEKTIMA',
    consultingText: `Naše napredne usluge upravljanja projektima pokrivaju projekte svih veličina,
     od faze planiranja do konačne implementacije i održavanja. 
     Kao pouzdan isporučitelj i koordinator, pružamo multidisciplinarna inženjerska
      rješenja za energetska i procesna postrojenja.`,
    engineeringTitle: 'DIGITALIZACIJA POSTROJENJA',
    engineeringText: `Nastojimo našim klijentima pružiti potpunu kontrolu nad njihovim
    fizičkim resursima putem tehnologije digitalnih postrojenja. Konsolidirajući podatke
     i dokumentaciju iz različitih izvora u jedan pouzdan izvor, dajemo našim klijentima mogućnost 
     donošenja informiranih odluka i optimiziranja performansi svojih resursa i procesa.`,
    services1Title: 'INŽENJERING I UPRAVLJANJE PROJEKTIMA',
    services1Text1: `Nudimo usluge inženjerskog projektiranja i upravljanja projektima 
    za kapitalne projekte, 
    kao i održavanje postrojenja i podršku u gradnji. 
    Naš stručni tim ima dugogodišnje iskustvo u inženjerskom projektiranju
    uz pridržavanje međunarodnim i nacionalnim normama te u
    korištenju najmodernijih alata.`,
    services1Text2: `S našim timom i širokom mrežom partnera 
    možemo ponuditi sljedeće usluge:`,
    services1Bullet1: 'Upravljanje projektima',
    services1Bullet2: 'Nadzor i kontrola projekata',
    services1Bullet3: 'Procesno inženjerstvo',
    services1Bullet4: 'Strojarsko inženjerstvo',
    services1Bullet5: 'Projektiranje cjevovoda',
    services1Bullet6: 'Građevinski inženjering',
    services1Bullet7: 'Elektrotehnika',
    services1Bullet8: 'Instrumentacija i kontrola',
    services2Title: 'DIGITALIZACIJA POSTROJENJA',
    services2Text1: `Digitalno postrojenje je virtualni model fizičkih resursa
    koji međusobno povezuje 2D i 3D podatke, laserske skenove, liste i nacrte čime
    se ostvaruje mogućnost za pristup svim podacima iz jednog izvora. 
    Nakon usklađivanja dokumentacije sa stvarnim 
    stanjem resursa, moguće je donositi informirane odluke na temelju točnih 
    i ažuriranih informacija. Time se konačno premošćuje problem u razlikama između "as-built" 
    (kako je postrojenje izgrađeno) i "as-documented" (kako je postrojenje trebalo biti izgrađeno) 
    dokumentacija.`,
    services2Text2: `Na temelju našeg opsežnog iskustva s integracijom podataka iz 
    različitih klijentskih aplikacija i alata u digitalna postrojenja, 
    u mogućnosti smo pružiti sljedeće usluge:`,
    services2Bullet1: 'Prikupljanje i migracija postojeće dokumentacije i podataka',
    services2Bullet2: 'Pregled i ažuriranje podataka o resursima i otkrivanje mogućih nedostataka u podacima i dokumentaciji',
    services2Bullet3: 'Povezivanje podataka i dokumentacije u jednom virtualnom modelu',
    services2Bullet4: 'Uvođenje digitalnog postrojenja u upotrebu prema potrebama klijenta',
    services2Bullet5: 'Obuka za korištenje digitalnog postrojenja ',
    contactCountrySwitzerland: `Švicarska`,
    contactCountryCroatia: `Hrvatska`,
  }
};

const DEFAULT_LANGUAGE = 'english';

function Presentation() {
  
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
      // console.log(`The current language is: ${language}`);
  };


  return (
    <>
      <DefaultNavbar  brand="INNOVEVA" 
                      routes={(() => {
                        switch (language) {
                          case 'english':
                            return routes;
                          case 'deutsch':
                            return routesDE;
                          case 'hrvatski':
                            return routesHR;
                          default:
                            return routes;
                        }
                      })()} 
                      sticky onLanguageChange={handleLanguageChange} />
      
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container id="servicesContainer">
          <Grid container>
            <Grid item xs={0} lg={8} />
            <Grid item xs={12} lg={4} justifyContent="flex-end" mx="auto">
              <MKTypography
                variant="h1"
                color="white"
                textAlign="right"
                mt={0}
                mb={1}
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                })}
              >
                {LANGUAGES[language].weAre}
              </MKTypography>
              <MKTypography
                variant="body1"
                color="white"
                textAlign="right"
                mt={1}
              >
                {LANGUAGES[language].weAreText}
              </MKTypography>
            </Grid>
          </Grid>
        </Container>
      </MKBox>

        <MKBox style={{backgroundColor: "#ebebeb", paddingTop: "30px", paddingBottom: "80px"}} >
        <Container >
            <Grid container spacing={2} >
              <Grid item xs={12} lg={6}>
                <DefaultInfoCard
                  direction="center"
                  icon={<img src={IconConsulting} alt="Consulting icon" style={{ width: "45px", height: "40px" }}/>}
                  title={LANGUAGES[language].consultingTitle}
                  description={LANGUAGES[language].consultingText}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <DefaultInfoCard
                  direction="center"
                  icon={<img src={IconEngineering} alt="Engineering icon" style={{ width: "45px", height: "40px" }}/>}
                  title={LANGUAGES[language].engineeringTitle}
                  description={LANGUAGES[language].engineeringText}
                />
              </Grid>
            </Grid>
          </Container>
          </MKBox>

      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >



        <Container sx={{ mt: 10 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <MKBox component="img" src={innserv1} alt="innserv1" width="100%" />
            </Grid>
            <Grid item xs={12} lg={6}>
                <MKBox lineHeight={1} p={0} textAlign="left">
                  <MKTypography
                    display="block"
                    variant="5"
                    fontWeight="bold"
                    mt={2}
                    mb={1.5}
                  >
                    {LANGUAGES[language].services1Title}
                  </MKTypography>
                  <MKTypography
                    display="block"
                    variant="body2"
                    color="text"
                    pr={6}
                    pl={0}
                  >
                    <p>{LANGUAGES[language].services1Text1}</p><br /> 
                    <p>{LANGUAGES[language].services1Text2}</p>
                <ul style={{paddingLeft: '20px' }}>
                  <li>{LANGUAGES[language].services1Bullet1}</li>
                  <li>{LANGUAGES[language].services1Bullet2}</li>
                  <li>{LANGUAGES[language].services1Bullet3}</li>
                  <li>{LANGUAGES[language].services1Bullet4}</li>
                  <li>{LANGUAGES[language].services1Bullet5}</li>
                  <li>{LANGUAGES[language].services1Bullet6}</li>
                  <li>{LANGUAGES[language].services1Bullet7}</li>
                  <li>{LANGUAGES[language].services1Bullet8}</li>
                </ul>
                  </MKTypography>
              </MKBox>
            </Grid>
          </Grid>
        </Container>
        <Container sx={{ mt: 0 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
                <MKBox lineHeight={1} p={0} textAlign="left">
                  <MKTypography
                    display="block"
                    variant="5"
                    fontWeight="bold"
                    mt={2}
                    mb={1.5}
                  >
                    {LANGUAGES[language].services2Title}
                  </MKTypography>
                  <MKTypography
                    display="block"
                    variant="body2"
                    color="text"
                    pr={6}
                    pl={0}
                  >
                    <p>{LANGUAGES[language].services2Text1}</p><br /> 
                    <p>{LANGUAGES[language].services2Text2}</p>
                <ul style={{paddingLeft: '20px' }}>
                  <li>{LANGUAGES[language].services2Bullet1}</li>
                  <li>{LANGUAGES[language].services2Bullet2}</li>
                  <li>{LANGUAGES[language].services2Bullet3}</li>
                  <li>{LANGUAGES[language].services2Bullet4}</li>
                  <li>{LANGUAGES[language].services2Bullet5}</li>
                </ul>
                  </MKTypography>
              </MKBox>              
            </Grid>
            <Grid item xs={12} lg={6}>
              <MKBox component="img" src={innserv2} alt="innserv2" width="100%" />
            </Grid>
          </Grid>
        </Container>
        <Container id="referencesContainer" sx={{ mt: 5, mb:5 }}>
        <Counters currentlanguage={language} />
        <Testimonials currentlanguage={language} />
        </Container>
        
      </Card>
        <Container id="contactContainer" sx={{ mt: 0, mb:3 }}>
          <Grid container spacing={0} justify="center">
            <Grid xs={0} lg={1.5}/> 
            <Grid item xs={12} lg={3} offset={0}>
                <MKBox lineHeight={1} p={0} textAlign="center">
                  <MKTypography
                    display="block"
                    variant="5"
                    fontWeight="bold"
                    mt={2}
                    mb={1.5}
                  >
                   {LANGUAGES[language].contactCountrySwitzerland}
                  </MKTypography>
                  <MKTypography
                    display="block"
                    variant="body2"
                    color="text"
                    pr={0}
                    pl={0}
                  >
                    Innoveva GmbH<br /> 
                    Werkstrasse 12<br /> 
                    5080 Laufenburg, {LANGUAGES[language].contactCountrySwitzerland}<br /> 
                    {LANGUAGES[language].contactVATSwitzerland}: CHE-464.171.623 MWST<br /> 
                    {LANGUAGES[language].contactDirector}: Božidar Šeketa<br />  
                    Tel: 0041628744070<br />
                    info@innoveva.com<br />  
                  </MKTypography>
              </MKBox>              
            </Grid>
           <Grid item xs={12} lg={3} lgOffset={1}>
                <MKBox lineHeight={1} p={0} textAlign="center">
                  <MKTypography
                    display="block"
                    variant="5"
                    fontWeight="bold"
                    mt={2}
                    mb={1.5}
                  >
                    {LANGUAGES[language].contactCountryCroatia}
                  </MKTypography>
                  <MKTypography
                    display="block"
                    variant="body2"
                    color="text"
                    pr={0}
                    pl={0}
                  >
                    Innoveva d.o.o<br /> 
                    Siget 19<br /> 
                    10000 Zagreb, {LANGUAGES[language].contactCountryCroatia}<br /> 
                    {LANGUAGES[language].contactVATCroatia}: HR34782265468<br /> 
                    {LANGUAGES[language].contactDirector}: Goran Šeketa<br /> 
                    Tel: 00385916114662<br />
                    info@innoveva.com<br /> 
                  </MKTypography>
              </MKBox>              
            </Grid>
            <Grid item xs={12} lg={3} lgOffset={1}>
                <MKBox lineHeight={1} p={0} textAlign="center">
                  <MKTypography
                    display="block"
                    variant="5"
                    fontWeight="bold"
                    mt={2}
                    mb={1.5}
                  >
                    {LANGUAGES[language].contactCountryGermany}
                  </MKTypography>
                  <MKTypography
                    display="block"
                    variant="body2"
                    color="text"
                    pr={0}
                    pl={0}
                  >
                    Innoveva GmbH<br /> 
                    Alemannenstrasse 14<br /> 
                    D-79689 Maulburg, {LANGUAGES[language].contactCountryGermany}<br /> 
                    {LANGUAGES[language].contactVATGermany}: DE247786535<br /> 
                    {LANGUAGES[language].contactDirector}: Dirk Hanewacker<br /> 
                    Tel: 004915140258781<br />
                    info@innoveva.com<br /> 
                  </MKTypography>
              </MKBox>              
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center", my: 6 }}>
                  <MKTypography
                    display="block"
                    variant="body2"
                    color="text"
                    pr={0}
                    pl={0}
                  >
                    All rights reserved. Copyright &copy; Innoveva d.o.o. {date}. {' '}
                      <a
                        href={`${process.env.PUBLIC_URL}/gdpr_policy.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GDPR Policy
                      </a> 
                  </MKTypography>
          </Grid>
        </Container>
    </>
  );
}

export default Presentation;

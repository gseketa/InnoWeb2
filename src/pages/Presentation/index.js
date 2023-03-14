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
import bgImage from "assets/images/innMain3.jpg";
import innserv1 from "assets/images/innserv1.jpg";
import innserv2 from "assets/images/innserv2.jpg";

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
    services1Text: `We offer engineering design and project management services 
    for capital projects, as well as ongoing plant maintenance 
      and construction support. Our expert team has vast experience 
    in plant facility engineering and operation, using state-of-the-art tools 
    and complying with international and national norms. 
    With our team and a wide network of partners we can offer the following services:`,
    services1Bullet1: 'Project management',
    services1Bullet2: 'Project monitoring and control',
    services1Bullet3: 'Process engineering and design',
    services1Bullet4: 'Mechanical engineering',
    services1Bullet5: 'Arrangement design and piping engineering',
    services1Bullet6: 'Civil and structural engineering',
    services1Bullet7: 'Electrical engineering',
    services1Bullet8: 'I&C engineering',
    services2Title: 'DIGITAL TWIN SOLUTIONS',
    services2Text: `A digital twin is a virtual model of physical assets 
    that consolidates 2D and 3D data, laser scans, lists, drawings, and asset 
    history into a single point of truth for easy access to asset data from any source.
    By aligning documentation with the actual asset conditions, 
    stakeholders can make informed decisions based on accurate and up-to-date information, 
    ultimately closing the gap between the as-built (how the asset was constructed) 
    and as-documented (how the asset was supposed to be constructed) conditions. 
    Based on our extensive experience with integrating data 
    from various applications and tools into digital twin solutions, we are capable to provide 
    the following services:`,
    services2Bullet1: 'Collecting and migrating existing documentation and data',
    services2Bullet2: 'Reviewing and updating assets data and uncovering potential data and documentation gaps',
    services2Bullet3: 'Interlinking data and documentation in a single virtual model',
    services2Bullet4: 'Deploying the digital twin in daily operations, maintenance, and projects',
    services2Bullet5: 'Coaching and training customer staff and/or contractors',
    contactCountrySwitzerland: `Switzerland`,
    contactCountryCroatia: `Croatia`,
  },
  deutsch: {
    weAre: 'WIR SIND',
    weAreText:`ein Ingenieursunternehmen, das sich auf Projektmanagement, 
    Ingenieurdesign und digitale Zwillinglösungen spezialisiert hat.`,
    consultingTitle: 'INGENIEURDESIGN & PROJEKTMANAGEMENT', 
    consultingText: `Unsere hochmodernen Projektmanagement-Dienstleistungen decken 
    Projekte jeder Größe von der detaillierten Planung bis zur 
    erfolgreichen Ausführung und darüber hinaus ab. 
    Als zuverlässiger Lieferant und effizienter Koordinator bieten 
    wir zudem maßgeschneiderte multidisziplinäre Engineering-Lösungen für die 
    optimale Leistung von Kraftwerken und Prozessanlagen.`, 
    engineeringTitle: 'DIGITALE ZWILLINGLÖSUNGEN',
    engineeringText: `Wir streben danach, unseren Kunden durch die Kraft der digitalen
     Zwillingstechnologie eine vollständige Kontrolle über ihre physischen 
     Anlagen zu bieten. Durch die Konsolidierung von Daten und Dokumenten aus 
     verschiedenen Quellen in eine einzige, geben wir 
     unseren Kunden die Möglichkeit, informierte Entscheidungen zu treffen und die 
     Leistung ihrer Anlagen zu optimieren.`,
    services1Title: 'SERVICES 1',
    services1Text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat:`,
    services1Bullet1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services1Bullet2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services1Bullet3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services1Bullet4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services1Bullet5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services1Bullet6: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services1Bullet7: 'Electrical engineering',
    services1Bullet8: 'I&C engineering',
    services2Title: 'SERVICES 2',
    services2Text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat: `,
    services2Bullet1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services2Bullet2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services2Bullet3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services2Bullet4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services2Bullet5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    contactCountrySwitzerland: `Schweitz`,
    contactCountryCroatia: `Kroatien`,
  },
  hrvatski: {
    weAre: 'MI SMO',
    weAreText:`inženjerska tvrtka specijalizirana za upravljanje projektima, 
    inženjerski dizajn i izradu digitalnih postrojenja`,
    consultingTitle: 'INŽENJERING I UPRAVLJANJE PROJEKTIMA',
    consultingText: `Naše napredne usluge upravljanja projektima pokrivaju projekte svih veličina,
     od faze planiranja do konačne implementacije i održavanja. 
     Kao pouzdan isporučitelj i koordinator, pružamo multidisciplinarna inženjerska
      rješenja za energetska i procesna postrojenja.`,
    engineeringTitle: 'DIGITALNA POSTROJENJA',
    engineeringText: `Nastojimo našim klijentima pružiti potpunu kontrolu nad njihovim
    fizičkim resursima putem tehnologije digitalnih postrojenja. Konsolidirajući podatke
     i dokumentaciju iz različitih izvora u jedan pouzdan izvor, dajemo našim klijentima mogućnost 
     donošenja informiranih odluka i optimiziranja performansi svojih resursa i procesa.`,
    services1Title: 'SERVICES 1',
    services1Text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat:`,
    services1Bullet1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services1Bullet2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services1Bullet3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services1Bullet4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services1Bullet5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services1Bullet6: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services1Bullet7: 'Electrical engineering',
    services1Bullet8: 'I&C engineering',
    services2Title: 'SERVICES 2',
    services2Text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat: `,
    services2Bullet1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services2Bullet2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services2Bullet3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services2Bullet4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services2Bullet5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
                textAlign="right"
                mt={-6}
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
                color="text"
                textAlign="right"
                mt={1}
              >
                {LANGUAGES[language].weAreText}
              </MKTypography>
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

        <Container>
            <Grid container spacing={2}>
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
                    {LANGUAGES[language].services1Text}
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
                    {LANGUAGES[language].services2Text}
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
        <Container id="referencesContainer"/>
        <Counters currentlanguage={language} />
        <Testimonials currentlanguage={language} />
        
      </Card>
        <Container id="contactContainer" sx={{ mt: 0, mb:3 }}>
          <Grid container spacing={0} justify="center">
            <Grid xs={0} lg={3}/>
            <Grid item xs={12} lg={3} offset={3}>
                <MKBox lineHeight={1} p={0} textAlign="center">
                  <MKTypography
                    display="block"
                    variant="5"
                    fontWeight="bold"
                    mt={2}
                    mb={1.5}
                  >
                   Innoveva GmbH
                  </MKTypography>
                  <MKTypography
                    display="block"
                    variant="body2"
                    color="text"
                    pr={0}
                    pl={0}
                  >
                    Werkstrasse 12<br /> 
                    CH-5080 Laufenburg<br /> 
                    {LANGUAGES[language].contactCountrySwitzerland}<br /> 
                    MwStNo.:CHE-464.171.623 MWST<br /> 
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
                    Innoveva d.o.o.
                  </MKTypography>
                  <MKTypography
                    display="block"
                    variant="body2"
                    color="text"
                    pr={0}
                    pl={0}
                  >
                    Siget 19<br /> 
                    10000 Zagreb<br /> 
                    {LANGUAGES[language].contactCountryCroatia}<br /> 
                    OIB:34782265468<br /> 
                    Tel: 00385916114662<br />
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
                    All rights reserved. Copyright &copy; {date} Innoveva GmbH
                  </MKTypography>
          </Grid>
        </Container>
    </>
  );
}

export default Presentation;

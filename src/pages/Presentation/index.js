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
    Ingenieurdesign und digitale Zwillingl??sungen spezialisiert hat.`,
    consultingTitle: 'INGENIEURDESIGN & PROJEKTMANAGEMENT', 
    consultingText: `Unsere hochmodernen Projektmanagement-Dienstleistungen decken 
    Projekte jeder Gr????e von der detaillierten Planung bis zur 
    erfolgreichen Ausf??hrung und dar??ber hinaus ab. 
    Als zuverl??ssiger Lieferant und effizienter Koordinator bieten 
    wir zudem ma??geschneiderte multidisziplin??re Engineering-L??sungen f??r die 
    optimale Leistung von Kraftwerken und Prozessanlagen.`, 
    engineeringTitle: 'DIGITALE ZWILLINGL??SUNGEN',
    engineeringText: `Wir streben danach, unseren Kunden durch die Kraft der digitalen
     Zwillingstechnologie eine vollst??ndige Kontrolle ??ber ihre physischen 
     Anlagen zu bieten. Durch die Konsolidierung von Daten und Dokumenten aus 
     verschiedenen Quellen in eine einzige, geben wir 
     unseren Kunden die M??glichkeit, informierte Entscheidungen zu treffen und die 
     Leistung ihrer Anlagen zu optimieren.`,
    services1Title: 'INGENIEURDESIGN & PROJEKTMANAGEMENT',
    services1Text: `Wir bieten Ingenieur-Design und Projektmanagement-Dienstleistungen 
    f??r Investitionsprojekte sowie laufende Anlagenwartung und Baustellenunterst??tzung an. 
    Unser Expertenteam verf??gt ??ber umfangreiche Erfahrung in der Ingenieur- und
     Betriebsf??hrung von Anlagen, die modernste Werkzeuge nutzen und internationale 
     und nationale Normen einhalten. 
     Mit unserem Team und einem breiten Netzwerk von Partnern k??nnen wir folgende 
     Dienstleistungen anbieten:`,
    services1Bullet1: 'Projektmanagement',
    services1Bullet2: 'Projekt??berwachung und -steuerung',
    services1Bullet3: 'Verfahrenstechnik und -design',
    services1Bullet4: 'Maschinenbau',
    services1Bullet5: 'Anordnungs- und Rohrleitungsdesign',
    services1Bullet6: 'Bauingenieurwesen',
    services1Bullet7: 'Elektrotechnik',
    services1Bullet8: 'I&C-Technik',
    services2Title: 'DIGITALE ZWILLINGL??SUNGEN',
    services2Text: `Ein digitaler Zwilling ist ein virtuelles Modell physischer 
    Verm??genswerte, das 2D- und 3D-Daten, Laserscans, Listen, Zeichnungen und Anlagenhistorie
    zu einem einzigen Wahrheitspunkt konsolidiert, um einfachen Zugang zu Anlagendaten 
    aus jeder Quelle zu erm??glichen. Durch die Ausrichtung der Dokumentation auf die 
    tats??chlichen Anlagenbedingungen k??nnen Entscheidungstr??ger fundierte Entscheidungen 
    auf der Grundlage genauer und aktueller Informationen treffen und letztendlich 
    die Kluft zwischen den as-built (wie die Anlage gebaut wurde) und den 
    as-dokumentierten (wie die Anlage gebaut werden sollte) Bedingungen schlie??en. 
    Basierend auf unserer umfangreichen Erfahrung bei der Integration von Daten 
    aus verschiedenen Anwendungen und Tools in digitale Zwilling-L??sungen k??nnen wir 
    folgende Dienstleistungen anbieten:`,
    services2Bullet1: 'Sammeln und Migration von bestehenden Dokumentationen und Daten',
    services2Bullet2: '??berpr??fung und Aktualisierung von Anlagendaten und Aufdeckung potenzieller Daten- und Dokumentationsl??cken',
    services2Bullet3: 'Verkn??pfung von Daten und Dokumentation in einem einzigen virtuellen Modell',
    services2Bullet4: 'Einsatz des digitalen Zwillings in t??glichen Betriebsabl??ufen, Wartung und Projekten',
    services2Bullet5: 'Coaching und Schulung von Kundenmitarbeitern und/oder Auftragnehmern',
    contactCountrySwitzerland: `Schweitz`,
    contactCountryCroatia: `Kroatien`,
  },
  hrvatski: {
    weAre: 'MI SMO',
    weAreText:`in??enjerska tvrtka specijalizirana za upravljanje projektima, 
    in??enjerski dizajn i digitalizaciju postrojenja`,
    consultingTitle: 'IN??ENJERING I UPRAVLJANJE PROJEKTIMA',
    consultingText: `Na??e napredne usluge upravljanja projektima pokrivaju projekte svih veli??ina,
     od faze planiranja do kona??ne implementacije i odr??avanja. 
     Kao pouzdan isporu??itelj i koordinator, pru??amo multidisciplinarna in??enjerska
      rje??enja za energetska i procesna postrojenja.`,
    engineeringTitle: 'DIGITALIZACIJA POSTROJENJA',
    engineeringText: `Nastojimo na??im klijentima pru??iti potpunu kontrolu nad njihovim
    fizi??kim resursima putem tehnologije digitalnih postrojenja. Konsolidiraju??i podatke
     i dokumentaciju iz razli??itih izvora u jedan pouzdan izvor, dajemo na??im klijentima mogu??nost 
     dono??enja informiranih odluka i optimiziranja performansi svojih resursa i procesa.`,
    services1Title: 'IN??ENJERING I UPRAVLJANJE PROJEKTIMA',
    services1Text: `Nudimo usluge in??enjerskog projektiranja i upravljanja projektima 
    za kapitalne projekte, 
    kao i odr??avanje postrojenja i podr??ku u gradnji. 
    Na?? stru??ni tim ima dugogodi??nje iskustvo u in??enjerskom projektiranju
    uz pridr??avanje me??unarodnim i nacionalnim normama te u
     kori??tenju najmodernijih alata. S na??im timom i ??irokom mre??om partnera 
     mo??emo ponuditi sljede??e usluge:`,
    services1Bullet1: 'Upravljanje projektima',
    services1Bullet2: 'Nadzor i kontrola projekata',
    services1Bullet3: 'Procesno in??enjerstvo',
    services1Bullet4: 'Strojarsko in??enjerstvo',
    services1Bullet5: 'Projektiranje cjevovoda',
    services1Bullet6: 'Gra??evinski in??enjering',
    services1Bullet7: 'Elektrotehnika',
    services1Bullet8: 'Instrumentacija i kontrola',
    services2Title: 'DIGITALIZACIJA POSTROJENJA',
    services2Text: `Digitalno postrojenje je virtualni model fizi??kih resursa
    koji me??usobno povezuje 2D i 3D podatke, laserske skenove, liste i nacrte ??ime
    se ostvaruje mogu??nost za pristup svim podacima iz jednog izvora. 
    Nakon uskla??ivanja dokumentacije sa stvarnim 
    stanjem resursa, mogu??e je donositi informirane odluke na temelju to??nih 
    i a??uriranih informacija. Time se kona??no premo????uje problem u razlikama izme??u "as-built" 
    (kako je postrojenje izgra??eno) i "as-documented" (kako je postrojenje trebalo biti izgra??eno) 
    dokumentacija. Na temelju na??eg opse??nog iskustva s integracijom podataka iz 
    razli??itih klijentskih aplikacija i alata u digitalna postrojenja, 
    u mogu??nosti smo pru??iti sljede??e usluge:`,
    services2Bullet1: 'Prikupljanje i migracija postoje??e dokumentacije i podataka',
    services2Bullet2: 'Pregled i a??uriranje podataka o resursima i otkrivanje mogu??ih nedostataka u podacima i dokumentaciji',
    services2Bullet3: 'Povezivanje podataka i dokumentacije u jednom virtualnom modelu',
    services2Bullet4: 'Uvo??enje digitalnog postrojenja u upotrebu prema potrebama klijenta',
    services2Bullet5: 'Obuka za kori??tenje digitalnog postrojenja ',
    contactCountrySwitzerland: `??vicarska`,
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

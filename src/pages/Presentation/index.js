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


// Images
import bgImage from "assets/images/innMain3.jpg";
import innserv1 from "assets/images/innserv1.jpg";
import innserv2 from "assets/images/innserv2.jpg";

const date = new Date().getFullYear();

const LANGUAGES = {
  english: {
    weAre: 'WE ARE',
    weAreText:`engineering and consulting vehicula mattis eros in tincidunt. 
    Quisque aliquam eros in ipsum fringila venenatis. Sed ac dictum est. In porttitormetus vel felis.`,
    engineeringTitle: 'ENGINEERING SERVICES',
    engineeringText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
    consultingTitle: 'CONSULTING & PM SERVICES',
    consultingText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
    services1Title: 'CONSULTING',
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
    services2Title: 'PM SERVICES',
    services2Text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat: `,
    services2Bullet1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services2Bullet2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services2Bullet3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services2Bullet4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services2Bullet5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services2Bullet6: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services3Title: 'ENGINEERING SERVICES',
    services3Text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat: `,
    services3Bullet1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services3Bullet2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services3Bullet3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services3Bullet4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services3Bullet5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services3Bullet6: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    contactCountrySwitzerland: `Switzerland`,
    contactCountryCroatia: `Croatia`,
  },
  deutsch: {
    weAre: 'WIR SIND',
    weAreText:`engineering and consulting vehicula mattis eros in tincidunt. 
    Quisque aliquam eros in ipsum fringila venenatis. Sed ac dictum est. In porttitormetus vel felis.`,
    engineeringTitle: 'ENGINEERING', 
    engineeringText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `, 
    consultingTitle: 'CONSULTING',
    consultingText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
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
    services2Bullet6: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services3Title: 'SERVICES 3',
    services3Text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat: `,
    services3Bullet1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services3Bullet2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services3Bullet3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services3Bullet4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services3Bullet5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services3Bullet6: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    contactCountrySwitzerland: `Schweitz`,
    contactCountryCroatia: `Kroatien`,
  },
  hrvatski: {
    weAre: 'MI SMO',
    weAreText:`engineering and consulting vehicula mattis eros in tincidunt. 
    Quisque aliquam eros in ipsum fringila venenatis. Sed ac dictum est. In porttitormetus vel felis.`,
    engineeringTitle: 'INŽENJERING',
    engineeringText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
    consultingTitle: 'CONSULTING',
    consultingText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
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
    services2Bullet6: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services3Title: 'SERVICES 3',
    services3Text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat: `,
    services3Bullet1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services3Bullet2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services3Bullet3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services3Bullet4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services3Bullet5: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    services3Bullet6: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
                  icon="apps"
                  title={LANGUAGES[language].consultingTitle}
                  description={LANGUAGES[language].consultingText}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <DefaultInfoCard
                  direction="center"
                  icon="engineering"
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
                  <li>{LANGUAGES[language].services2Bullet6}</li>
                </ul>
                  </MKTypography>
              </MKBox>              
            </Grid>
            <Grid item xs={12} lg={6}>
              <MKBox component="img" src={innserv2} alt="innserv2" width="100%" />
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
                    {LANGUAGES[language].services3Title}
                  </MKTypography>
                  <MKTypography
                    display="block"
                    variant="body2"
                    color="text"
                    pr={6}
                    pl={0}
                  >
                    {LANGUAGES[language].services3Text}
                <ul style={{paddingLeft: '20px' }}>
                  <li>{LANGUAGES[language].services3Bullet1}</li>
                  <li>{LANGUAGES[language].services3Bullet2}</li>
                  <li>{LANGUAGES[language].services3Bullet3}</li>
                  <li>{LANGUAGES[language].services3Bullet4}</li>
                  <li>{LANGUAGES[language].services3Bullet5}</li>
                  <li>{LANGUAGES[language].services3Bullet6}</li>
                </ul>
                  </MKTypography>
              </MKBox>
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

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


// Images
import bgImage from "assets/images/innMain3.jpg";
import innserv1 from "assets/images/innserv1.jpg";
import innserv2 from "assets/images/innserv2.jpg";

function Presentation() {
  return (
    <>
      <DefaultNavbar brand="INNOVEVA" routes={routes} sticky />
      
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
        <Container>
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
                WE ARE
              </MKTypography>
              <MKTypography
                variant="body1"
                color="text"
                textAlign="right"
                mt={1}
              >
                engineering and consulting vehicula mattis eros in tincidunt. Quisque aliquam eros in 
                ipsum fringila venenatis. Sed ac dictum est. In porttitormetus vel felis.
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
                  icon="engineering"
                  title="ENGINEERING"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                  ut aliquip ex ea commodo consequat. "
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <DefaultInfoCard
                  direction="center"
                  icon="apps"
                  title="CONSULTING"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                  ut aliquip ex ea commodo consequat. "
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
                    SERVICES 1
                  </MKTypography>
                  <MKTypography
                    display="block"
                    variant="body2"
                    color="text"
                    pr={6}
                    pl={0}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat:
                <ul style={{paddingLeft: '20px' }}>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
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
                    SERVICES 2
                  </MKTypography>
                  <MKTypography
                    display="block"
                    variant="body2"
                    color="text"
                    pr={6}
                    pl={0}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat:
                <ul style={{paddingLeft: '20px' }}>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                </ul>
                  </MKTypography>
              </MKBox>              
            </Grid>
            <Grid item xs={12} lg={6}>
              <MKBox component="img" src={innserv2} alt="innserv2" width="100%" />
            </Grid>
          </Grid>
        </Container>
        <Counters />
        <Testimonials />
        
      </Card>
        <Container sx={{ mt: 0 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
                <MKBox lineHeight={1} p={0} textAlign="center">
                  <MKTypography
                    display="block"
                    variant="5"
                    fontWeight="bold"
                    mt={2}
                    mb={1.5}
                  >
                    Innoveva Gmbh
                  </MKTypography>
                  <MKTypography
                    display="block"
                    variant="body2"
                    color="text"
                    pr={6}
                    pl={0}
                  >
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat:
                  </MKTypography>
              </MKBox>              
            </Grid>
           <Grid item xs={12} lg={6}>
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
                    pr={6}
                    pl={0}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat:
                  </MKTypography>
              </MKBox>              
            </Grid>
          </Grid>
        </Container>
    </>
  );
}

export default Presentation;

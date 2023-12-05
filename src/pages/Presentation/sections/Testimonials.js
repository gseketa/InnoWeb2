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

/* eslint-disable */

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// Images
import ABBLogo from "assets/images/logos/customer-logos/Logo - ABB.jpg";
import BachemLogo from "assets/images/logos/customer-logos/Logo - Bachem.jpg";
import BASFLogo from "assets/images/logos/customer-logos/Logo - BASF.jpg";
import CiechLogo from "assets/images/logos/customer-logos/Logo - Ciech.jpg";
import DottikonLogo from "assets/images/logos/customer-logos/Logo - Dottikon.jpg";
import DupontLogo from "assets/images/logos/customer-logos/Logo - Dupont.jpg";
import EMSLogo from "assets/images/logos/customer-logos/Logo - EMS.jpg";
import HZILogo from "assets/images/logos/customer-logos/Logo - HZI.jpg";
// import SiTecLogo from "assets/images/logos/customer-logos/Logo - Si-Tec.jpg";
import GMLLogo from "assets/images/logos/customer-logos/Logo - GML.jpg";
import OvivoLogo from "assets/images/logos/customer-logos/Logo - Ovivo.jpg";
import SiemensLogo from "assets/images/logos/customer-logos/Logo - Siemens.jpg";
// import AlstomLogo from "assets/images/logos/customer-logos/Logo - Alstom.png";
// import STSILogo from "assets/images/logos/customer-logos/Logo - STSI.png";
// import MANLogo from "assets/images/logos/customer-logos/Logo - MAN.png";

import Bal3DLogo from "assets/images/logos/partner-logos/Bal3D.jpeg";
import BearingPointLogo from "assets/images/logos/partner-logos/BearingPoint.png";
import CaxpertsLogo from "assets/images/logos/partner-logos/Caxperts.png";
import DitraLogo from "assets/images/logos/partner-logos/DITRA.png";
import KPCDevLogo from "assets/images/logos/partner-logos/KPCDev.jpg";
import ProjectTeamLogo from "assets/images/logos/partner-logos/ProjectTeam.jpg";
import ScantecLogo from "assets/images/logos/partner-logos/scantec.png";
import TibaLogo from "assets/images/logos/partner-logos/Tiba.png";

const LANGUAGES = {
  english: {
    firstText: 'Trusted by over',
    secondText: '30+ companies', 
    thirdText: 'in the chemical, petrochemical, mining, power and pharmaceutical industry',
    fourthText: 'Our partners',
  },
  deutsch: {
    firstText: 'Vertrauen von über',
    secondText: '30+ Unternehmen', 
    thirdText: 'in der Chemie-, Petrochemie-, Bergbau-, Energie- und Pharmaindustrie',
    fourthText: 'Unsere Partner',
  },
  hrvatski: {
    firstText: 'Pouzdan izbor za više od',
    secondText: '30+ poduzeća', 
    thirdText: 'u kemijskoj, petrokemijskoj, rudarskoj, energetskoj i farmaceutskoj industriji',
  }
};



function Information({currentlanguage}) {
  return (
    <MKBox component="section" py={0}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">{LANGUAGES[currentlanguage].firstText}</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            &nbsp;{LANGUAGES[currentlanguage].secondText}
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            {LANGUAGES[currentlanguage].thirdText}
          </MKTypography>
        </Grid>
        <Divider sx={{ my: 3 }} />
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={ABBLogo} alt="ABB" width="100%" opacity={1} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={BachemLogo} alt="Bachem" width="100%" opacity={1} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={BASFLogo} alt="BASF" width="100%" opacity={1} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={CiechLogo} alt="Ciech" width="100%" opacity={1} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={DottikonLogo} alt="Dottikon" width="100%" opacity={1} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={DupontLogo} alt="Dupont" width="100%" opacity={1} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={HZILogo} alt="HZI" width="100%" opacity={1} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={EMSLogo} alt="EMS" width="100%" opacity={1} />
          </Grid>.
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={GMLLogo} alt="GML" width="100%" opacity={1} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={OvivoLogo} alt="Ovivo" width="100%" opacity={1} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={SiemensLogo} alt="Siemens" width="100%" opacity={1} />
          </Grid>
          </Grid>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
          >
          <MKTypography variant="h2" mt={4}>{LANGUAGES[currentlanguage].fourthText}</MKTypography>
        </Grid>
        <Divider sx={{ my: 3 }} />
        <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={DitraLogo} alt="Ditra" width="100%" opacity={1} />
          </Grid>
        <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={Bal3DLogo} alt="Bal3D" width="100%" opacity={1} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={BearingPointLogo} alt="BearingPoint" width="100%" opacity={1} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={CaxpertsLogo} alt="Caxperts" width="100%" opacity={1} />
          </Grid>
         
           <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={KPCDevLogo} alt="KPCDev" width="90%" opacity={1} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={ProjectTeamLogo} alt="ProjectTeam" width="70%" opacity={1} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={ScantecLogo} alt="Scantec" width="100%" opacity={1} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={TibaLogo} alt="Tiba" width="100%" opacity={1} />
          </Grid>

        </Grid>
          

{/*          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={AlstomLogo} alt="Alstom" width="100%" opacity={1} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={STSILogo} alt="STSI" width="100%" opacity={1} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={MANLogo} alt="MAN" width="100%" opacity={1} />
          </Grid>*/}


      </Container>
    </MKBox>
  );
}

Information.propTypes = {
  currentlanguage: PropTypes.string.isRequired,
  };

export default Information;

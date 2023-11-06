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
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

const LANGUAGES = {
  english: {
    firstTitle: 'Years',
    firstText: 'of successful industry experience',
    secondTitle: 'Experts',
    secondText: 'dedicated to customer satisfaction',
    thirdTitle: 'Projects',
    thirdText: 'executed with excellence',
  },
  deutsch: {
    firstTitle: 'Jahre',
    firstText: 'erfolgreiche Branchenerfahrung',
    secondTitle: 'Experten',
    secondText: 'der Kundenzufriedenheit verschrieben',
    thirdTitle: 'Projekte',
    thirdText: 'ausgeführt mit Exzellenz',
  },
  hrvatski: {
    firstTitle: 'Godina',
    firstText: 'uspješnog iskustva u industriji',
    secondTitle: 'Stručnjaka',
    secondText: 'posvećenih zadovoljstvu klijenata',
    thirdTitle: 'Projekata',
    thirdText: 'izvedenih s izvrsnošću',
  }
};


function Counters({currentlanguage}) {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={17}
              title={LANGUAGES[currentlanguage].firstTitle}
              description={LANGUAGES[currentlanguage].firstText}
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={25}
              suffix="+"
              title={LANGUAGES[currentlanguage].secondTitle}
              description={LANGUAGES[currentlanguage].secondText}
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={250}
              suffix="+"
              title={LANGUAGES[currentlanguage].thirdTitle}
              description={LANGUAGES[currentlanguage].thirdText}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

Counters.propTypes = {
  currentlanguage: PropTypes.string.isRequired,
  };

export default Counters;

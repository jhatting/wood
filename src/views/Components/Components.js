import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionCarousel5 from "./Sections/SectionCarousel5.js";


import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionExamples from "./Sections/SectionExamples.js";
import image from "assets/img/faces/logo-xs1-01.png";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Natural Firewood"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      

      <Parallax image={require("assets/img/banner-18.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}><img
                src={image}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              /></h1>
                
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionNavbars />
        <SectionCarousel5/>
        <SectionCompletedExamples />
        <SectionExamples/>
       
      </div>
      <Footer />
    </div>
  );
}

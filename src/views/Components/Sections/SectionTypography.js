import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Small from "components/Typography/Small.js";
import Danger from "components/Typography/Danger.js";
import Warning from "components/Typography/Warning.js";
import Success from "components/Typography/Success.js";
import Info from "components/Typography/Info.js";
import Primary from "components/Typography/Primary.js";
import Muted from "components/Typography/Muted.js";
import Quote from "components/Typography/Quote.js";

import image from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTypography() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="typography">
          
          <GridContainer justify="center">
            <div className={classes.typo}>
              <h1>Why firewood?</h1>
              <h2>What inspires us with burning wood?</h2>
              <p>Fire is more that just wood and flame. Fire has the power to unite, change and comfort us. There is a magical component to fire. It can make you fall in love, reminisce on special memories and feel inspired, all at the same time. You can sit in front of a fire for hours, hypnotized by its forgiving  flame content, of just being. One cannot describe the effect fire has on a basic human emotion in one word. It is one of the few basic human experiences that every person on the planet needs to experience. In some way or another it will change you, it will reconnect you on a much deeper level with yourself and others. For that basic principle we created this company with the intention of bringing you closer to nature the natural way whether you are cooking, staying warm or just wanting the experience.
              </p>
            </div>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

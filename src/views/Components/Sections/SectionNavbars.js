import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import image from "assets/img/newbanner-2.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionNavbars() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      
      <div id="navbar" className={classes.navbar}>
        <div
          className={classes.navigation}
          style={{ backgroundImage: "url(" + image + ")" }}
        >
          <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <br></br>
            <h2>What inspires us to burn wood?</h2>
            <h4>Fire is more that just wood and flame. Fire has the power to unite us, 
              change us as we reconnect within and comfort us. There is a magical component to fire. 
              It makes you fall in love with nature, reminisce on special memories and feel inspired, 
              all at the same time. You can sit in front of a fire for hours, hypnotized by its unforgiving flame, 
              feeling satisfied, fully present and connected in that moment. On this simple notion, 
              Natural Firewood was born. Aiming to bring you closer to YOU whether you are cooking, 
              staying warm or creating that warm, cosy ambience.
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
          
          
        </div>
      </div>
    </div>
  );
}

import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCompletedExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Purchase Product Below</h2>
            <h4>
              Shop with us by either ordering bulk order for collection or 
              delivery within a 20mile radius of the zip 73439. You can purchase 
              our valued added products delivery nation wide through a third party supply Amazon.com,
              click the direct links below to guide you directly to the payment portals of the product you require.
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

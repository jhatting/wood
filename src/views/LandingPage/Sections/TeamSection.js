import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";


import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/oklahoma-registration.jpg";


const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Natural Firewood Business Certification</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Oklahoma Secretary of State
                <br />
                <small className={classes.smallTitle}>Natural Firewoood LLC</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  This is our certification stating that our limited Liability Company has been filled in the office of the secretary of the State 
                  as provided by the laws of the State of Oklahoma. <a href="https://naturalfirewood.s3.us-east-2.amazonaws.com/oklahoma-registration.jpg">links</a> 
                  for enlarged copy of the certificate.
                </p>
              </CardBody>
              
            </Card>
          </GridItem>
          
        </GridContainer>
      </div>
    </div>
  );
}

import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import profile from "assets/img/large-profile.jpg";
import medium from "assets/img/medium-profile.jpg";
import small from "assets/img/small-profile.jpg";
import kindling from "assets/img/kindling-profile.jpg";
import collection from "assets/img/collection-profile.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";

const useStyles = makeStyles(styles);

export default function SectionExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          
          <GridItem xs={12} sm={12} md={6}>
            <Link to="large-box" className={classes.link}>
              <img
                src={profile}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button color="warning" size="lg" simple>
              <b>Large (16in logs 120-140lbs)</b>
              </Button>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Link to="medium-box" className={classes.link}>
              <img
                src={medium}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button color="warning" size="lg" simple>
              <b>Medium (16in Logs 60-70lb)</b>
              </Button>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Link to="small-box" className={classes.link}>
              <img
                src={small}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button color="warning" size="lg" simple>
              <b>Small Mini Logs (8inch 25-30lbs)</b>
              </Button>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Link to="kindling-box" className={classes.link}>
              <img
                src={kindling}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button color="warning" size="lg" simple>
              <b>Kindling (8inch 25lb)</b>
              </Button>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Link to="collection-orders" className={classes.link}>
              <img
                src={collection}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button color="warning" size="lg" simple>
                <b>Collection Orders</b>
              </Button>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

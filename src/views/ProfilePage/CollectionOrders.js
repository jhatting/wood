import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import SectionCarousel from "views/Components/Sections/SectionCarousel4.js";

import profile from "assets/img/faces/logo-01.jpg";

import experience0 from "assets/img/examples/experience-05.jpg";
import experience1 from "assets/img/examples/experience-06.jpg";
import experience2 from "assets/img/examples/experience-07.jpg";
import experience3 from "assets/img/examples/experience-08.jpg";
import experience4 from "assets/img/examples/experience-09.jpg";
import food0 from "assets/img/examples/food-06.jpg";
import food1 from "assets/img/examples/food-07.jpg";
import food2 from "assets/img/examples/food-08.jpg";
import food5 from "assets/img/examples/food-09.jpg";
import food4 from "assets/img/examples/food-10.jpg";
import warm0 from "assets/img/examples/warm-04.jpg";
import warm1 from "assets/img/examples/warm-05.jpg";
import warm2 from "assets/img/examples/warm-06.jpg";
import warm3 from "assets/img/examples/warm-07.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { Fireplace, KitchenTwoTone } from "@material-ui/icons";


const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Natural Firewood"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/banner-19.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Local Collection Orders</h3>
                    <h6>Species : White Oak</h6>
                    <h4><b>TO PLACE AN ORDER...If within 20 miles from zip 73439, call or text +1(646)841-6483 (Delivery fee extra $50)</b></h4>
                  
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <SectionCarousel />
            <div className={classes.description}>
              <b>
                Cord: 4ft x 4ft x 8ft, +-600 pieces, +-3000LBS, $225
              </b>
              <p></p>
              <b>
                Face Cord: 2ft x 4ft x 8ft, +-300 pieces, +-1500LBS, $130
              </b>
              <p></p>
              <b>
                Rick (1/3 of a cord): 16inches x 4ft x 8ft, +-200 pieces, +-1000LBS, $80
              </b>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="warning"
                  tabs={[
                    {
                      tabButton: "Warmth from Fire",
                      tabIcon: Fireplace,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={warm0}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={warm1}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={warm2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={warm3}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Cooking with Fire",
                      tabIcon: KitchenTwoTone,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={food0}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={food1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={food2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={food5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={food4}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Experiences around fire",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={experience0}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={experience1}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={experience2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={experience3}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={experience4}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <div className={classNames(classes.main, classes.mainRaised)}>
      </div>
      <Footer />
    </div>
  );
}

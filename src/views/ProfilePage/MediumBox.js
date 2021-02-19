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
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import SectionCarousel from "views/Components/Sections/SectionCarousel1.js";

import profile from "assets/img/faces/logo-01.jpg";

import experience0 from "assets/img/examples/experience-10.jpg";
import experience1 from "assets/img/examples/experience-11.jpg";
import experience2 from "assets/img/examples/experience-12.jpg";
import experience3 from "assets/img/examples/experience-13.jpg";
import experience4 from "assets/img/examples/experience-14.jpg";
import food0 from "assets/img/examples/food-11.jpg";
import food1 from "assets/img/examples/food-12.jpg";
import food2 from "assets/img/examples/food-13.jpg";
import food5 from "assets/img/examples/food-14.jpg";
import food4 from "assets/img/examples/food-15.jpg";
import warm0 from "assets/img/examples/warm-08.jpg";
import warm1 from "assets/img/examples/warm-09.jpg";
import warm2 from "assets/img/examples/warm-10.jpg";
import warm3 from "assets/img/examples/warm-11.jpg";

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
      <Parallax small filter image={require("assets/img/banner-17.jpg")} />
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
                    <h3 className={classes.title}>Medium (16in Logs 60-70lb)</h3>
                    <h6>Species : White Oak</h6>
                    <Button
              color="warning"
              size="lg"
              href="https://www.amazon.com/Smoak-Firewood-Premium-Firestarter-120-140lbs/dp/B087X9N44B/ref=sr_1_4?dchild=1&keywords=firewood&qid=1613074100&sr=8-4&th=1"
              target="_blank"
            >
              BUY NOW ON AMAZON
            </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <SectionCarousel />
            <div className={classes.description}>
              <p>
              About this item: Naturally Grown Oak Firewood. Box size 16H x 16W x 18L (60-70lbs), logs are cut 16inch in length. Product of the USA, logs are harvested fresh from the home of the white oak tree in Oklahoma and dried to perfection which allows the wood to light easily, burn cleaner and hotter! Box is to heavy for most to lift. Upon delivery you could partially unpack until a liftable weight is reached. Can be used to keep warm or cooking wood needs.{" "}
              </p>
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

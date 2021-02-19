import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/banner-16w.jpg";
import image2 from "assets/img/banner-15e.jpg";
import image3 from "assets/img/banner-14f.jpg";
import image4 from "assets/img/banner-13f.jpg";

import image6 from "assets/img/banner-11f.jpg";
import image7 from "assets/img/banner-10f.jpg";
import image8 from "assets/img/banner-9f.jpg";
import image9 from "assets/img/banner-8e.jpg";
import image10 from "assets/img/banner-7e.jpg";
import image11 from "assets/img/banner-6f.jpg";
import image12 from "assets/img/banner-5w.jpg";
import image13 from "assets/img/banner-4e.jpg";
import image14 from "assets/img/banner-3e.jpg";
import image15 from "assets/img/banner-2w.jpg";
import image16 from "assets/img/banner-1e.jpg";


import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={18} sm={18} md={10} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image2} alt="First slide" className="slick-image" />
                </div>
                <div>
                  <img
                    src={image4}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                  
                  </div>
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    
                  </div>
                  
                </div>
                <div>
                  <img src={image1} alt="Fourth slide" className="slick-image" />
                  <div className="slick-caption">
                    
                  </div>
                  
                </div>
                <div>
                  <img src={image6} alt="Fifth slide" className="slick-image" />
                  <div className="slick-caption">
                    
                  </div>
                  
                </div>
                <div>
                  <img src={image7} alt="six slide" className="slick-image" />
                  <div className="slick-caption">
                    
                  </div>
                  
                </div>
                <div>
                  <img src={image8} alt="seven slide" className="slick-image" />
                  <div className="slick-caption">
                    
                  </div>
                  
                </div>
                <div>
                  <img src={image9} alt="eight slide" className="slick-image" />
                  <div className="slick-caption">
                    
                  </div>
                  
                </div>
                <div>
                  <img src={image10} alt="nine slide" className="slick-image" />
                  <div className="slick-caption">
                    
                  </div>
                  
                </div>
                <div>
                  <img src={image11} alt="ten slide" className="slick-image" />
                  <div className="slick-caption">
                    
                  </div>
                  
                </div>
                <div>
                  <img src={image12} alt="eleven slide" className="slick-image" />
                  <div className="slick-caption">
                    
                  </div>
                  
                </div>
                <div>
                  <img src={image13} alt="twelve slide" className="slick-image" />
                  <div className="slick-caption">
                    
                  </div>
                  
                </div>
                <div>
                  <img src={image14} alt="thirteen slide" className="slick-image" />
                  <div className="slick-caption">
                    
                  </div>
                  
                </div>
                <div>
                  <img src={image15} alt="fourteen slide" className="slick-image" />
                  <div className="slick-caption">
                    
                  </div>
                  
                </div>
                <div>
                  <img src={image16} alt="fifteen slide" className="slick-image" />
                  <div className="slick-caption">
                    
                  </div>
                  
                </div>
               

                
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

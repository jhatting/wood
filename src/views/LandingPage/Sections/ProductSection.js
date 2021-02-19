import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { Call, Mail, WhatsApp } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk directly</h2>
          <h5 className={classes.description}>
            Feel free to contact us via email, phone or smoke signals. Customer service is extremely important to
            us and we{"'"}ll do what ever we can to help. 
          </h5>
          <h3 className={classes.description} >Our collection location is<br/>10916 Lois Lane, Kingston, Oklahoma, 73439</h3>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Call US"
              description="Feel free to contact us for orders or support by calling our US number +1(646) 841 6483"
              icon={Call}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="WhatsAPP US"
              description="Feel free to contact us for orders or support by calling or messaging our video call our whatsapp number +1(646) 841 6483"
              icon={WhatsApp}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Email us"
              description="Feel free to contact us for orders or support by emailing us at support@naturalfirewood.com"
              icon={Mail}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

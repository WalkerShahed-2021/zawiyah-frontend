import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, isWidthUp, withWidth } from "@material-ui/core";
import calculateSpacing from "./calculateSpacing";
import VideoCard from "./VideoCard";



const videos = [
  {
    iframe : "https://www.youtube.com/embed/m2f-CABoOkY",
    title : "Shrimp and Chorizo Paella",
    text: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."    
  },
  {
    iframe : "https://www.youtube.com/embed/m2f-CABoOkY",
    title : "Shrimp and Chorizo Paella",
    text: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."    
  },
  {
    iframe : "https://www.youtube.com/embed/m2f-CABoOkY",
    title : "Shrimp and Chorizo Paella",
    text: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."    
  },
  {
    iframe : "https://www.youtube.com/embed/m2f-CABoOkY",
    title : "Shrimp and Chorizo Paella",
    text: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."    
  },
];

function VideoSection(props) {
  const { width } = props;
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          Top Picked
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width)}>
            {videos.map(element => (
              <Grid
                item
                xs={6}
                md={4}
                data-aos="zoom-in-up"
                data-aos-delay={
                  isWidthUp("md", width) ? element.mdDelay : element.smDelay
                }
                key={element.headline}
              >
                <VideoCard
                  iframe={element.iframe}
                  title={element.title}                  
                  text={element.text}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

VideoSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth()(VideoSection);

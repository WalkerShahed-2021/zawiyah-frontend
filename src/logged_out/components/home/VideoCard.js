import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Typography, withStyles } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

const styles = theme => ({
  iconWrapper: {
    borderRadius: theme.shape.borderRadius,
    textAlign: "center",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1) * 1.5
  }
});
function VideoCard(props) {
  const { title, iframe, text } = props;
  return (
    <Fragment>
      <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={title} />
      <CardMedia
        component="iframe"
        height="194"
        image={iframe}
        allowfullscreen = "true"
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {text}
        </Typography>
      </CardContent>
    </Card>      
    </Fragment>
  );
}

VideoCard.propTypes = {
  title: PropTypes.string.isRequired,
  iframe: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(VideoCard);

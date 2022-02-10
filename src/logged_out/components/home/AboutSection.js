import React, {useContext } from "react";
import PropTypes from "prop-types";
import { Typography, withWidth } from "@material-ui/core";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { LanguageContext } from '../../../language/LanguageContext'

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        ...sx
      }}
      {...other}
    />
  );
}
function AboutSection(props) {
  const { aboutText } = props
  const { language } = useContext(LanguageContext)
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          About Founder
        </Typography>
        <div className="container-fluid">
        <Box
        sx={{
          display: "flex",
          p: 1
          // bgcolor: "background.paper",
          // borderRadius: 1
        }}
      >
        <Item sx={{ width: "50%" }}>
          <Card
          sx={{ width: '50%' }}          
          >
            <CardMedia 
              justifyContent = "center"
              direction="column"
              component="img"
              sx={{ borderRadius: '50%'}}
              // height="140"
              image="https://www.zawiyahfoundation.com/wp-content/uploads/2021/10/Shifaqat-ali-shaikh-main.jpeg"              
            />
          </Card>
        </Item>
        <Item
          sx={{ align:"center",  width: "50%", height: "50%", borderColor: "grey.800", bgcolor: "grey.100" }}
        >
          <h1>{language ? aboutText.name.english : aboutText.name.urdu}</h1>
          <h3>{language ? aboutText.position.english : aboutText.position.urdu}</h3>
          {language ? aboutText.detail.english : aboutText.detail.urdu}
        </Item>
      </Box>
        </div>
      </div>
    </div>
  );
}
AboutSection.propTypes = {
  width: PropTypes.string.isRequired
};
export default withWidth()(AboutSection);
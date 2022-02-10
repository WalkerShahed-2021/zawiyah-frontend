import React, {useContext } from "react";
import PropTypes from "prop-types";
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Typography, withWidth } from "@material-ui/core";
import Card from "@mui/material/Card";
import { LanguageContext } from '../../../language/LanguageContext'
import { Markup } from 'interweave';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


function AboutMission(props) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const { aboutMission } = props
  const { language } = useContext(LanguageContext)

  return (
    <>    
    <Card sx = {{width: "75%",
    // alignItems: 'center',
    // justifyContent : "center"
    }}
    className="container-fluid lg-p-top"
    >
      <Typography variant="h3" align="center" className="lg-mg-bottom">
          About Zawiyah Foundation
        </Typography>
        {/* About Section */}
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>{language ? aboutMission.aboutTitle.english : aboutMission.aboutTitle.urdu}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {language ? aboutMission.aboutDescription.english : aboutMission.aboutDescription.urdu}
          </Typography>
        </AccordionDetails>
        </Accordion>

      {/* Mission Section */}
      <Accordion expanded={expanded === 'panel0'} onChange={handleChange('panel0')}>
      <AccordionSummary aria-controls="panel0d-content" id="panel0d-header">
          <Typography>{language ? aboutMission.missionTitle.english : aboutMission.missionTitle.urdu}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {language ? aboutMission.missionDescription.english : aboutMission.missionDescription.urdu}
          </Typography>
        </AccordionDetails>         
      </Accordion>

      {/* Vision Section */}
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>{language ? aboutMission.visionTitle.english : aboutMission.visionTitle.urdu}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {language ? aboutMission.visionDescription.english : aboutMission.visionDescription.urdu}
          </Typography>
        </AccordionDetails>
      </Accordion>


      {/* Value Section */}
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>{language ? aboutMission.valueTitle.english : aboutMission.valueTitle.urdu}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Markup content={language ? aboutMission.valueDescription.english : aboutMission.valueDescription.urdu} />
          {/* <span>{language ? aboutMission.valueDescription.english : aboutMission.valueDescription.urdu}
          <br/>1. Love <br/>2. Respect  <br/>3. Service 
          </span>          */}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Card>
    </>
  );
}
AboutMission.propTypes = {
  width: PropTypes.string.isRequired
};
export default withWidth()(AboutMission);
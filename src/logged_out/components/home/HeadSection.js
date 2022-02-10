import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {
  Grid,
  Typography,
  Card,
  //Button,
  Hidden,
  Box,
  withStyles,
  withWidth,
  isWidthUp,
} from '@material-ui/core'
import WaveBorder from '../../../shared/components/WaveBorder'
//import ZoomImage from '../../../shared/components/ZoomImage'
import { LanguageContext } from '../../../language/LanguageContext'

//import MobileStepper from '@mui/material/MobileStepper'
import { autoPlay } from 'react-swipeable-views-utils'
// import {
//   KeyboardArrowLeft,
//   KeyboardArrowRight,
// } from '@mui/icons-material/KeyboardArrowLeft'
import SwipeableViews from 'react-swipeable-views'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import iqbal_1 from '../../../images/iqbal-1.jpg';
import iqbal_2 from '../../../images/iqbal2.svg';
// import Card from '@mui/material/Card'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews)
const styles = (theme) => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up('sm')]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up('xs')]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('xs')]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down('lg')]: {
      width: 'auto',
    },
  },
  wrapper: {
    position: 'relative',
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: theme.spacing(2),
  },
  image: {
    maxWidth: '100%',
    verticalAlign: 'middle',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up('md')]: {
      maxWidth: 'none !important',
    },
  },
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
})

const images = [
  {
    imgPath: iqbal_1,      
  },
  {
    imgPath: iqbal_2,
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=150&q=80',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=150&q=60',
  },
]

function HeadSection(props) {
  const { classes, theme, width, headerText } = props
  const { language } = useContext(LanguageContext)
  console.log(headerText)

  const [activeStep, setActiveStep] = React.useState(0)
  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  return (
    <Fragment>
      <div className={classNames('lg-p-top', classes.wrapper)}>
        <div className={classNames('container-fluid', classes.container)}>
          <Box display="flex" justifyContent="center" className="row">
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
            >
              <div className={classNames(classes.containerFix, 'container')}>               
                <Box justifyContent="space-between" className="row">
                  <Grid item xs={12} md={5}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      height="100%"
                    >
                      <Box mb={4}>
                        <Typography
                          variant={isWidthUp("lg", width) ? "h3" : "h4"}
                        >
                          {language ? headerText.tag.english : headerText.tag.urdu}
                           
                          
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={2}>
                          <Typography
                            variant={isWidthUp("lg", width) ? "h6" : "body1"}
                            color="textSecondary"
                          >
                            {language ? headerText.second.english : headerText.second.urdu}
                          </Typography>
                        </Box>
                        {/* <Button
                          variant="contained"
                          color="secondary"
                          fullWidth
                          className={classes.extraLargeButton}
                          classes={{ label: classes.extraLargeButtonLabel }}
                          href="https://github.com/dunky11/react-saas-template"
                        >
                          Join the Program Now
                        </Button> */}
                      </div>
                    </Box>
                  </Grid>
                  <Hidden smDown>
                    <Grid item md={6}>
                      {/* <ZoomImage
                        src={`${process.env.PUBLIC_URL}/images/logged_out/headerImage.jpg`}
                        className={classes.image}
                        alt="header example"
                      /> */}

                    <Box justifyContent="space-between" className="row" sx={{ flexGrow: 1 }}>                 
                  <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    interval = {5000}
                    enableMouseEvents
                  >
                    {images.map((step, index) => (
                      <Card>
                        <CardContent>
                          <div style={{ position: 'relative' }} key={step.label}>
                            <CardMedia
                              component="img"
                              image={images[activeStep].imgPath}
                            />
                            {/* <div
                              style={{
                                position: 'absolute',
                                color: 'white',
                                top: 150,
                                left: '50%',
                                transform: 'translateX(-50%)',
                              }}
                            >
                              {images[activeStep].label}
                            </div> */}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </AutoPlaySwipeableViews>
                  </Box> 
                    </Grid>
                  </Hidden>
                </Box>
              </div>
            </Card>
          </Box>
        </div>
      </div>
      <WaveBorder
        upperColor={theme.palette.secondary.main}
        lowerColor="#FFFFFF"
        className={classes.waveBorder}
        animationNegativeDelay={2}
      />
    </Fragment>
  )
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
}

export default withWidth()(withStyles(styles, { withTheme: true })(HeadSection))

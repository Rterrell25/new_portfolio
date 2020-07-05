import React from 'react'
import BarHop from '../images/Barhop.png'
import Oddjobs from '../images/Oddjobs.png'
import JobTracker from '../images/JobTracker.png'
import BarhopPlace from '../images/BarhopPlace.png'
import OddjobsPlace from '../images/OddjobsPlace.png'
import Img from 'react-cool-img'
import BarHopModal from '../components/BarHopModal'
import OddjobsModal from '../components/OddjobsModal'
import JobTrackerModal from '../components/JobTrackerModal'
import ScrollAnimation from 'react-animate-on-scroll'

// Material UI
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Tooltip from '@material-ui/core/Tooltip'
import Box from '@material-ui/core/Box'
import GitHubIcon from '@material-ui/icons/GitHub'
import LanguageIcon from '@material-ui/icons/Language'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: props => ({
    position: 'relative',
    width: props.width ? props.width : '100%',
    paddingBottom: props.width ? props.width : '100%',
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden'
  }),
  content: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },

  hide: {
    '@media (max-width: 1024px)': {
      display: 'none'
    },
    '@media (max-width: 700px)': {
      display: 'none'
    },
    '@media (max-width: 600px)': {
      display: 'none'
    }
  },
  alumniChips: {
    display: 'flex',
    justifyContent: 'center'
  },
  wave: {
    '@media (max-width: 959px)': {
      paddingBottom: 100,
      textAlign: 'center'
    }
  }
}))

const Portfolio = () => {
  const classes = useStyles()

  return (
    <>
      <div id='portfolio-background'>
        <Container>
          <Typography
            variant='h6'
            style={{ textAlign: 'center', paddingTop: 150 }}
          >
            Check Out My Work...
          </Typography>
          <Typography
            variant='h3'
            style={{ textAlign: 'center', marginBottom: 20 }}
          >
            My Portfolio Page
          </Typography>
        </Container>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#F5F5F5'
            fillOpacity='1'
            d='M0,128L60,154.7C120,181,240,235,360,261.3C480,288,600,288,720,256C840,224,960,160,1080,165.3C1200,171,1320,245,1380,282.7L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
          ></path>
        </svg>
      </div>

      <Grid
        container
        justify='center'
        alignItems='center'
        className={classes.wave}
      >
        <Grid item xs={9} sm={7} md={6} lg={6} xl={6}>
          <Container maxWidth='sm'>
            <ScrollAnimation animateOnce={true} animateIn='fadeInLeft'>
              <div className={classes.root}>
                <div className={classes.content}>
                  <img
                    src={JobTracker}
                    alt='jobtracker'
                    className={classes.img}
                  />
                </div>
              </div>
            </ScrollAnimation>
          </Container>
        </Grid>

        <Grid item xs={9} sm={7} md={6} lg={6} xl={6}>
          <Container maxWidth='xs'>
            <Typography variant='h4' style={{ textAlign: 'center' }}>
              JobTracker
            </Typography>
            <br />
            <Typography variant='body2'>
              A platform that allows recent graduates from Wyncode Academy to
              track job applications. Technologies used: ReactJS, NodeJS, Google
              Cloud Functions, and Google Firestore.
            </Typography>
            <br />
            <Box className={classes.alumniChips}>
              <a
                rel='noopener noreferrer'
                href='https://jobtracker.netlify.app/'
                target='_blank'
                style={{ margin: '1%' }}
              >
                <Chip
                  icon={<LanguageIcon />}
                  label='View Site'
                  clickable
                  color='primary'
                />
              </a>
              <a
                rel='noopener noreferrer'
                href='https://github.com/Rterrell25/JobTracker_Client'
                target='_blank'
                style={{ margin: '1%' }}
              >
                <Chip
                  icon={<GitHubIcon />}
                  label='View Code'
                  clickable
                  color='primary'
                />
              </a>
              <JobTrackerModal />
            </Box>
          </Container>
        </Grid>
      </Grid>

      <Grid
        id='background'
        container
        justify='center'
        alignItems='center'
        className={classes.wave}
      >
        <Grid item xs={9} sm={7} md={6} lg={6} xl={6}>
          <Container maxWidth='sm'>
            <ScrollAnimation animateOnce={true} animateIn='fadeInLeft'>
              <div className={classes.root}>
                <div className={classes.content}>
                  <Img
                    placeholder={OddjobsPlace}
                    src={Oddjobs}
                    alt='oddjobs'
                    cache={false}
                    className={classes.img}
                  />
                </div>
              </div>
            </ScrollAnimation>
          </Container>
        </Grid>

        <Grid item xs={9} sm={7} md={6} lg={6} xl={6}>
          <Container maxWidth='xs'>
            <Typography variant='h4' style={{ textAlign: 'center' }}>
              Odd Jobs
            </Typography>
            <br />
            <Typography variant='body2'>
              A platform that pairs consumers with reliable contractors.
              Technologies used: ReactJS, Ruby on Rails, PostgreSQL, Calendly
              Integration and Google Maps API.
            </Typography>
            <br />
            <Box className={classes.alumniChips}>
              <Tooltip
                title='Please Note: Hosted on free tier of Heroku, site takes a few minutes to load'
                aria-label='add'
              >
                <a
                  rel='noopener noreferrer'
                  href='https://oddjobs-react.herokuapp.com/'
                  target='_blank'
                  style={{ margin: '1%' }}
                >
                  <Chip
                    icon={<LanguageIcon style={{ color: '#0064B3' }} />}
                    label='View Site'
                    clickable
                    color='secondary'
                    style={{ color: '#0064B3' }}
                  />
                </a>
              </Tooltip>
              <a
                rel='noopener noreferrer'
                href='https://github.com/Rterrell25/Oddjobs_React_App'
                target='_blank'
                style={{ margin: '1%' }}
              >
                <Chip
                  icon={<GitHubIcon style={{ color: '#0064B3' }} />}
                  label='View Code'
                  clickable
                  color='secondary'
                  style={{ color: '#0064B3' }}
                />
              </a>
              <OddjobsModal />
            </Box>
          </Container>
        </Grid>
      </Grid>
      <Grid
        container
        justify='center'
        alignItems='center'
        className={classes.wave}
      >
        <Grid item xs={9} sm={7} md={6} lg={6} xl={6}>
          <Container maxWidth='sm'>
            <ScrollAnimation animateOnce={true} animateIn='fadeInLeft'>
              <div className={classes.root}>
                <div className={classes.content}>
                  <Img
                    placeholder={BarhopPlace}
                    src={BarHop}
                    alt='barhop'
                    cache={false}
                    className={classes.img}
                  />
                </div>
              </div>
            </ScrollAnimation>
          </Container>
        </Grid>

        <Grid item xs={9} sm={7} md={6} lg={6} xl={6}>
          <Container maxWidth='xs'>
            <Typography variant='h4' style={{ textAlign: 'center' }}>
              BarHop
            </Typography>
            <br />
            <Typography variant='body2'>
              A platform that provides users with the top drinking places based
              on their location. Technologies used: ReactJS, NodeJS, JavaScript,
              and the Yelp API .
            </Typography>
            <br />
            <Box className={classes.alumniChips}>
              <Tooltip
                title='Please Note: Hosted on free tier of Heroku, site takes a few minutes to load'
                aria-label='add'
              >
                <a
                  rel='noopener noreferrer'
                  href='https://barhop-wyncode.herokuapp.com/'
                  target='_blank'
                  style={{ margin: '1%' }}
                >
                  <Chip
                    icon={<LanguageIcon />}
                    label='View Site'
                    clickable
                    color='primary'
                  />
                </a>
              </Tooltip>
              <a
                rel='noopener noreferrer'
                href='https://github.com/Rterrell25/Bar_Hop_React_App'
                target='_blank'
                style={{ margin: '1%' }}
              >
                <Chip
                  icon={<GitHubIcon />}
                  label='View Code'
                  clickable
                  color='primary'
                />
              </a>
              <BarHopModal />
            </Box>
          </Container>
        </Grid>
      </Grid>
    </>
  )
}

export default Portfolio

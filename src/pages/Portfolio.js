import React from 'react'
import BarHop from '../images/Barhop.png'
import Oddjobs from '../images/Oddjobs.png'
import JobTracker from '../images/JobTracker.png'
import BarhopPlace from '../images/BarhopPlace.png'
import OddjobsPlace from '../images/OddjobsPlace.png'
import JobTrackerPlace from '../images/JobTrackerPlace.png'
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
  grid: {
    padding: 0
  },

  image: {
    width: '100%',
    margin: 0,
    padding: 0,
    '@media (max-width: 1279px)': {
      width: '70%'
    },
    '@media (max-width: 875px)': {
      width: '100%'
    }
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
    height: 450,
    '@media (max-width: 1279px)': {
      height: 'auto',
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
          <br />
        </Container>

        <Grid
          container
          justify='center'
          alignItems='center'
          className={classes.wave}
        >
          <Grid item xs={12} sm={9} md={9} lg={6} xl={6}>
            <ScrollAnimation animateOnce={true} animateIn='fadeInLeft'>
              <Img
                placeholder={JobTrackerPlace}
                src={JobTracker}
                cache={false}
                alt='JobTracker'
                className={classes.image}
              />
            </ScrollAnimation>
          </Grid>

          <Grid item xs={12} sm={9} md={9} lg={6} xl={6}>
            <Container maxWidth='xs'>
              <Typography variant='h3' style={{ textAlign: 'center' }}>
                JobTracker
              </Typography>
              <br />
              <Typography variant='body2'>
                A platform that allows recent graduates from Wyncode Academy to
                track job applications. Technologies used: ReactJS, NodeJS,
                Google Cloud Functions, and Google Firestore.
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
                    icon={<LanguageIcon style={{ color: '#0064B3' }} />}
                    label='View Site'
                    clickable
                    color='secondary'
                    style={{ color: '#0064B3' }}
                  />
                </a>
                <a
                  rel='noopener noreferrer'
                  href='https://github.com/Rterrell25/JobTracker_Client'
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
                <JobTrackerModal />
              </Box>
            </Container>
          </Grid>
        </Grid>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#F5F5F5'
            fillOpacity='1'
            d='M0,96L48,128C96,160,192,224,288,261.3C384,299,480,309,576,309.3C672,309,768,299,864,266.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          ></path>
        </svg>
      </div>
      <Grid
        className={classes.wave}
        container
        justify='center'
        alignItems='center'
      >
        <Grid item xs={12} sm={9} md={9} lg={6} xl={6}>
          <ScrollAnimation animateOnce={true} animateIn='fadeInLeft'>
            <Img
              placeholder={BarhopPlace}
              src={BarHop}
              alt='barhop'
              cache={false}
              className={classes.image}
            />
          </ScrollAnimation>
        </Grid>

        <Grid item xs={12} sm={9} md={9} lg={6} xl={6}>
          <Container maxWidth='xs'>
            <Typography variant='h3' style={{ textAlign: 'center' }}>
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
      <div id='portfolio-background'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#F5F5F5'
            fillOpacity='1'
            d='M0,0L60,48C120,96,240,192,360,245.3C480,299,600,309,720,266.7C840,224,960,128,1080,106.7C1200,85,1320,139,1380,165.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
          ></path>
        </svg>
        <Grid
          className={classes.wave}
          container
          justify='center'
          alignItems='center'
          style={{ marginBottom: 300 }}
        >
          <Grid item xs={12} sm={9} md={9} lg={6} xl={6}>
            <ScrollAnimation animateOnce={true} animateIn='fadeInLeft'>
              <Img
                placeholder={OddjobsPlace}
                src={Oddjobs}
                alt='oddjobs'
                cache={false}
                className={classes.image}
              />
            </ScrollAnimation>
          </Grid>

          <Grid item xs={12} sm={9} md={9} lg={6} xl={6}>
            <Container maxWidth='xs'>
              <Typography variant='h3' style={{ textAlign: 'center' }}>
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
      </div>
    </>
  )
}

export default Portfolio

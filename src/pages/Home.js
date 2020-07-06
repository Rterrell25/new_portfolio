import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import Resume from '../Resume/Resume.pdf'
import { Link } from 'react-scroll'
import Test from '../components/Test'
import ContactLink from '../utils/ContactLink'
import Contact from '../components/Contact'

// MUI
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  background: {
    position: 'relative',
    textAlign: 'center',
    height: 620,
    width: '100%',
    margin: 0,
    overflow: 'hidden'
  },
  height: {
    height: 250,

    '@media (max-width: 600px)': {
      height: 500
    }
  },
  overlay: {
    marginTop: 250,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    margin: 0,
    display: 'grid',
    placeItems: 'center',
    '@media (max-width: 600px)': {
      marginTop: 120
    }
  },

  overlay_text: {
    color: '#FFFFFF',
    textAlign: 'center',

    '@media (max-width: 768px)': {
      textAlign: 'left'
    },

    '@media (max-width: 600px)': {
      textAlign: 'left'
    }
  },
  card: {
    minHeight: 250
  },
  submit: {
    position: 'relative',
    borderRadius: 0,
    boxShadow: 'none',
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  alumniChips: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5)
    },
    marginBottom: 30
  },
  image: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    backgroundColor: '#020202',
    paddingLeft: 5,
    height: 285,
    '@media (max-width: 1024px)': {
      height: 265
    },
    '@media (max-width: 700px)': {
      height: 240
    },
    '@media (max-width: 600px)': {
      height: 240
    }
  },

  dashboardContainer: {
    marginTop: 90,
    padding: 10
  },
  grid: {
    padding: 0,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%'
  },
  container: {
    width: '80%'
  }
}))

const Home = () => {
  const classes = useStyles()
  return (
    <>
      <Box>
        <div className='wave-container'>
          <div className={classes.overlay}>
            <Container className={classes.overlay_text}>
              <Typography
                variant='h4'
                className={classes.heroFont}
                style={{ marginBottom: '15px', textAlign: 'center' }}
              >
                Full-Stack Web Developer
              </Typography>
              <Typography variant='body1'>
                Specializing in creating simplistic, yet beautiful user
                interfaces.
              </Typography>
              <Typography variant='body1'>
                I build fast, interactive websites. Feel free to take a look at
                my latest projects on the portfolio page.
              </Typography>
              <Typography variant='body1' style={{ marginBottom: '15px' }}>
                Click{' '}
                <Link to='social' smooth={true} offset={50} duration={1500}>
                  <b style={{ cursor: 'pointer' }}>here</b>{' '}
                </Link>{' '}
                to learn about my background and follow me on social media
              </Typography>

              <Button
                variant='contained'
                disableElevation
                className={classes.submit}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  backgroundColor: '#00B0EE'
                }}
              >
                <a
                  href={Resume}
                  download="Robert Terrell's Resume"
                  style={{ color: '#FFFFFF' }}
                >
                  Download Resume
                </a>
              </Button>
            </Container>
          </div>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
            <path
              fill='#F5F5F5'
              fillOpacity='1'
              d='M0,128L60,154.7C120,181,240,235,360,261.3C480,288,600,288,720,256C840,224,960,160,1080,165.3C1200,171,1320,245,1380,282.7L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
            ></path>
          </svg>
        </div>

        <Container style={{ marginTop: 40 }}>
          <Typography variant='h6' style={{ textAlign: 'center' }}>
            What I Do...
          </Typography>
          <Typography
            variant='h3'
            style={{ textAlign: 'center', marginBottom: 35 }}
          >
            My Specialties
          </Typography>
          <br />
          <Test />
        </Container>
      </Box>

      <br />
      <Grid
        className={classes.height}
        id='background'
        container
        alignItems='center'
        style={{ marginBottom: 50, marginTop: 50 }}
      >
        <Grid item sm={6} md={3} lg={3} xs={12} className={classes.grid}>
          <ScrollAnimation animateOnce={true} delay={100} animateIn='fadeInUp'>
            <Typography variant='h4' style={{ textAlign: 'center' }}>
              500k+
            </Typography>
            <Typography variant='body2' style={{ textAlign: 'center' }}>
              Lines of Code Written
            </Typography>
          </ScrollAnimation>
        </Grid>
        <Grid item sm={6} md={3} lg={3} xs={12} className={classes.grid}>
          <ScrollAnimation animateOnce={true} delay={200} animateIn='fadeInUp'>
            <Typography variant='h4' style={{ textAlign: 'center' }}>
              <a
                href='https://github.com/Rterrell25'
                rel='noopener noreferrer'
                target='_blank'
                style={{ color: '#FFFFFF' }}
              >
                GitHub
              </a>
            </Typography>

            <Typography variant='body2' style={{ textAlign: 'center' }}>
              <a
                href='https://github.com/Rterrell25'
                rel='noopener noreferrer'
                target='_blank'
                style={{ color: '#FFFFFF' }}
              >
                Click Here to Visit
              </a>
            </Typography>
          </ScrollAnimation>
        </Grid>
        <Grid item sm={6} md={3} lg={3} xs={12} className={classes.grid}>
          <ScrollAnimation animateOnce={true} delay={300} animateIn='fadeInUp'>
            <Typography variant='h4' style={{ textAlign: 'center' }}>
              <a
                href='https://www.linkedin.com/in/rterrell25/'
                rel='noopener noreferrer'
                target='_blank'
                style={{ color: '#FFFFFF' }}
              >
                LinkedIn
              </a>
            </Typography>
            <Typography variant='body2' style={{ textAlign: 'center' }}>
              <a
                href='https://www.linkedin.com/in/rterrell25/'
                rel='noopener noreferrer'
                target='_blank'
                style={{ color: '#FFFFFF' }}
              >
                Click Here to Visit
              </a>
            </Typography>
          </ScrollAnimation>
        </Grid>
        <Grid item sm={6} md={3} lg={3} xs={12} className={classes.grid}>
          <ScrollAnimation animateOnce={true} delay={400} animateIn='fadeInUp'>
            <ContactLink />
          </ScrollAnimation>
        </Grid>
      </Grid>
      <Container style={{ marginBottom: 100, marginTop: 40 }}>
        <br />

        <Typography variant='h6' id='social' style={{ textAlign: 'center' }}>
          A Brief Background...
        </Typography>
        <Typography
          variant='h3'
          style={{ textAlign: 'center', marginBottom: 25 }}
        >
          About Me
        </Typography>

        <br />

        <Typography
          variant='h4'
          className={classes.heroFont}
          style={{ textTransform: 'uppercase', textAlign: 'center' }}
        >
          ROBERT FRANCIS <span style={{ color: '#0B54C1' }}>TERRELL</span>
        </Typography>
        <Typography
          variant='body2'
          style={{ textTransform: 'uppercase', textAlign: 'center' }}
        >
          720 Briny Avenue Pompano Beach, FL 33062 · (317) 258-0388 ·
          <a href='mailto:rterrell25@gmail.com'>
            <span style={{ color: '#0B54C1' }}>Rterrell25@gmail.com</span>
          </a>
        </Typography>
        <br />
        <Typography variant='body2'>
          My name is Robert Terrell. Previously, I worked at a small/large
          business loan vendor in Coral Springs, FL BFS Capital. During my time
          at BFS Capital, I oversaw a project to automate banking operations. I
          worked closely with a tech company called Ocrolus to develop rules for
          the automated banking system. I led the testing and development phase
          and refined the system as needed for final production. Working with
          Ocrolus, gave me a taste of what I wanted to do in life. I wanted to
          create, and build real-world solutions to today's problems.
        </Typography>
        <br />
        <Typography variant='body2'>
          I attended Wyncode Academy, where I immersed myself in the culture of
          tech. Although making a career change was difficult, I was armed with
          high attention to detail, problem-solving skills, and effective
          communication skills that I fostered and developed in my past career.
          I work hard every single day developing my new skillset as a full
          stack developer, maintaining up-to-date industry knowledge. Web
          development is ever-changing, and so is my knowledge base.
        </Typography>
        <br />
        <Typography variant='body2'>
          I pride myself on producing the highest quality of work possible. I
          have a passion for continuing my learning and pushing the boundaries
          of my knowledge. My primary objective when completing a project is to
          solve a real-world problem for the client as well as the users who
          will be using the product. I love coding, and I strive to become
          better every single day. I'm interested in the entire frontend
          spectrum and working on ambitious projects with positive people.
        </Typography>
        <br />
      </Container>
      <Contact />
    </>
  )
}

export default Home

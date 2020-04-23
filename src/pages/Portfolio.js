import React from "react"
import BarHop from "../images/BarHop.jpg"
import Oddjobs from "../images/Oddjobs.png"
import JobTracker from "../images/JobTracker.png"

// Material UI
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Chip from "@material-ui/core/Chip"
import Box from "@material-ui/core/Box"
import GitHubIcon from "@material-ui/icons/GitHub"
import LanguageIcon from "@material-ui/icons/Language"
import Divider from "@material-ui/core/Divider"

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: 0,
  },

  dashboardContainer: {
    marginTop: 90,
    padding: 10,
  },
  image: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
  },
  alumniChips: {
    display: "flex",
    justifyContent: "center",
  },
}))

const Portfolio = () => {
  const classes = useStyles()
  return (
    <>
      <Container className={classes.dashboardContainer}>
        <Grid
          container
          spacing={2}
          className={classes.grid}
          alignItems='center'
        >
          <Grid
            item
            sm={6}
            xs={12}
            className={classes.grid}
            style={{ marginBottom: 20 }}
          >
            <img
              src={BarHop}
              alt='barhop'
              loading='lazy'
              className={classes.image}
            />
          </Grid>

          <Grid
            item
            sm={6}
            xs={12}
            className={classes.grid}
            style={{ width: "100%", textAlign: "center", padding: 0 }}
          >
            <Container
              component='main'
              maxWidth='xs'
              style={{ marginBottom: 20 }}
            >
              <Typography variant='h4'>Bar Hop</Typography>
              <br />
              <Typography variant='body2'>
                A platform that provides users with the top drinking places
                based on their location. Technologies used: ReactJS, NodeJS,
                JavaScript, and the Yelp API .
              </Typography>
              <br />
              <Box className={classes.alumniChips}>
                <a
                  rel='noopener noreferrer'
                  href='https://barhop-wyncode.herokuapp.com/'
                  target='_blank'
                  style={{ margin: "1%" }}
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
                  href='https://github.com/Rterrell25/Bar_Hop_React_App'
                  target='_blank'
                  style={{ margin: "1%" }}
                >
                  <Chip
                    icon={<GitHubIcon />}
                    label='View Code'
                    clickable
                    color='primary'
                  />
                </a>
              </Box>
            </Container>
          </Grid>
          <br />
          <Divider style={{ width: "100%" }} />
          <br />
          <Grid
            item
            sm={6}
            xs={12}
            className={classes.grid}
            style={{ marginTop: 20, marginBottom: 20 }}
          >
            <img
              src={Oddjobs}
              alt='barhop'
              loading='lazy'
              className={classes.image}
            />
          </Grid>

          <Grid
            item
            sm={6}
            xs={12}
            className={classes.grid}
            style={{ width: "100%", textAlign: "center", padding: 0 }}
          >
            <Container
              component='main'
              maxWidth='xs'
              style={{ marginBottom: 20 }}
            >
              <Typography variant='h4'>Odd Jobs</Typography>
              <br />
              <Typography variant='body2'>
                A platform that pairs consumers with reliable contractors.
                Technologies used: ReactJS, Ruby on Rails, PostgreSQL, Calendly
                Integration and Google Maps API.
              </Typography>
              <br />
              <Box className={classes.alumniChips}>
                <a
                  rel='noopener noreferrer'
                  href='https://oddjobs-react.herokuapp.com/'
                  target='_blank'
                  style={{ margin: "1%" }}
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
                  href='https://github.com/Rterrell25/Oddjobs_React_App'
                  target='_blank'
                  style={{ margin: "1%" }}
                >
                  <Chip
                    icon={<GitHubIcon />}
                    label='View Code'
                    clickable
                    color='primary'
                  />
                </a>
              </Box>
            </Container>
          </Grid>
          <br />
          <Divider style={{ width: "100%" }} />
          <br />
          <Grid
            item
            sm={6}
            xs={12}
            className={classes.grid}
            style={{ marginTop: 20 }}
          >
            <img
              src={JobTracker}
              alt='JobTracker'
              loading='lazy'
              className={classes.image}
            />
          </Grid>

          <Grid
            item
            sm={6}
            xs={12}
            className={classes.grid}
            style={{ width: "100%", textAlign: "center", padding: 0 }}
          >
            <Container
              component='main'
              maxWidth='xs'
              style={{ marginBottom: 20 }}
            >
              <Typography variant='h4'>JobTracker</Typography>
              <br />
              <Typography variant='body2'>
                A platform that allows recent graduates from Wyncode Academy to
                track job applications, store resume's, and monitor follow ups.
                Technologies used: ReactJS, NodeJS, Google Cloud Functions, and
                Google Firestore.
              </Typography>
              <br />
              <Box className={classes.alumniChips}>
                <a
                  rel='noopener noreferrer'
                  href='https://jobtracker.netlify.app/'
                  target='_blank'
                  style={{ margin: "1%" }}
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
                  style={{ margin: "1%" }}
                >
                  <Chip
                    icon={<GitHubIcon />}
                    label='View Code'
                    clickable
                    color='primary'
                  />
                </a>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Portfolio

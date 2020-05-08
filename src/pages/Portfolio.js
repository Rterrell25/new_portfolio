import React, { useContext } from "react"
import BarHop from "../images/BarHop.jpg"
import Oddjobs from "../images/Oddjobs.png"
import JobTracker from "../images/JobTracker.png"
import BarhopPlace from "../images/BarhopPlace.jpg"
import OddjobsPlace from "../images/OddjobsPlace.png"
import JobTrackerPlace from "../images/JobTrackerPlace.png"
import Img from "react-cool-img"
import BarHopModal from "../components/BarHopModal"
import OddjobsModal from "../components/OddjobsModal"
import JobTrackerModal from "../components/JobTrackerModal"
import { ReadyContext } from "../context/ReadyContext"

// Material UI
import Tooltip from "@material-ui/core/Tooltip"
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
    marginBottom: 40,
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

  hide: {
    "@media (max-width: 1024px)": {
      display: "none",
    },
    "@media (max-width: 700px)": {
      display: "none",
    },
    "@media (max-width: 600px)": {
      display: "none",
    },
  },
}))

const Portfolio = () => {
  const { ready } = useContext(ReadyContext)

  const classes = useStyles()

  return (
    <>
      <Container className={classes.dashboardContainer}>
        <Grid
          container
          spacing={2}
          className={classes.grid}
          alignItems='center'
          style={{ height: "100vh" }}
        >
          <Grid
            item
            xs={12}
            sm={9}
            md={6}
            lg={6}
            xl={6}
            className={classes.grid}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "100%",
            }}
          >
            <Img
              placeholder={BarhopPlace}
              src={BarHop}
              alt='barhop'
              className={classes.image}
              cache={false}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={9}
            md={6}
            lg={6}
            xl={6}
            className={classes.grid}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "100%",
              visibility: ready ? "visible" : "hidden",
            }}
          >
            <Container
              component='main'
              maxWidth='xs'
              style={{
                textAlign: "center",
                visibility: ready ? "visible" : "hidden",
              }}
            >
              <Typography
                variant='h5'
                style={{
                  marginBottom: 10,
                  visibility: ready ? "visible" : "hidden",
                }}
              >
                Bar Hop
              </Typography>

              <Typography
                variant='body2'
                style={{ visibility: ready ? "visible" : "hidden" }}
              >
                A platform that provides users with the top drinking places
                based on their location. Technologies used: ReactJS, NodeJS,
                JavaScript, and the Yelp API .
              </Typography>
              <br />
              <Box
                className={classes.alumniChips}
                style={{ visibility: ready ? "visible" : "hidden" }}
              >
                <Tooltip
                  title='Please Note: Hosted on free tier of Heroku, site takes a few minutes to load'
                  aria-label='add'
                >
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
                </Tooltip>
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
                <BarHopModal />
              </Box>
            </Container>
          </Grid>

          <Divider style={{ width: "100%", marginTop: 30, marginBottom: 30 }} />

          <Grid
            item
            xs={12}
            sm={9}
            md={6}
            lg={6}
            xl={6}
            className={classes.grid}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "100%",
            }}
          >
            <Img
              placeholder={OddjobsPlace}
              src={Oddjobs}
              alt='oddjobs'
              cache={false}
              className={classes.image}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={9}
            md={6}
            lg={6}
            xl={6}
            className={classes.grid}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "100%",
              visibility: ready ? "visible" : "hidden",
            }}
          >
            <Container
              component='main'
              maxWidth='xs'
              style={{
                textAlign: "center",
                visibility: ready ? "visible" : "hidden",
              }}
            >
              <Typography
                variant='h5'
                style={{
                  marginBottom: 10,
                  visibility: ready ? "visible" : "hidden",
                }}
              >
                Odd Jobs
              </Typography>

              <Typography
                variant='body2'
                style={{ visibility: ready ? "visible" : "hidden" }}
              >
                A platform that pairs consumers with reliable contractors.
                Technologies used: ReactJS, Ruby on Rails, PostgreSQL, Calendly
                Integration and Google Maps API.
              </Typography>
              <br />
              <Box
                className={classes.alumniChips}
                style={{ visibility: ready ? "visible" : "hidden" }}
              >
                <Tooltip
                  title='Please Note: Hosted on free tier of Heroku, site takes a few minutes to load'
                  aria-label='add'
                >
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
                </Tooltip>
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
                <OddjobsModal />
              </Box>
            </Container>
          </Grid>
          <br />
          <Divider style={{ width: "100%", marginTop: 30, marginBottom: 30 }} />
          <br />
          <Grid
            item
            xs={12}
            sm={9}
            md={6}
            lg={6}
            xl={6}
            className={classes.grid}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "100%",
            }}
          >
            <Img
              placeholder={JobTrackerPlace}
              src={JobTracker}
              cache={false}
              alt='JobTracker'
              className={classes.image}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={9}
            md={6}
            lg={6}
            xl={6}
            className={classes.grid}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "100%",
              visibility: ready ? "visible" : "hidden",
            }}
          >
            <Container
              component='main'
              maxWidth='xs'
              style={{
                textAlign: "center",
                visibility: ready ? "visible" : "hidden",
              }}
            >
              <Typography
                variant='h5'
                style={{
                  marginBottom: 10,
                  visibility: ready ? "visible" : "hidden",
                }}
              >
                JobTracker
              </Typography>

              <Typography
                variant='body2'
                style={{ visibility: ready ? "visible" : "hidden" }}
              >
                A platform that allows recent graduates from Wyncode Academy to
                track job applications, store resume's, and monitor follow ups.
                Technologies used: ReactJS, NodeJS, Google Cloud Functions, and
                Google Firestore.
              </Typography>
              <br />
              <Box
                className={classes.alumniChips}
                style={{ visibility: ready ? "visible" : "hidden" }}
              >
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
                <JobTrackerModal />
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Portfolio

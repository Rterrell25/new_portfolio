import React from "react"
import Hero from "../images/Hero.png"
import Resume from "../Resume/Resume.pdf"

// MUI Icons
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import StorageIcon from "@material-ui/icons/Storage"
import CodeIcon from "@material-ui/icons/Code"

// MUI
import Chip from "@material-ui/core/Chip"
import MobileFriendlyIcon from "@material-ui/icons/MobileFriendly"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${Hero})`,
    position: "relative",
    objectFit: "cover",
    backgroundPosition: "2% -1650px",
    width: "100%",
    height: 650,
    paddingTop: 70,
    margin: 0,
    backgroundRepeat: "no-repeat",
    "@media (max-width: 1024px)": {
      backgroundPosition: "20% -1650px",
    },
    "@media (max-width: 700px)": {
      height: 550,
    },
    "@media (max-width: 600px)": {
      height: 550,
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    margin: 0,
    display: "grid",
    placeItems: "center",
  },

  overlay_text: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  card: {
    minHeight: 250,
  },
  submit: {
    position: "relative",
    borderRadius: 0,
    boxShadow: "none",
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  alumniChips: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 40,
  },
}))

const Home = () => {
  const classes = useStyles()
  return (
    <>
      <Box>
        <Box className={classes.background}>
          <div className={classes.overlay}>
            <Container className={classes.overlay_text}>
              <Typography
                variant='h4'
                className={classes.heroFont}
                style={{ marginBottom: "15px" }}
              >
                Full-Stack Web Developer
              </Typography>
              <Typography variant='body1'>
                Specializing in creating simplistic, yet beautiful user
                interfaces.
              </Typography>
              <Typography variant='body1' style={{ marginBottom: "15px" }}>
                I build fast, interactive websites. Feel free to take a look at
                my latest projects on the portfolio page.
              </Typography>
              <a href={Resume} download="Robert Terrell's Resume">
                <Button
                  variant='contained'
                  color='primary'
                  disableElevation
                  className={classes.submit}
                >
                  Download Resume
                </Button>
              </a>
            </Container>
          </div>
        </Box>
        <Box>
          <Container style={{ marginBottom: 100 }}>
            <Grid
              container
              spacing={2}
              style={{
                textAlign: "center",
                marginTop: "3%",
              }}
              alignItems='center'
            >
              <Grid item sm={4} xs={12}>
                <MobileFriendlyIcon style={{ height: 50, width: 50 }} />
                <Typography variant='h5' style={{ marginBottom: "5px" }}>
                  Mobile-Friendly
                </Typography>
                <Typography variant='body2'>
                  Maintaining a mobile first mindset, while creating a
                  responsive design, makes your website accessible to all users,
                  regardless of their device.
                </Typography>
              </Grid>
              <Grid item sm={4} xs={12}>
                <CodeIcon style={{ height: 50, width: 50 }} />
                <Typography variant='h5' style={{ marginBottom: "5px" }}>
                  Design + Development
                </Typography>
                <Typography variant='body2'>
                  Building out the visual components of a website using HTML5,
                  CSS3, Material-UI, Javascript, and ReactJS. Using clean,
                  modern designs - optimized for performance.
                </Typography>
              </Grid>
              <Grid item sm={4} xs={12}>
                <StorageIcon style={{ height: 50, width: 50 }} />
                <Typography
                  variant='h5'
                  style={{
                    marginBottom: "5px",
                  }}
                >
                  Back-End Development
                </Typography>
                <Typography variant='body2'>
                  Creating powerful back ends with fleshed out data models using
                  technologies, such as AWS, NodeJS, Google Cloud(Firestore),
                  Ruby on Rails, PostgreSQL, GraphQL
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Box className={classes.alumniChips}>
        <a
          rel='noopener noreferrer'
          href='https://github.com/Rterrell25'
          target='_blank'
          style={{ margin: "1%" }}
        >
          <Chip
            icon={<GitHubIcon />}
            label='GitHub'
            clickable
            color='primary'
          />
        </a>
        <a
          rel='noopener noreferrer'
          href='https://www.linkedin.com/in/rterrell25/'
          target='_blank'
          style={{ margin: "1%" }}
        >
          <Chip
            icon={<LinkedInIcon />}
            label='LinkedIn'
            clickable
            color='primary'
          />
        </a>
      </Box>
    </>
  )
}

export default Home

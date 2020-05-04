import React from "react"
import Hero from "../images/Hero.png"
import Resume from "../Resume/Resume.pdf"
import { Link } from "react-scroll"
import Typical from "react-typical"
import Bar from "../images/Bar.png"

// MUI Icons
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import StorageIcon from "@material-ui/icons/Storage"
import CodeIcon from "@material-ui/icons/Code"
import EmailIcon from "@material-ui/icons/Email"

// MUI
import Divider from "@material-ui/core/Divider"
import Chip from "@material-ui/core/Chip"
import Tooltip from "@material-ui/core/Tooltip"
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
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
    marginBottom: 30,
  },
  image: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    backgroundColor: "#020202",
    paddingLeft: 5,
    height: 285,
    "@media (max-width: 1024px)": {
      height: 265,
    },
    "@media (max-width: 700px)": {
      height: 240,
    },
    "@media (max-width: 600px)": {
      height: 240,
    },
  },

  dashboardContainer: {
    marginTop: 90,
    padding: 10,
  },
  grid: {
    padding: 0,
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
              <Typography variant='body1'>
                I build fast, interactive websites. Feel free to take a look at
                my latest projects on the portfolio page.
              </Typography>
              <Typography variant='body1' style={{ marginBottom: "15px" }}>
                Click{" "}
                <Link to='social' smooth={true} offset={50} duration={1500}>
                  <b style={{ cursor: "pointer" }}>here</b>{" "}
                </Link>{" "}
                to follow me on social media or send an email
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
          <Container style={{ marginBottom: 20 }}>
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

      <br />

      <Container style={{ marginBottom: 20 }}>
        <Grid
          container
          spacing={2}
          style={{
            marginTop: "3%",
          }}
          alignItems='center'
        >
          <Grid
            item
            sm={6}
            xs={12}
            className={classes.grid}
            style={{ marginBottom: 20 }}
          >
            <div style={{ backgroundColor: "#020202", margin: 0, padding: 0 }}>
              <img
                src={Bar}
                style={{ width: "100%", marginBottom: 5, padding: 0 }}
              />
              <div className={classes.image}>
                <Typography
                  variant='body2'
                  style={{ fontWeight: "bold", color: "#33cccc" }}
                >
                  ~
                </Typography>
                <Typography variant='body2' style={{ color: "#FFFFFF" }}>
                  <span style={{ color: "#33cccc", fontWeight: "bold" }}>
                    ~
                  </span>{" "}
                  cd desktop
                </Typography>
                <Typography variant='body2' style={{ color: "#FFFFFF" }}>
                  <span style={{ color: "#33cccc", fontWeight: "bold" }}>
                    desktop
                  </span>{" "}
                  mkdir About_Me
                </Typography>
                <Typography variant='body2' style={{ color: "#FFFFFF" }}>
                  <span style={{ color: "#33cccc", fontWeight: "bold" }}>
                    desktop
                  </span>{" "}
                  cd About_Me
                </Typography>
                <Typography variant='body2' style={{ color: "#FFFFFF" }}>
                  <span style={{ color: "#33cccc", fontWeight: "bold" }}>
                    About_Me
                  </span>{" "}
                  <Typical
                    steps={[
                      " touch web_developer.js",
                      2000,
                      " touch problem_solver.js",
                      2000,
                      " touch hard_worker.js",
                      2000,
                      " touch detail_oriented.html",
                      2000,
                      " touch loves_design.css",
                      2000,
                      " code .",
                      5000,
                    ]}
                    loop={Infinity}
                    wrapper='a'
                  />
                </Typography>
              </div>
            </div>
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
              style={{
                marginBottom: 20,
              }}
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
                <Tooltip
                  title='Please Note: Hosted on free tier of Heroku, site takes a few minutes to load'
                  aria-label='add'
                >
                  <a
                    rel='noopener noreferrer'
                    href='https://barhop-wyncode.herokuapp.com/'
                    target='_blank'
                    style={{ margin: "1%" }}
                  ></a>
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
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Container>
      {/* <Box id='social' className={classes.alumniChips}>
        <Tooltip title='GitHub' aria-label='add'>
          <a
            href='https://github.com/Rterrell25'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Chip
              icon={<GitHubIcon />}
              label='GitHub'
              clickable
              color='primary'
              size='small'
            />
          </a>
        </Tooltip>
        <Tooltip title='LinkedIn' aria-label='add'>
          <a
            href='https://www.linkedin.com/in/rterrell25/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Chip
              icon={<LinkedInIcon />}
              label='LinkedIn'
              size='small'
              clickable
              color='primary'
            />
          </a>
        </Tooltip>
        <Tooltip title='Email' aria-label='add'>
          <a href='mailto: rterrell25@gmail.com'>
            <Chip
              icon={<EmailIcon />}
              label='Email'
              clickable
              size='small'
              color='primary'
            />
          </a>
        </Tooltip>
      </Box> */}
    </>
  )
}

export default Home

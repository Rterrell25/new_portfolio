import React from "react"
import Hero from "../images/Hero.png"
import Resume from "../Resume/Resume.pdf"
import { Link } from "react-scroll"
import Test from "../components/Test"

// MUI
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Chip from "@material-ui/core/Chip"

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

    "@media (max-width: 600px)": {
      textAlign: "left",
    },
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
  container: {
    width: "80%",
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
                style={{ marginBottom: "15px", textAlign: "center" }}
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
                to learn about my background and follow me on social media
              </Typography>
              <a href={Resume} download="Robert Terrell's Resume">
                <Button
                  variant='contained'
                  color='primary'
                  disableElevation
                  className={classes.submit}
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  Download Resume
                </Button>
              </a>
            </Container>
          </div>
        </Box>
        <Box>
          <Container style={{ marginTop: 40 }}>
            <Test />
          </Container>
        </Box>
      </Box>

      <br />
      <Container style={{ marginBottom: 100 }}>
        <Divider style={{ width: "100%", marginBottom: 40 }} />
        <br />
        <Typography
          variant='h4'
          className={classes.heroFont}
          style={{ textTransform: "uppercase", textAlign: "center" }}
          id='social'
        >
          ROBERT FRANCIS <span style={{ color: "#0B54C1" }}>TERRELL</span>
        </Typography>
        <Typography
          variant='body2'
          style={{ textTransform: "uppercase", textAlign: "center" }}
        >
          720 Briny Avenue Pompano Beach, FL 33062 · (317) 258-0388 ·
          <a href='mailto:rterrell25@gmail.com'>
            <span style={{ color: "#0B54C1" }}>Rterrell25@gmail.com</span>
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
      </Container>
    </>
  )
}

export default Home

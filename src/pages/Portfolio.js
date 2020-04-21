import React from "react"
import BarHop from "../images/BarHop.jpg"
import Oddjobs from "../images/Oddjobs.png"
import JobTracker from "../images/JobTracker.png"

// Material UI

import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

import Container from "@material-ui/core/Container"

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: 0,
    margin: 0,
  },

  dashboardContainer: {
    marginTop: 70,
    padding: 10,
  },
  image: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
  },
}))

const Portfolio = () => {
  const classes = useStyles()
  return (
    <>
      <Container className={classes.dashboardContainer}>
        <Grid container spacing={2} alignItems='center'>
          <Grid item sm={6} xs={12} className={classes.grid}>
            <img src={BarHop} alt='barhop' className={classes.image} />
            <h1 style={{ textAlign: "center" }}>BarHop</h1>
          </Grid>
          <Grid item sm={6} xs={12} className={classes.grid}>
            <img src={Oddjobs} alt='oddjobs' className={classes.image} />
            <h1 style={{ textAlign: "center" }}>Odd Jobs</h1>
          </Grid>
          <Grid item sm={6} xs={12} className={classes.grid}>
            <img src={JobTracker} alt='jobtracker' className={classes.image} />
            <h1 style={{ textAlign: "center" }}>Job Tracker</h1>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Portfolio

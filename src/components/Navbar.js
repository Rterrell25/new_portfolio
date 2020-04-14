import React from "react"
import { makeStyles } from "@material-ui/core/styles"

// MUI stuff
import useMediaQuery from "@material-ui/core/useMediaQuery"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

// components
import Header from "./Header"
import HeaderMobile from "./HeaderMobile"

const Navbar = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
    },
  }))
  const classes = useStyles()

  const isSmallScreen = useMediaQuery("(max-width:600px)")

  return (
    <AppBar className={classes.root}>
      <Toolbar>{isSmallScreen ? <HeaderMobile /> : <Header />}</Toolbar>
    </AppBar>
  )
}

export default Navbar

import React, { useState } from "react"
import { Link } from "react-router-dom"
import Icon from "../images/Icon.png"

// MUI STUFF
import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import Button from "@material-ui/core/Button"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"

import ListItemText from "@material-ui/core/ListItemText"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

// context

const useStyles = makeStyles((theme) => ({
  navList: {
    width: 280,
    flexGrow: 1,
    position: "relative",
  },
  fullList: {
    width: "auto",
  },
  logout: {
    fontWeight: "bold",
    color: "white",
    borderRadius: 0,
    boxShadow: "none",
    textTransform: "uppercase",
  },
  spreadLogout: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  navImage: {
    width: "100%",
  },
  image: {
    height: 100,
    width: 100,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}))
const HeaderMobile = () => {
  const classes = useStyles()

  const [isOpen, setIsOpen] = useState(false)
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const toggleDrawer = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Grid container justify='space-between' alignItems='center'>
        <Grid item xs={2}>
          <IconButton
            onClick={toggleDrawer}
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
        </Grid>
        <Grid item xs={10} container justify='flex-end'>
          <Button color='inherit' component={Link} to='/'>
            Home
          </Button>
        </Grid>
      </Grid>
      <SwipeableDrawer
        open={isOpen}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        <List
          className={classes.navList}
          role='presentation'
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <ListItem button component={Link} to='/'>
            <img
              src={Icon}
              alt='header mobile icon'
              className={classes.image}
            />
          </ListItem>
          <Divider />

          <>
            <ListItem button component={Link} to='/github'>
              <ListItemText primary='Github' />
            </ListItem>
            <ListItem button component={Link} to='/portfolio'>
              <ListItemText primary='Portfolio' />
            </ListItem>
            <ListItem button component={Link} to='/contact'>
              <ListItemText primary='Contact' />
            </ListItem>
            <Divider />
          </>
        </List>
      </SwipeableDrawer>
    </>
  )
}
export default HeaderMobile

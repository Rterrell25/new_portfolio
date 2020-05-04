import React from "react"

// Material UI
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import Modal from "@material-ui/core/Modal"
import { makeStyles } from "@material-ui/core/styles"
import Chip from "@material-ui/core/Chip"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"

const useStyles = makeStyles((theme) => ({
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

  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "70%",
    outline: "none",
  },
}))

const OddjobsModal = () => {
  const [open, setOpen] = React.useState(false)
  const classes = useStyles()

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Chip
        icon={<PlayArrowIcon />}
        label='Preview'
        onClick={handleOpen}
        clickable
        className={classes.hide}
        color='primary'
        style={{ margin: "1%" }}
      />

      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <video
              autoPlay
              style={{
                width: "100%",
              }}
            >
              <source src='http://daa792p138h1p.cloudfront.net/Oddjobs720.mov' />
            </video>
          </div>
        </Fade>
      </Modal>
    </>
  )
}

export default OddjobsModal

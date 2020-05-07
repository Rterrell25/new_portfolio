import React, { useState } from "react"
import axios from "axios"
import { makeStyles } from "@material-ui/core/styles"
import Alert from "../components/Alert"
import ContactPose from "../images/ContactPose.png"

// MUI stuff
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import CircularProgress from "@material-ui/core/CircularProgress"
import Snackbar from "@material-ui/core/Snackbar"

// Components

const useStyles = makeStyles((theme) => ({
  form: {
    textAlign: "center",
    width: "100%", // Fix IE 11 issue.

    marginTop: theme.spacing(1),
    position: "relative",
    marginBottom: "25px",
  },
  image: {
    margin: "20px auto 20px auto",
    marginBottom: 14,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    position: "relative",
    borderRadius: 0,
    boxShadow: "none",
    fontWeight: "bold",
    color: "white",
  },
  progress: {
    position: "absolute",
  },
  pageTitle: {
    marginBottom: 16,
  },
  links: {
    color: theme.palette.text.primary,
  },
  successAlert: {
    background: "#0B54C1",
  },
}))

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
}

const SignUp = ({ history }) => {
  const classes = useStyles()

  const [formData, setFormData] = useState(INITIAL_STATE)
  const [isloading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [open, setOpen] = React.useState(false)
  const [message, setMessage] = useState({})

  const isInvalid =
    !formData.firstName ||
    !formData.lastName ||
    !formData.email ||
    !formData.message ||
    isloading

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setOpen(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    await axios
      .post(`/message`, formData)
      .then((res) => {
        setOpen(true)
        setMessage(res.data)
        setIsLoading(false)
        setFormData(INITIAL_STATE)
      })
      .catch((err) => {
        setIsLoading(false)
        setErrors(err.response.data)
        const _TIMER = setTimeout(() => {
          setErrors("")
          clearTimeout(_TIMER)
        }, 5000)
      })
  }

  const handleInputChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value })
  }

  return (
    <div style={{ marginTop: 70 }}>
      <Container component='main' maxWidth='xs'>
        <div className={classes.paper} style={{ height: "100vh" }}>
          <div className={classes.image}>
            <img
              src={ContactPose}
              alt='contact page icon'
              style={{ height: 120, width: 120 }}
            />
          </div>
          <Typography variant='h4' className={classes.pageTitle}>
            Contact Me
          </Typography>
          <form noValidate className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='fname'
                  name='firstName'
                  variant='outlined'
                  fullWidth
                  id='firstName'
                  label='First Name'
                  autoFocus
                  value={formData.firstName}
                  onChange={handleInputChange("firstName")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  name='lastName'
                  autoComplete='lname'
                  value={formData.lastName}
                  onChange={handleInputChange("lastName")}
                />
              </Grid>
            </Grid>
            <TextField
              variant='outlined'
              margin='normal'
              fullWidth
              id='email'
              type='email'
              label='Email'
              name='email'
              autoComplete='email'
              helperText={errors.email}
              error={errors.email ? true : false}
              value={formData.email}
              onChange={handleInputChange("email")}
            />

            <TextField
              variant='outlined'
              margin='normal'
              fullWidth
              id='message'
              type='text'
              label='Message'
              name='message'
              helperText={errors.message}
              error={errors.message ? true : false}
              value={formData.message}
              onChange={handleInputChange("message")}
              multiline={true}
              rows={7}
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              disabled={isInvalid}
              disableElevation
            >
              Submit
              {isloading && (
                <CircularProgress size={30} className={classes.progress} />
              )}
            </Button>
            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              style={{ top: 70 }}
              open={open}
              autoHideDuration={4000}
              onClose={handleClose}
            >
              {message.message ? (
                <Alert
                  onClose={handleClose}
                  severity='success'
                  className={classes.successAlert}
                >
                  {message.message}
                </Alert>
              ) : (
                <Alert onClose={handleClose} severity='error'>
                  {errors.error}
                </Alert>
              )}
            </Snackbar>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default SignUp

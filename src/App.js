import React, { Suspense } from "react"
import axios from "axios"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

// components
import Navbar from "./components/Navbar"

// utils
import MainTheme from "./utils/MainTheme"

// pages
import Github from "./pages/Github"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"

// MUI
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles/"
import CssBaseline from "@material-ui/core/CssBaseline"
import CircularProgress from "@material-ui/core/CircularProgress"

// Lazy Loading
const Home = React.lazy(() => import("./pages/Home"))

axios.defaults.baseURL = `https://us-central1-simple-contact-form-96bcb.cloudfunctions.net/api`

const App = () => {
  const theme = createMuiTheme(MainTheme)

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className='App'>
        <Suspense fallback={<CircularProgress size={2} />}>
          <Router>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/github' component={Github} />
                <Route exact path='/portfolio' component={Portfolio} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/' component={Home} />
              </Switch>
            </div>
          </Router>
        </Suspense>
      </div>
    </MuiThemeProvider>
  )
}

export default App

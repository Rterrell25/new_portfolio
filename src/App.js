import React, { useContext, useEffect, useCallback } from "react"
import axios from "axios"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

// components
import Navbar from "./components/Navbar"

// contexts
import { GithubContext } from "./context/GithubContext"

// utils
import MainTheme from "./utils/MainTheme"

// pages
import Github from "./pages/Github"
import Portfolio from "./pages/Portfolio"
import Home from "./pages/Home"

// MUI
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles/"
import CssBaseline from "@material-ui/core/CssBaseline"

const App = () => {
  const { setData } = useContext(GithubContext)
  const theme = createMuiTheme(MainTheme)

  const fetchGit = useCallback(async () => {
    return axios
      .get(`https://api.github.com/users/rterrell25/repos?`)
      .then((res) => {
        setData(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }, [setData])

  useEffect(() => {
    fetchGit()
  }, [fetchGit])

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className='App'>
        <Router>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/github' component={Github} />
              <Route exact path='/portfolio' component={Portfolio} />
              <Route exact path='/' component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
  )
}

export default App

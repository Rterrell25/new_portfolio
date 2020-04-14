import React, { useContext, useEffect, useCallback } from "react"
import axios from "axios"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

import Navbar from "./components/Navbar"
import { GithubContext } from "./context/GithubContext"

// Route Imports
import Github from "./pages/Github"

const App = () => {
  const { setData } = useContext(GithubContext)

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
    <div className='App'>
      <Router>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/github' component={Github} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App

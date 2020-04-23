import React, { useState, useContext } from "react"

// components
import SelectStatus from "../components/SelectStatus"
import RepoCard from "../components/RepoCard"

// Context
import { GithubContext } from "../context/GithubContext"

// Material UI Stuff
import TextField from "@material-ui/core/TextField"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

import Container from "@material-ui/core/Container"

// context

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    display: "flex",
    marginBottom: 10,
    minHeight: 90,
  },
  form: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  content: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },

  jobField: {
    margin: 0,
    padding: 0,
  },
  grid: {
    padding: 0,
  },

  dashboardContainer: {
    marginTop: 70,
    padding: 10,
  },
  loading: {
    textAlign: "center",
  },
}))

const INITIAL_STATE = {
  language: "All",
  search: "",
}

const Profile = () => {
  const [formData, setFormData] = useState(INITIAL_STATE)
  const [updated, setUpdated] = useState(false)
  const [created, setCreated] = useState(false)
  const { data } = useContext(GithubContext)

  const handleUpdated = () => {
    setUpdated(!updated)
    data &&
      data.sort((a, b) => {
        if (updated) return a.updated_at > b.updated_at ? -1 : 1
        return a.updated_at > b.updated_at ? 1 : -1
      })
  }

  const handleCreated = () => {
    setCreated(!created)
    data &&
      data.sort((a, b) => {
        if (created) return a.created_at > b.created_at ? -1 : 1
        return a.created_at > b.created_at ? 1 : -1
      })
  }

  const handleInputChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value })
  }

  const classes = useStyles()
  return (
    <>
      <div style={{ marginTop: 85, marginBottom: 85 }}>
        <Container className={classes.dashboardContainer}>
          <Card className={classes.card} style={{ width: "100%" }}>
            <CardContent className={classes.content}>
              <div className={classes.form}>
                <Grid
                  container
                  spacing={2}
                  alignItems='center'
                  justify='space-between'
                >
                  <Grid item sm={4} xs={12} className={classes.grid}>
                    <SelectStatus
                      language={formData.language}
                      handleInputChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item sm={4} xs={12} className={classes.grid}>
                    <TextField
                      className={classes.jobField}
                      margin='normal'
                      fullWidth
                      id='search'
                      name='search'
                      label='Search by Title'
                      placeholder='Search by Title'
                      onChange={handleInputChange("search")}
                      value={formData.search}
                    />
                  </Grid>
                  <Grid item sm={2} xs={12} className={classes.grid}>
                    <Button
                      fullWidth
                      variant='contained'
                      color='primary'
                      onClick={handleUpdated}
                    >
                      Updated {updated ? "(oldest)" : "(newest)"}
                    </Button>
                  </Grid>
                  <Grid item sm={2} xs={12} className={classes.grid}>
                    <Button
                      fullWidth
                      variant='contained'
                      color='primary'
                      onClick={handleCreated}
                    >
                      Created {created ? "(oldest)" : "(newest)"}
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </CardContent>
          </Card>
        </Container>
        {!data ? (
          <h1 className={classes.loading}>Initializing Repos...</h1>
        ) : (
          <Container style={{ padding: 10 }}>
            {!data ? (
              <div style={{ placeItems: "center" }}>Loading...</div>
            ) : (
              <Grid container alignItems='center' spacing={4}>
                {data &&
                  data
                    .filter((data) => {
                      if (formData.language === "All") return true
                      return data.language === formData.language
                    })
                    .filter((data) => {
                      if (formData.search === "") return true
                      return (data.name + data.language)
                        .toLowerCase()
                        .includes(formData.search.toLowerCase())
                    })
                    .map((user) => <RepoCard key={user.id} user={user} />)}
              </Grid>
            )}
          </Container>
        )}
      </div>
    </>
  )
}
export default Profile

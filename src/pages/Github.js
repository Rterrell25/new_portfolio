import React, { useState, useContext } from 'react'

// components
import RepoCard from '../components/RepoCard'

// Context
import { GithubContext } from '../context/GithubContext'

// Material UI Stuff
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'

// context

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },

  card: {
    display: 'flex',
    marginBottom: 10,
    minHeight: 90
  },
  buttonGroup: {
    marginBottom: 10,
    '& > *': {
      margin: theme.spacing(0.5)
    }
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },

  jobField: {
    margin: 0,
    padding: 0
  },
  grid: {
    padding: 0
  },

  dashboardContainer: {
    padding: 10
  },
  loading: {
    textAlign: 'center'
  }
}))

const INITIAL_STATE = {
  language: 'All',
  search: ''
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

  const handleInputChange = field => e => {
    console.log(field + ' ' + e.currentTarget.value)
    setFormData({ ...formData, [field]: e.currentTarget.value })
  }

  const isSmallScreen = useMediaQuery('(max-width:805px)')

  const classes = useStyles()
  return (
    <>
      <div style={{ marginTop: 150 }}>
        <Container>
          <Typography variant='h6' style={{ textAlign: 'center' }}>
            Check Out My Code...
          </Typography>
          <Typography
            variant='h3'
            style={{ textAlign: 'center', marginBottom: 20 }}
          >
            My GitHub Repos
          </Typography>
          <br />
        </Container>

        <Container maxWidth='md' className={classes.dashboardContainer}>
          <div className={classes.form}>
            <TextField
              style={{
                borderBottom: 'solid 2px',
                hover: 'none',
                color: 'black'
              }}
              className={classes.jobField}
              margin='normal'
              fullWidth
              id='search'
              name='search'
              placeholder='Search My GitHub Repos by Name or Language'
              onChange={handleInputChange('search')}
              value={formData.search}
              InputProps={{
                disableUnderline: true
              }}
            />
          </div>
          {isSmallScreen ? (
            <Container
              maxWidth='sm'
              component='main'
              className={classes.buttonGroup}
              style={{
                textAlign: 'center'
              }}
            >
              <Button
                className={classes.hover}
                disableElevation
                variant='contained'
                color='primary'
                onClick={handleInputChange('language')}
                value='All'
                style={{
                  position: 'relative',
                  borderRadius: 0,
                  boxShadow: 'none',
                  fontWeight: 'bold',
                  color: '#FFFFFF'
                }}
              >
                All
              </Button>
              <Button
                className={classes.hover}
                disableElevation
                variant='contained'
                color='primary'
                onClick={handleCreated}
                style={{
                  position: 'relative',
                  borderRadius: 0,
                  boxShadow: 'none',
                  fontWeight: 'bold',
                  color: '#FFFFFF'
                }}
              >
                Created {created ? '(oldest)' : '(newest)'}
              </Button>

              <Button
                className={classes.hover}
                disableElevation
                variant='contained'
                color='primary'
                onClick={handleInputChange('language')}
                value='JavaScript'
                style={{
                  position: 'relative',
                  borderRadius: 0,
                  boxShadow: 'none',
                  fontWeight: 'bold'
                }}
              >
                JavaScript
              </Button>
              <Button
                disableElevation
                className={classes.hover}
                variant='contained'
                color='primary'
                onClick={handleInputChange('language')}
                value='Ruby'
                style={{
                  position: 'relative',
                  borderRadius: 0,
                  boxShadow: 'none',
                  fontWeight: 'bold',
                  color: '#FFFFFF'
                }}
              >
                Ruby
              </Button>

              <Button
                className={classes.hover}
                disableElevation
                variant='contained'
                color='primary'
                onClick={handleUpdated}
                style={{
                  position: 'relative',
                  borderRadius: 0,
                  boxShadow: 'none',
                  fontWeight: 'bold',
                  color: '#FFFFFF'
                }}
              >
                Updated {updated ? '(oldest)' : '(newest)'}
              </Button>
              <Button
                className={classes.hover}
                variant='contained'
                disableElevation
                color='primary'
                onClick={handleInputChange('language')}
                value='HTML'
                style={{
                  position: 'relative',
                  borderRadius: 0,
                  boxShadow: 'none',
                  fontWeight: 'bold',
                  color: '#FFFFFF'
                }}
              >
                HTML
              </Button>

              <br />
            </Container>
          ) : (
            <Container
              component='main'
              className={classes.buttonGroup}
              style={{
                textAlign: 'center'
              }}
            >
              <Button
                className={classes.hover}
                disableElevation
                variant='contained'
                color='primary'
                onClick={handleInputChange('language')}
                value='All'
                style={{
                  position: 'relative',
                  borderRadius: 0,
                  boxShadow: 'none',
                  fontWeight: 'bold',
                  color: '#FFFFFF'
                }}
              >
                All
              </Button>
              <Button
                className={classes.hover}
                disableElevation
                variant='contained'
                color='primary'
                onClick={handleCreated}
                style={{
                  position: 'relative',
                  borderRadius: 0,
                  boxShadow: 'none',
                  fontWeight: 'bold',
                  color: '#FFFFFF'
                }}
              >
                Created {created ? '(oldest)' : '(newest)'}
              </Button>

              <Button
                className={classes.hover}
                disableElevation
                variant='contained'
                color='primary'
                onClick={handleInputChange('language')}
                value='JavaScript'
                style={{
                  position: 'relative',
                  borderRadius: 0,
                  boxShadow: 'none',
                  fontWeight: 'bold'
                }}
              >
                JavaScript
              </Button>
              <Button
                disableElevation
                className={classes.hover}
                variant='contained'
                color='primary'
                onClick={handleInputChange('language')}
                value='Ruby'
                style={{
                  position: 'relative',
                  borderRadius: 0,
                  boxShadow: 'none',
                  fontWeight: 'bold',
                  color: '#FFFFFF'
                }}
              >
                Ruby
              </Button>

              <Button
                className={classes.hover}
                disableElevation
                variant='contained'
                color='primary'
                onClick={handleUpdated}
                style={{
                  position: 'relative',
                  borderRadius: 0,
                  boxShadow: 'none',
                  fontWeight: 'bold',
                  color: '#FFFFFF'
                }}
              >
                Updated {updated ? '(oldest)' : '(newest)'}
              </Button>
              <Button
                className={classes.hover}
                variant='contained'
                disableElevation
                color='primary'
                onClick={handleInputChange('language')}
                value='HTML'
                style={{
                  position: 'relative',
                  borderRadius: 0,
                  boxShadow: 'none',
                  fontWeight: 'bold',
                  color: '#FFFFFF'
                }}
              >
                HTML
              </Button>

              <br />
            </Container>
          )}
        </Container>
        {!data ? (
          <h1 className={classes.loading}>Initializing Repos...</h1>
        ) : (
          <Container style={{ padding: 10 }}>
            {!data ? (
              <div style={{ placeItems: 'center' }}>Loading...</div>
            ) : (
              <Grid container alignItems='center' spacing={4}>
                {data &&
                  data
                    .filter(data => {
                      if (formData.language === 'All') return true
                      return data.language === formData.language
                    })
                    .filter(data => {
                      if (formData.search === '') return true
                      return (data.name + data.language)
                        .toLowerCase()
                        .includes(formData.search.toLowerCase())
                    })
                    .map(user => <RepoCard key={user.id} user={user} />)}
              </Grid>
            )}
          </Container>
        )}
      </div>
    </>
  )
}
export default Profile

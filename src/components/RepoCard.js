import React from 'react'
import moment from 'moment'

// MUI stuff
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  card: {
    minHeight: 260
  },

  cardContent: {
    flexGrow: 1
  }
}))

const RepoCard = ({ user }) => {
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={6} md={4}>
      <a href={user.html_url} rel='noopener noreferrer' target='_blank'>
        <Card className={classes.card}>
          <CardContent style={{ textAlign: 'center', marginTop: '20px' }}>
            <Typography variant='h5' component='h2'>
              {user.name}
            </Typography>
            <br />
            <Typography variant='h5' component='h2'>
              {user.language}
            </Typography>
            <br />
            <Typography variant='body1'>
              Updated: {moment(user.updated_at).startOf('day').fromNow()}
            </Typography>
            <Typography variant='body1'>
              Created: {moment(user.created_at).startOf('day').fromNow()}
            </Typography>
          </CardContent>
        </Card>
      </a>
    </Grid>
  )
}

export default RepoCard

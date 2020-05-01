import React from "react"
import { Link } from "react-router-dom"

// Material UI
import Button from "@material-ui/core/Button"

import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"

const Header = () => {
  return (
    <Container maxWidth='lg' style={{ padding: 10 }}>
      <Grid container justify='space-between' alignItems='center'>
        <Grid item xs={2}>
          <Button color='inherit' component={Link} to='/'>
            Home
          </Button>
        </Grid>
        <Grid item xs={10} container justify='flex-end'>
          <div>
            <>
              <Button color='inherit' component={Link} to='/github'>
                Github
              </Button>
              <Button color='inherit' component={Link} to='/portfolio'>
                Portfolio
              </Button>
              <Button color='inherit' component={Link} to='/contact'>
                Contact
              </Button>
            </>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}
export default Header

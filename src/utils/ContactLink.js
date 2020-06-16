import React from 'react'
import { NavLink } from 'react-router-dom'

// Material UI
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

const ContactLink = () => {
  return (
    <>
      <Typography variant='h4' style={{ textAlign: 'center' }}>
        <Link
          component={NavLink}
          to='/contact'
          style={{ color: '#FFFFFF', textDecoration: 'none' }}
        >
          Interested?
        </Link>
      </Typography>
      <Typography variant='body2' style={{ textAlign: 'center' }}>
        <Link
          component={NavLink}
          to='/contact'
          style={{ color: '#FFFFFF', textDecoration: 'none' }}
        >
          Contact Me
        </Link>
      </Typography>
    </>
  )
}

export default ContactLink

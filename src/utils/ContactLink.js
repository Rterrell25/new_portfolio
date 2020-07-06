import React from 'react'
import { Link } from 'react-scroll'

// Material UI
import Typography from '@material-ui/core/Typography'

const ContactLink = () => {
  return (
    <>
      <Typography
        variant='h4'
        style={{ textAlign: 'center', cursor: 'pointer' }}
      >
        <Link to='form' smooth={true} offset={50} duration={1500}>
          Interested?
        </Link>
      </Typography>
      <Typography
        variant='body2'
        style={{ textAlign: 'center', cursor: 'pointer' }}
      >
        <Link to='form' smooth={true} offset={50} duration={1500}>
          Contact Me
        </Link>
      </Typography>
    </>
  )
}

export default ContactLink

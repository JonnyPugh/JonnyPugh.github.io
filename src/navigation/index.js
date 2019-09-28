import React from 'react'
import { styled } from '@material-ui/styles'
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Nav = styled(AppBar)({
  marginBottom: 32,
})

const NavHeader = styled(Typography)({
  flexGrow: 1,
})

const NavButton = ({ label, href, icon }) => (
  <IconButton
    aria-label={label}
    color='inherit'
    href={href}
    target='_blank'
    rel='noopener noreferrer'
  >
    <Badge color='secondary'>
      <FontAwesomeIcon icon={icon} />
    </Badge>
  </IconButton>
)

export default () => (
  <Nav position='static'>
    <Toolbar>
      <NavHeader variant='h6'>Jonathan Pugh</NavHeader>
      <NavButton
        label='GitHub'
        href='https://github.com/jonnypugh'
        icon={faGithub}
      />
      <NavButton
        label='LinkedIn'
        href='https://www.linkedin.com/in/jonnypugh'
        icon={faLinkedin}
      />
    </Toolbar>
  </Nav>
)

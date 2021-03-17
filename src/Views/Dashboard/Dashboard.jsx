import { useState } from 'react'
import styled from 'styled-components'
import { useTheme } from '@material-ui/core/styles'

import BlurLinear from '@material-ui/icons/BlurLinear'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import MailIcon from '@material-ui/icons/Mail'

import useStyles from './Dashboard-jss'

const drawerWidth = 240
const wrapperPadding = 20

const Wrapper = styled.div`
  display: flex;
  height: 2000px;
  padding: ${wrapperPadding}px;
  background-color: #272727;
`

function Dashboard() {
  const theme = useTheme()
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <Wrapper>
      <nav className={classes.drawer} aria-label='mailbox folders'>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            <DrawerBody />
          </Drawer>
        </Hidden>
        <Hidden smUp implementation='css'>
          <Drawer
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <DrawerBody />
          </Drawer>
        </Hidden>
      </nav>
    </Wrapper>
  )
}

const DrawerWrapper = styled.div`
  width: ${drawerWidth}px;
  background-color: #ff9ea8;
  height: calc(100vh - ${wrapperPadding * 2}px);
  border-radius: 30px;
  padding: 25px 15px;
`

function DrawerBody() {
  const classes = useStyles()
  const [childOpen, setChildOpen] = useState(false)

  return (
    <DrawerWrapper>
      <DrawerContent classes={classes} childOpen={childOpen} setChildOpen={setChildOpen} />
    </DrawerWrapper>
  )
}

const DrawerContent = ({ classes, setChildOpen, childOpen }) => {
  const toggleChild = () => {
    setChildOpen((old) => !old)
  }
  return (
    <div>
      <div className={classes.logoWrapper}>
        <img
          className={classes.imageLogo}
          src='https://elwiki.net/wiki/images/b/b7/VarnimyrTitle1.png'
          alt='purifier'
        />
      </div>
      <Typography variant='h3' className={classes.logoTitle}>
        Rekindled Fire
      </Typography>
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <ListItem button onClick={toggleChild}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Inbox' />
        {childOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={childOpen} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <BlurLinear />
            </ListItemIcon>
            <ListItemText primary='Starred' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <BlurLinear />
            </ListItemIcon>
            <ListItemText primary='Starred' />
          </ListItem>
        </List>
      </Collapse>
    </div>
  )
}

export default Dashboard

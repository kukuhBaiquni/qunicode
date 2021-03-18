import { useState } from 'react'

import Typography from '@material-ui/core/Typography'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import BlurLinear from '@material-ui/icons/BlurLinear'
import Collapse from '@material-ui/core/Collapse'
import { withStyles } from '@material-ui/core/styles'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import useStyles from './MenuList-jss'

const AppTitle = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    fontSize: 24,
    marginTop: 10,
    fontWeight: 700,
  },
}))(Typography)

function MenuList() {
  const classes = useStyles()
  const [childOpen, setChildOpen] = useState(false)

  const toggleChild = () => {
    setChildOpen((old) => !old)
  }

  return (
    <div className={classes.drawerBody}>
      <div className={classes.logoWrapper}>
        <img
          className={classes.imageLogo}
          src='https://elwiki.net/wiki/images/8/8c/IsThisMe.png'
          alt='purifier'
        />
        <AppTitle variant='h3' className={classes.logoTitle}>
          TWIN DREAMS
        </AppTitle>
      </div>
      <List>
        {['Dashboard', 'Media', 'Campaigns'].map((text, index) => (
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

export default MenuList

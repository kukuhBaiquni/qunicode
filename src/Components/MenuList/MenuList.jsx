import Typography from '@material-ui/core/Typography'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { withStyles } from '@material-ui/core/styles'
import useStyles from './MenuList-jss'

const AppTitle = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    fontSize: 24,
    marginTop: 10,
    fontWeight: 700,
  },
}))(Typography)

const CustomList = withStyles((theme) => ({
  root: {
  },
}))(List)

const CustomListItem = withStyles((theme) => ({
  root: {
    padding: '12px 16px',
    borderRadius: 5,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
}))(ListItem)

const CustomListItemText = withStyles((theme) => ({
  root: {
    fontSize: 16,
    fontWeight: 600,
    transition: 'margin-left .25s',
  },
}))(ListItemText)

function MenuList() {
  const classes = useStyles()
  return (
    <div className={classes.drawerBody}>
      <div className={classes.logoWrapper}>
        <img
          className={classes.imageLogo}
          src='https://elwiki.net/wiki/images/a/a1/MasterRoadTitle6.png'
          alt='purifier'
        />
        <AppTitle variant='h3' className={classes.logoTitle}>
          ALTER GLOW
        </AppTitle>
      </div>
      <CustomList>
        {['Dashboard', 'Media', 'Campaigns'].map((text, index) => (
          <CustomListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <CustomListItemText disableTypography primary={text} />
          </CustomListItem>
        ))}
      </CustomList>
    </div>
  )
}

export default MenuList

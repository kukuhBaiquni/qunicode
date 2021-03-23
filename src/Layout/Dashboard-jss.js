import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 280

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 3000,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    background: theme.palette.secondary.light,
    boxShadow: 'none',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  // drawerBody: {
  //   padding: 10,
  //   backgroundColor: 'transparent',
  // },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.secondary.superLight,
    // background: 'linear-gradient(45deg, rgba(194,217,241,1) 0%, rgba(255,158,168,1) 100%)',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
}))

export default useStyles

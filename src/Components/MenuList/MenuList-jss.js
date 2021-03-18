import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  // drawerBody: {
  //   padding: 10,
  //   backgroundColor: 'transparent',
  // },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  logoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 15,
    backgroundColor: theme.palette.white,
    padding: '25px 15px',
  },
  imageLogo: {
    // Set height & width image here
  },
  logoTitle: {
    textAlign: 'center',
  },
}))

export default useStyles

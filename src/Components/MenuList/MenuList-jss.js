import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  drawerBody: {
    padding: 10,
    backgroundColor: 'transparent',
  },
  logoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 15,
    backgroundColor: '#3e3e3e',
    padding: '25px 15px',
    borderRadius: 5,
  },
  imageLogo: {
    // Set height & width image here
  },
  logoTitle: {
    textAlign: 'center',
  },
}))

export default useStyles

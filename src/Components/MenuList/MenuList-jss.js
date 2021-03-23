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
    borderRadius: 5,
  },
  imageLogo: {
    // Set height & width image here
    width: '100%',
    height: 150,
    objectFit: 'cover',
    borderRadius: 5,
  },
  logoTitle: {
    textAlign: 'center',
  },
}))

export default useStyles

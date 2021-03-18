import { colors } from '@material-ui/core'

const white = '#FFFFFF'
const black = '#000000'

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: '#55769b',
    main: '#69eea7',
    light: '#bfe4f4',
    superLight: '#f1fbff',
  },
  secondary: {
    contrastText: white,
    dark: '#165581',
    main: '#165581',
    light: '#165581',
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600],
    custom: '#165581',
    required: 'red',
  },
  link: colors.blue[800],
  icon: black,
  background: {
    default: white, // '#F4F6F8',
    paper: white,
  },
  blue: '#165581',
  divider: colors.grey[200],
}

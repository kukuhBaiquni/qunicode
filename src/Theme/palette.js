import { colors } from '@material-ui/core'

const white = '#FFFFFF'
const black = '#000000'

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: '#49A473',
    main: '#69eea7',
    light: '#a0ffcd',
    superLight: '#f1fbff',
  },
  secondary: {
    contrastText: white,
    dark: '#6200ce',
    main: '#7c15dd',
    light: '#c197f2',
    superLight: '#f1e6fc',
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: '#4A4A4A',
    secondary: colors.blueGrey[600],
    link: colors.blue[600],
    custom: colors.grey[900],
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

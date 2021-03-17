import { Provider } from 'react-redux'
import Dashboard from 'Layout/Dashboard'
import { ThemeProvider } from '@material-ui/styles'
import theme from 'Theme'
import store from './Lib/Redux/store'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </Provider>
  )
}

export default App

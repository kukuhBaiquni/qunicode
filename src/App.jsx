import { Provider } from 'react-redux'
import Dashboard from 'Layout/Dashboard'
import store from './Lib/Redux/store'

function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  )
}

export default App

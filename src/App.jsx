import { Provider } from 'react-redux'
import Dashboard from 'Pages/Dashboard'
import store from './Lib/Redux/store'

function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  )
}

export default App

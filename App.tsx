import React from 'react'
import StackNavigation from './src/StackNavigation'
import { Provider } from 'react-redux'
import store from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  )
}

export default App;
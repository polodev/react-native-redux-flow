import store from 'todoStore';
import App from './App'

// Pass the store into the app container
const AppWithStore = () => <App store={store} />

AppRegistry.registerComponent('App', () => AppWithStore)
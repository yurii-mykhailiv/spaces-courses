import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store/Store';
import Router from './router/router'; 


ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
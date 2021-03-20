<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './store/store';
import './assets/fonts/PlayfairDisplay/PlayfairDisplay-Bold.ttf';
import './assets/css/main.css';
import './assets/vendor/bootstrap/css/bootstrap.min.scss';
import './assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './assets/fonts/iconic/css/material-design-iconic-font.min.css';
import './assets/fonts/linearicons-v1.0.0/icon-font.min.css';
import './assets/css/util.css';
import './assets/vendor/animate/animate.css';
import './assets/vendor/css-hamburgers/hamburgers.min.css';
//import './assets/vendor/animsition/css/animsition.min.css';
import './assets/vendor/select2/select2.min.css';
import './assets/vendor/daterangepicker/daterangepicker.css';
import './assets/vendor/slick/slick.css';


ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
    <App />
  </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> 21abcfe527747fa81344cad542002a2e90b1fd56

import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import configureStore, { history } from "./stores/index";

import App from "./App";



const store = configureStore();
window.dispatch = store.dispatch;


if (document.getElementById('backoffice')) {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,

    document.getElementById("backoffice")
  );
}

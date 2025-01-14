import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';
import { GlobalStyles } from 'GlobalStyles';
// import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider> */}
    <Global styles={GlobalStyles} />
    <BrowserRouter basename="/kitchenList">
      <App />
    </BrowserRouter>

    {/* </Provider> */}
  </React.StrictMode>
);

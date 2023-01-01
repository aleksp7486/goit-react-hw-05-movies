import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { IconContext } from 'react-icons';
import { theme } from './theme';
import '@fontsource/roboto';
import { App } from 'components/App';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer />
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <ThemeProvider theme={theme}>
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
          <App />
        </IconContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

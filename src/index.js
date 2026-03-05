import React from 'react';
import ReactDOM from 'react-dom/client';

//Importamos la libreria de React-router
import { BrowserRouter } from 'react-router-dom';

// Importamos la libreria de StyledComponents
import { ThemeProvider } from 'styled-components';
import App from './App';
import { Theme } from './assets/theme/theme';
import { GlobalStyle } from './assets/theme/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
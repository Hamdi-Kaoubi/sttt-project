import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ChakraProvider>
  <BrowserRouter>
  <LanguageProvider>
  <App />
  </LanguageProvider>
  </BrowserRouter>
  </ChakraProvider>
  </React.StrictMode>
);


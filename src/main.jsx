import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import App from './App'; // Your App component
import './index.css'; // Your CSS file

const rootElement = document.getElementById('root');

// Create the root and render your app inside BrowserRouter
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* Wrap the app in BrowserRouter */}
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

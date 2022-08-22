import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import ScrollableFloatingCard from './components/ScrollableFloatingCard';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ScrollableFloatingCard />
    <App />
  </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import './assets/Styles/index.css';

ReactDOM.render(
  <React.StrictMode>
		<AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

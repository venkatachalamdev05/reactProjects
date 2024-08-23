import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Import Tailwind CSS
import { Provider } from 'react-redux';
import { foodDelivery } from './redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={foodDelivery}>
        <App />
    </Provider>

);
reportWebVitals();

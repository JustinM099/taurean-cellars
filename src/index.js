import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "@fontsource/economica";


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './pages/About';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter as Router,
  useLocation
} from "react-router-dom";
import { AppBlocking, BluetoothSearchingOutlined } from '@mui/icons-material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename="/">
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

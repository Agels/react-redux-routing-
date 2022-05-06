import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Home from './components/content/home/home';
import reportWebVitals from './reportWebVitals';
import Sidebar from './components/sidebar/sidebar';
import User from './components/content/user/user.jsx';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from './components/content/products/products';
import EditProducts from './components/content/products/editProducts';
import DetailProducts from './components/content/products/detailProducts';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Sidebar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Users" element={<User />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/Products/editProducts/:id" element={<EditProducts />} />
      <Route path ="Products/detailProducts/:id" element={< DetailProducts />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

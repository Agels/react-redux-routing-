import Home from "./components/content/home/home";
import Sidebar from "./components/sidebar/sidebar";
import User from "./components/content/user/user.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/content/products/products";
import EditProducts from "./components/content/products/editProducts";
import DetailProducts from "./components/content/products/detailProducts";


function Routing() {
  return (
    
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Users" element={<User />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Products/editProducts/:id" element={<EditProducts />} />
          <Route
            path="Products/detailProducts/:id"
            element={<DetailProducts />}
          />
        </Routes>
      </BrowserRouter>

  );
}

export default Routing;

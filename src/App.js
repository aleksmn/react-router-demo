import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
// import ProductDetails from "./components/productDetails";
// import NotFound from "./components/notFound";
import "./App.css";

const App = () => {
  return (
    <div className="content">

      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<Products/>} />
          <Route path="/posts" element={<Posts/>} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/" element={< Home />} />
        </Routes>
      </BrowserRouter>


    </div>


  );
}

export default App;


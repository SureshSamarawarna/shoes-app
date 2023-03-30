import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ProductCart from "./components/ProductCart";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route index element={<ProductList />}></Route>
      <Route path="/" element={<ProductList />}></Route>
      <Route path="/productList" element={<ProductList />}></Route>
      <Route path="/productDetails" element={<ProductDetails/>}></Route>
      <Route path="/productCart" element={<ProductCart/>}></Route>
    </Routes>
  </BrowserRouter>
    
  </>
  );
}

export default App;

import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Dashboard from "./pages/Admin/Dashboard";
import ObrasAdmin from "./pages/Admin/ObrasAdmin";
import OrdenesAdmin from "./pages/Admin/OrdenesAdmin";
import Sidebar from "./components/Admin/TempSidebar";
import Profile from "./components/Profile";
import "./App.css";
import { CartProvider } from "./context/CartContext";
import AuthProvider from "./context/AuthContext";
import Terms from './pages/Terms';

const PrivateRoute = ({ children, role }) => {
  const { user } = useContext(AuthContext);
  if (!user || user?.rol !== role) {
    return <Navigate to="/login" />;
  }
  return children;
};

const App = () => (
  <AuthProvider>
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Rutas principales */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/registro" element={<RegisterForm />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          
          {/* Ruta de Condiciones Generales */}
          <Route path="/terms" element={<Terms />} />

          {/* Rutas de administrador */}
          <Route
            path="/admin/*"
            element={
              <PrivateRoute role="administrador">
                <div className="admin-layout">
                  <Sidebar />
                  <div className="admin-content">
                    <Routes>
                      <Route path="dashboard" element={<Dashboard />} />
                      <Route path="obras" element={<ObrasAdmin />} />
                      <Route path="ordenes" element={<OrdenesAdmin />} />
                    </Routes>
                  </div>
                </div>
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  </AuthProvider>
);

export default App;
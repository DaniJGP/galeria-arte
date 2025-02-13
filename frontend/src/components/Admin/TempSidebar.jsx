import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Admin Panel</h2>
      <nav>
        <ul>
          <li>
            <Link to="/admin/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/obras">Obras de Arte</Link>
          </li>
          <li>
            <Link to="/admin/ordenes">Órdenes de Compra</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

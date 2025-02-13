import React from "react";
import Sidebar from "../../components/Admin/TempSidebar";
import TablaObras from "../../components/Admin/TablaObras";

const ObrasAdmin = () => {
  return (
    <div className="admin-page">
      <Sidebar />
      <main className="content">
        <h1>Gestión de Obras de Arte</h1>
        <TablaObras />
      </main>
    </div>
  );
};

export default ObrasAdmin;

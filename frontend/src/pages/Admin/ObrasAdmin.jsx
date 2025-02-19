import React, { useEffect, useState } from "react";
import fetchWithAuth from "../../helpers/fetchHelper";
import "./ObraForm.css";

const ObrasAdmin = () => {
  const [obras, setObras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [obraEdit, setObraEdit] = useState(null);
  const [editFormData, setEditFormData] = useState({
    nombre: "",
    autor: "",
    precio: "",
    img_url: "", 
  });

  useEffect(() => {
    fetchObras();
  }, []);

  const fetchObras = async () => {
    try {
      const data = await fetchWithAuth(`${import.meta.env.VITE_API_URL}/api/artworks`);
      setObras(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Estás seguro de eliminar esta obra?")) return;
    try {
      await fetchWithAuth(`${import.meta.env.VITE_API_URL}/admin/artworks/${id}`, {
        method: "DELETE",
      });
      setObras(obras.filter((obra) => obra.id !== id));
    } catch (err) {
      alert("Error eliminando obra");
    }
  };

  const handleEdit = (obra) => {
    setObraEdit(obra);
    setEditFormData({
      nombre: obra.nombre,
      autor: obra.autor,
      precio: obra.precio,
      img_url: obra.img_url, // ✅ Cargar la imagen al editar
    });

    document.getElementById("editForm").scrollIntoView({ behavior: "smooth" });
  };

  const handleEditChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const handleSave = async (newObra) => {
    console.log("Datos enviados al backend:", newObra);

    if (!newObra.nombre || !newObra.autor || !newObra.precio || !newObra.img_url) {
      alert("Todos los campos son obligatorios, incluyendo la URL de la imagen.");
      return;
    }

    newObra.precio = parseFloat(newObra.precio);

    try {
      const response = await fetchWithAuth(
        obraEdit
          ? `${import.meta.env.VITE_API_URL}/admin/artworks/${obraEdit.id}`
          : `${import.meta.env.VITE_API_URL}/admin/artworks`,
        {
          method: obraEdit ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newObra),
        }
      );

      console.log("Respuesta del servidor:", response);
      fetchObras();
      setObraEdit(null);
    } catch (err) {
      console.error("Error en handleSave:", err);
      alert("Error al guardar la obra.");
    }
  };

  return (
    <div className="admin-container">
      <h2>Gestión de Obras</h2>

      <div className="form-container">
        {/* Formulario de agregar obra */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave({
              nombre: e.target.nombre.value,
              autor: e.target.autor.value,
              precio: e.target.precio.value,
              img_url: e.target.img_url.value, // ✅ Agregar img_url al guardar
            });
            e.target.reset();
          }}
          className="obra-form add-form"
        >
          <h3>Agregar Obra</h3>
          <input type="text" name="nombre" placeholder="Nombre" required />
          <input type="text" name="autor" placeholder="Autor" required />
          <input type="number" name="precio" placeholder="Precio" required />
          <input type="text" name="img_url" placeholder="URL de la Imagen" required /> {/* ✅ Agregado campo */}
          <button type="submit">Agregar</button>
        </form>

        {/* Formulario de edición de obra */}
        {obraEdit && (
          <form
            id="editForm"
            onSubmit={(e) => {
              e.preventDefault();
              handleSave(editFormData);
            }}
            className="obra-form edit-form"
          >
            <h3>Editar Obra</h3>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={editFormData.nombre}
              onChange={handleEditChange}
              required
            />
            <input
              type="text"
              name="autor"
              placeholder="Autor"
              value={editFormData.autor}
              onChange={handleEditChange}
              required
            />
            <input
              type="number"
              name="precio"
              placeholder="Precio"
              value={editFormData.precio}
              onChange={handleEditChange}
              required
            />
            <input
              type="text"
              name="img_url"
              placeholder="URL de la Imagen"
              value={editFormData.img_url}
              onChange={handleEditChange}
              required
            />
            {editFormData.img_url && <img src={editFormData.img_url} alt="Vista previa" className="preview-img" />}
            <button type="submit">Guardar Cambios</button>
          </form>
        )}
      </div>

      {loading ? (
        <p>Cargando obras...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <table className="obras-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Autor</th>
              <th>Precio</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {obras.map((obra) => (
              <tr key={obra.id}>
                <td>{obra.nombre}</td>
                <td>{obra.autor}</td>
                <td>${obra.precio}</td>
                <td>
                  <img src={obra.img_url} alt="Obra" className="obra-img" /> {/* ✅ Mostrar imagen en la tabla */}
                </td>
                <td>
                  <button onClick={() => handleEdit(obra)}>Editar</button>
                  <button onClick={() => handleDelete(obra.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ObrasAdmin;

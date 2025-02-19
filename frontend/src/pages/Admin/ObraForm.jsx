import React, { useState, useEffect, useRef } from "react";
import fetchWithAuth from "../../helpers/fetchHelper";
import "./ObraForm.css"; // Asegúrate de agregar el CSS adecuado

const ObraForm = ({ obraEdit, setObraEdit, fetchObras }) => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    nombre: "",
    autor: "",
    precio: "",
    img_url: "", // Agregamos img_url
  });

  useEffect(() => {
    if (obraEdit) {
      setFormData({
        nombre: obraEdit.nombre || "",
        autor: obraEdit.autor || "",
        precio: obraEdit.precio || "",
        img_url: obraEdit.img_url || "", // Cargar img_url si se edita
      });
    } else {
      setFormData({ nombre: "", autor: "", precio: "", img_url: "" });
    }
  }, [obraEdit]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.autor || !formData.precio || !formData.img_url) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    formData.precio = parseFloat(formData.precio); // Asegurar que precio es número

    try {
      const response = await fetchWithAuth(
        obraEdit
          ? `${import.meta.env.VITE_API_URL}/admin/artworks/${obraEdit.id}`
          : `${import.meta.env.VITE_API_URL}/admin/artworks`,
        {
          method: obraEdit ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      console.log("Respuesta del servidor:", response);
      fetchObras();
      setObraEdit(null);
      setFormData({ nombre: "", autor: "", precio: "", img_url: "" }); // Limpiar el formulario
    } catch (err) {
      console.error("Error en handleSubmit:", err);
      alert("Error al guardar la obra.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`obra-form ${obraEdit ? "edit-form" : "add-form"}`} ref={formRef}>
      <h3>{obraEdit ? "Editar Obra" : "Agregar Obra"}</h3>
      
      <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
      <input type="text" name="autor" placeholder="Autor" value={formData.autor} onChange={handleChange} required />
      <input type="number" name="precio" placeholder="Precio" value={formData.precio} onChange={handleChange} required />
      
      <input
        type="text"
        name="img_url"
        placeholder="URL de la Imagen"
        value={formData.img_url} // ✅ Se usa formData.img_url
        onChange={handleChange}  // ✅ Se usa handleChange
        required
      />
      
      {/* Vista previa de la imagen */}
      {formData.img_url && <img src={formData.img_url} alt="Vista previa" className="preview-img" />}

      <button type="submit">{obraEdit ? "Guardar Cambios" : "Agregar"}</button>
    </form>
  );
};

export default ObraForm;

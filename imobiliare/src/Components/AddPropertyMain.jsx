import React, { useState, useEffect } from "react";
import "./AddPropertyMain.css";

export default function AddPropertyMain() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    price: "",
    adress: "",
    city: "",
    floor: "",
    compartimentalization: "",
    rooms: "",
    bathrooms: "",
    year: "",
    area: "",
    surface: "",
    suitable_for: "",
    facilities: [{ name: "", distance: "", unit: "m" }],
    images: [],
    agent_asigned: "",
  });
  const handleFacilityChange = (index, field, value) => {
    const updatedFacilities = [...formData.facilities];
    updatedFacilities[index][field] = value;
    setFormData((prev) => ({ ...prev, facilities: updatedFacilities }));
  };

  const addFacility = () => {
    setFormData((prev) => ({
      ...prev,
      facilities: [...prev.facilities, { name: "", distance: "", unit: "m" }],
    }));
  };

  const removeFacility = (index) => {
    const updated = [...formData.facilities];
    updated.splice(index, 1);
    setFormData((prev) => ({ ...prev, facilities: updated }));
  };

  useEffect(() => {
    const email = localStorage.getItem("agent_email");
    setFormData((prev) => ({
      ...prev,
      agent_asigned: email || "",
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      images: files,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formular trimis! (integrare urmează)");
  };

  return (
    <div className="add-property-container">
      <h2>Publică o nouă proprietate</h2>
      <form className="property-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Titlu</label>
          <input
            type="text"
            name="title"
            placeholder="Ex: Apartament modern cu 3 camere"
            onChange={handleChange}
            value={formData.title}
          />
        </div>
        <div className="form-group">
          <label>Imagini</label>
          <input
            type="file"
            name="images"
            multiple
            onChange={handleImageChange}
          />
        </div>

        <div className="form-group">
          <label>Descriere</label>
          <textarea
            name="description"
            placeholder="Detalii complete despre proprietate..."
            onChange={handleChange}
            value={formData.description}
          />
        </div>

        <div className="form-group">
          <label>Tip proprietate</label>
          <select name="type" onChange={handleChange} value={formData.type}>
            <option value="">Alege...</option>
            <option value="apartament">Apartament</option>
            <option value="casă">Casă</option>
            <option value="garsonieră">Garsonieră</option>
          </select>
        </div>

        <div className="form-group">
          <label>Preț (€)</label>
          <input
            type="number"
            name="price"
            onChange={handleChange}
            value={formData.price}
          />
        </div>

        <div className="property-section">
          <h3>Prezentare generală</h3>
          <div className="form-group">
            <label>Camere</label>
            <input
              type="number"
              name="rooms"
              onChange={handleChange}
              value={formData.rooms}
            />
          </div>
          <div className="form-group">
            <label>Băi</label>
            <input
              type="number"
              name="bathrooms"
              onChange={handleChange}
              value={formData.bathrooms}
            />
          </div>

          <div className="form-group">
            <label>Etaj</label>
            <input
              type="text"
              name="floor"
              onChange={handleChange}
              value={formData.floor}
            />
          </div>

          <div className="form-group">
            <label>Compartimentare</label>
            <input
              type="text"
              name="compartimentalization"
              onChange={handleChange}
              value={formData.compartimentalization}
            />
          </div>

          <div className="form-group">
            <label>An construcție</label>
            <input
              type="number"
              name="year"
              onChange={handleChange}
              value={formData.year}
            />
          </div>

          <div className="form-group">
            <label>Suprafață utilă</label>
            <input
              type="text"
              name="surface"
              onChange={handleChange}
              value={formData.surface}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Potrivit pentru</label>
          <input
            type="text"
            name="suitable_for"
            placeholder="Ex: familie, student etc."
            onChange={handleChange}
            value={formData.suitable_for}
          />
        </div>

        <div className="property-section">
          <h3>Facilități apropiate</h3>
          {formData.facilities.map((item, index) => (
            <div className="facilities-grid" key={index}>
              <div className="form-group">
                <label>Denumire</label>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) =>
                    handleFacilityChange(index, "name", e.target.value)
                  }
                />
              </div>
              <div className="form-group">
                <label>Distanță</label>
                <input
                  type="number"
                  value={item.distance}
                  onChange={(e) =>
                    handleFacilityChange(index, "distance", e.target.value)
                  }
                />
              </div>
              <div className="form-group">
                <label>Unitate</label>
                <select
                  value={item.unit}
                  onChange={(e) =>
                    handleFacilityChange(index, "unit", e.target.value)
                  }
                >
                  <option value="m">metri</option>
                  <option value="km">km</option>
                </select>
              </div>
              <button
                type="button"
                className="remove-btn"
                onClick={() => removeFacility(index)}
              >
                –
              </button>
            </div>
          ))}

          <button type="button" className="add-btn" onClick={addFacility}>
            + Adaugă altă facilitate
          </button>
        </div>

        <div className="form-group">
          <label>Agent asignat</label>
          <input
            type="text"
            name="agent_asigned"
            value={formData.agent_asigned}
            disabled
          />
        </div>

        <button type="submit">Publică anunț</button>
      </form>
    </div>
  );
}

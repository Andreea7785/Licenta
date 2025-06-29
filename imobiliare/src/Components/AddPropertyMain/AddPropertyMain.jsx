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
    agent_asigned: JSON.parse(localStorage.getItem("user")).email,
  });

  const [submitMessage, setSubmitMessage] = useState("");
  const [formValid, setFormValid] = useState(false);

  const isFormComplete = (data) => {
    return (
      data.title &&
      data.description &&
      data.type &&
      data.price &&
      data.adress &&
      data.rooms &&
      data.bathrooms &&
      data.floor &&
      data.compartimentalization &&
      data.year &&
      data.surface &&
      data.suitable_for &&
      data.area &&
      data.images.length === 3
    );
  };

  useEffect(() => {
    setFormValid(isFormComplete(formData));
  }, [formData]);
  const uploadImageToServer = async (image) => {
    const formData = new FormData();
    formData.append("file", image);
    const response = await fetch("http://localhost:8080/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Eroare la încărcarea imaginii");
    }

    return await response.text();
  };

  const handleFacilityChange = (index, field, value) => {
    const updatedFacilities = [...formData.facilities];
    updatedFacilities[index][field] = value;
    setFormData((prev) => ({ ...prev, facilities: updatedFacilities }));
    setSubmitMessage("");
  };

  const addFacility = () => {
    setFormData((prev) => ({
      ...prev,
      facilities: [...prev.facilities, { name: "", distance: "", unit: "m" }],
    }));
    setSubmitMessage("");
  };

  const removeFacility = (index) => {
    const updated = [...formData.facilities];
    updated.splice(index, 1);
    setFormData((prev) => ({ ...prev, facilities: updated }));
    setSubmitMessage("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmitMessage("");
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = [...formData.images, ...files].slice(0, 4);
    setFormData((prev) => ({
      ...prev,
      images: newImages,
    }));
    setSubmitMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formValid) return;

    const agentEmail =
      localStorage.getItem("agent_email") || formData.agent_asigned;

    try {
      // 🔄 Upload individual pentru fiecare imagine
      const uploadedImageNames = await Promise.all(
        formData.images.map((img) => uploadImageToServer(img))
      );

      const propertyToSend = {
        ...formData,
        agent_asigned: agentEmail,
        facilities: formData.facilities.map(
          (f) => `${f.name}:${f.distance}${f.unit}`
        ),
        images: uploadedImageNames,
      };

      const response = await fetch("http://localhost:8080/api/properties", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(propertyToSend),
      });

      if (response.ok) {
        setSubmitMessage("Proprietate încărcată cu succes!");
        setFormData({
          ...formData,
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
        });
      } else {
        const errorText = await response.text();
        setSubmitMessage(`Eroare la salvare în backend: ${errorText}`);
      }
    } catch (err) {
      console.error("Eroare la upload sau salvare:", err);
      setSubmitMessage("Eroare la încărcarea imaginilor.");
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...formData.images];
    updatedImages.splice(index, 1);
    setFormData((prev) => ({
      ...prev,
      images: updatedImages,
    }));
  };

  const renderMap = () => {
    const encodedAddress = encodeURIComponent(formData.adress);
    const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    return (
      <div className="map-embed-container">
        <iframe
          title="harta"
          width="100%"
          height="300"
          style={{ border: 0 }}
          src={mapUrl}
          allowFullScreen
        ></iframe>
      </div>
    );
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

        <div className="form-group-images">
          <label>
            <b>Imagini</b>
          </label>

          <div className="image-grid">
            {Array.from({ length: 3 }).map((_, index) => {
              const image = formData.images[index];
              if (image) {
                return (
                  <div key={index} className="image-preview">
                    <button
                      type="button"
                      className="remove-image-btn"
                      onClick={() => handleRemoveImage(index)}
                    >
                      ×
                    </button>
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`preview-${index}`}
                    />
                  </div>
                );
              } else {
                return (
                  <label
                    key={index}
                    className="add-image-tile"
                    style={{
                      cursor:
                        index === formData.images.length
                          ? "pointer"
                          : "default",
                    }}
                  >
                    {index === formData.images.length ? (
                      <>
                        <span>Adaugă imagini</span>
                        <input
                          type="file"
                          name="images"
                          multiple
                          accept="image/*"
                          onChange={handleImageChange}
                          style={{ display: "none" }}
                        />
                      </>
                    ) : (
                      <span>&nbsp;</span>
                    )}
                  </label>
                );
              }
            })}
          </div>
          {formData.images.length !== 3 && (
            <p className="form-note-error">
              * Trebuie să încarci exact 3 imagini!
            </p>
          )}
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
        <div className="line">
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
            <label>Potrivit pentru</label>
            <input
              type="text"
              name="suitable_for"
              placeholder="Ex: familie, student etc."
              onChange={handleChange}
              value={formData.suitable_for}
            />
          </div>

          <div className="form-group">
            <label>Zonă</label>
            <input
              type="text"
              name="area"
              onChange={handleChange}
              value={formData.area}
            />
          </div>
        </div>

        <div className="form-group">
          <h3>Alte detalii</h3>

          <div className="details-grid">
            <div className="form-group">
              <label>Agent asignat</label>
              <input
                type="text"
                name="agent_asigned"
                value={formData.agent_asigned}
                disabled
              />
            </div>

            <div className="form-group">
              <label>Preț (€)</label>
              <input
                type="number"
                name="price"
                min="0"
                onChange={handleChange}
                value={formData.price}
              />
            </div>

            <div className="form-group">
              <label>Adresă</label>
              <input
                type="text"
                name="adress"
                onChange={handleChange}
                value={formData.adress}
              />
            </div>
          </div>
          <br></br>
          {formData.adress && renderMap()}
        </div>

        <div className="form-group">
          <h3>Prezentare generală</h3>
          <div className="details-grid-presentation">
            <div className="form-group">
              <label>Camere</label>
              <input
                type="number"
                name="rooms"
                min="1"
                onChange={handleChange}
                value={formData.rooms}
              />
            </div>

            <div className="form-group">
              <label>Băi</label>
              <input
                type="number"
                name="bathrooms"
                min="1"
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
                max="2025"
                min="1900"
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
        </div>

        <div className="form-group">
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

        {!formValid && (
          <p className="form-note-error">* Toate câmpurile sunt obligatorii!</p>
        )}

        {submitMessage && <p className="submit-message">{submitMessage}</p>}

        <button type="submit" disabled={!formValid}>
          Publică anunț
        </button>
      </form>
    </div>
  );
}

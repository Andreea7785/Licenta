import { useState } from "react";
import "./MainTellUs.css";

export default function MainTellUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    requirements: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Date trimise:", formData);
    alert("Formularul a fost trimis!");
  };

  return (
    <div className="form-container">
      <h2>Spune-ne ce cauți</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-container__flex">
          <div className="form-row">
            <label>Nume</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label>Prenume</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-container__flex">
          <div className="form-row">
            <label>Adresă de email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label>Telefon</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <label>Cerințele tale</label>
          <textarea
            name="requirements"
            rows="5"
            value={formData.requirements}
            onChange={handleChange}
            placeholder="Scrie aici ce fel de proprietate cauți, locație, buget etc."
            required
          />
        </div>

        <button type="submit">Trimite</button>
      </form>
    </div>
  );
}

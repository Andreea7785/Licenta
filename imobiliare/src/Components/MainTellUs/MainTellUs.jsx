import { useState, useEffect } from "react";
import "./MainTellUs.css";

export default function MainTellUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    requirements: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phone: user.phoneNumber || "",
      }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch(
        "http://localhost:8080/api/property-requests/create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            clientId: user.id,
            description: formData.requirements,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Eroare la trimiterea cererii.");
      }

      setSuccessMessage("Formularul a fost trimis cu succes!");
      setFormData((prev) => ({ ...prev, requirements: "" }));
    } catch (err) {
      setErrorMessage("A apărut o eroare. Încearcă din nou.");
      console.error(err);
    }
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
              disabled
            />
          </div>

          <div className="form-row">
            <label>Prenume</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              disabled
            />
          </div>
        </div>

        <div className="form-container__flex">
          <div className="form-row">
            <label>Adresă de email</label>
            <input type="email" name="email" value={formData.email} disabled />
          </div>

          <div className="form-row">
            <label>Telefon</label>
            <input type="tel" name="phone" value={formData.phone} disabled />
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

        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

        <button type="submit">Trimite</button>
      </form>
    </div>
  );
}

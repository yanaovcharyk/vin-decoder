import { useState } from "react";
import "./VinForm.css";

export const VinForm = () => {
  const [vin, setVin] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const value = vin.trim().toUpperCase();

    if (!value) {
      setError("Введіть VIN-код");
      return;
    }

    if (value.length > 17) {
      setError("VIN-код не може містити більше 17 символів");
      return;
    }

    if (!/^[A-Z0-9]+$/.test(value)) {
      setError("VIN-код може містити тільки латинські букви та цифри");
      return;
    }

    setError("");

    console.log("VIN:", value);

    // тут пізніше буде запит до API
  };

  return (
    <form className="vin-form" onSubmit={handleSubmit}>
      <label className="vin-form__label" htmlFor="vin">
        VIN-код автомобіля
      </label>

      <div className="vin-form__field">
        <input
          id="vin"
          className="vin-form__input"
          type="text"
          value={vin}
          maxLength={17}
          placeholder="Наприклад: 1FTFW1CT5DFC10312"
          onChange={(event) => setVin(event.target.value)}
        />

        <button className="vin-form__button" type="submit">
          Розшифрувати
        </button>
      </div>

      {error && (
        <p className="vin-form__error">
          {error}
        </p>
      )}
    </form>
  );
};
import React from "react";
import "./formularzKontaktowy.css";

const FormularzKontaktowy = () => {
  return (
    <form className="formularzKontaktowy">
      <h1>Formularz Kontaktowy</h1>
      <fieldset>
        <legend>Dane kontaktowe</legend>
        <label>Imie:</label>
        <input type="text" name="imie" required />
        <label>Nazwisko:</label>
        <input type="text" name="nazwisko" required />
        <label>adres email:</label>
        <input type="text" name="emai" required />
        <label>telefon:</label>
        <input type="text" name="telefon" required />
        <label>Plec:</label>
        <label>Kobieta:</label>
        <input type="radio" value="Kobieta" name="plec" checked />
        <label>Mezczyzna:</label>
        <input type="radio" value="Mezyczyzna" name="plec" />
      </fieldset>
      <fieldset>
        <legend>Zgody maketingowe</legend>
        <label>zgoda na marketing telefoniczny</label>
        <input
          type="checkbox"
          name="zgodaMarketing"
          value="zgodaMarketingTelefoniczny"
        />
        <label>zgoda na marketeting email</label>
        <input
          type="checkbox"
          name="zgodaMarketing"
          value="zgodaMarketingEmail"
        />
      </fieldset>
      <fieldset>
        <legend>Zgoda na przetwarzanie danych RODO:</legend>
        <label>NIE:</label>
        <input type="radio" value="nie" name="rodo" checked />
        <label>TAK:</label>
        <input type="radio" value="tak" name="rodo" />
      </fieldset>
      <button type="submit">Wyslij formularz kontaktowy</button>
    </form>
  );
};

export default FormularzKontaktowy;

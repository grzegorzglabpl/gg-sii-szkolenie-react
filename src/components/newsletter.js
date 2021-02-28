import React, { useState } from "react";
import "./newsletter.css";

const Newsletter = () => {
  const [adresEmail, setAdresEmail] = useState("");

  const handlerOnChangeEmail = event => {
    event.preventDefault();
    const adresEmail = event.currentTarget.value;

    const poprawneAdresy = ["test@test.pl", "adres@adres.pl"];
    if (poprawneAdresy.indexOf(adresEmail) > -1) {
      console.log("adres email poprawny");
      setAdresEmail(adresEmail);
    } else {
      console.error("adres email nieprawidlowy");
    }
  };

  const handlerOnSubmit = event => {
    event.preventDefault();
    console.log(adresEmail);
  };

  return (
    <form className="Newsletter" onSubmit={handlerOnSubmit}>
      <fieldset>
        <legend>Zapisz się na newsletter</legend>
        <label for="adresEmail">Podaj adres email:</label>
        <input
          type="email"
          id="adresEmail"
          name="adresEmail"
          placeholder="Podaj adres email"
          title="Podaj adres email w postaci"
          required
          maxlength="30"
          onChange={handlerOnChangeEmail}
        />
        <button type="submit">Zapisz się na newsletter</button>
        {/* 
        <button type="reset">Wyczyść formularz newslettera</button>
        <button type="button">Przycisk</button>
        <input id="inputSubmit" type="submit" value="Zapisz się" />
        <input type="reset" value="Wyczysc formularz" />
        <input type="button" value="Przcisk" />
        */}
        <h1>aktualna wartosc zmiennej adresEmail:</h1>
        <h2>{adresEmail}</h2>
      </fieldset>
    </form>
  );
};

export default Newsletter;

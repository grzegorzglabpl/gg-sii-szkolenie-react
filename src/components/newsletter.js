import React from "react";
import style from "./newsletter.css";

const Newsletter = () => {
  return (
    <form className="Newsletter">
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
        />
        <button type="submit">Zapisz się na newsletter</button>
        {/* 
        <button type="reset">Wyczyść formularz newslettera</button>
        <button type="button">Przycisk</button>
        <input id="inputSubmit" type="submit" value="Zapisz się" />
        <input type="reset" value="Wyczysc formularz" />
        <input type="button" value="Przcisk" />
        */}
      </fieldset>
    </form>
  );
};

export default Newsletter;

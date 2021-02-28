import React, { useState } from "react";
import Hooks from "../hooks";
import "./formularzKontaktowy.css";

const FormularzKontaktowy = () => {
  const formularzHook = Hooks.useFormularz();

  const [kontaktAdresEmai, setKontaktAdresEmail] = useState(
    "jan.kowalsky@kowalsky.pl"
  );
  const [kontaktTelefon, setKontaktTelefon] = useState("+48.123-456-789");
  const [kontaktPlec, setKontaktPlec] = useState("Kobieta");
  const [kontaktZgodyMarketingowe, setKontaktZgodyMarketingowe] = useState("");
  const [kontaktZgodaRODO, setKontaktZgodaRODO] = useState("nie");

  const handlerOnSubmitKontakt = event => {
    event.preventDefault();
  };

  const handlerOnChangeKontakt = event => {
    event.preventDefault();

    const wartosc = event.currentTarget.value;
    const nazwa = event.currentTarget.name;

    switch (nazwa) {
      case "kontaktAdresEmai":
        setKontaktAdresEmail(wartosc);
        break;

      case "kontaktTelefon":
        setKontaktTelefon(wartosc);
        break;

      case "kontaktPlec":
        setKontaktPlec(wartosc);
        break;

      case "kontaktZgodyMarketingowe":
        if (!kontaktZgodyMarketingowe.includes(wartosc)) {
          setKontaktZgodyMarketingowe(kontaktZgodyMarketingowe + wartosc);
        } else {
          kontaktZgodyMarketingowe.replace(wartosc, "");
        }

        break;

      case "kontaktZgodaRODO":
        setKontaktZgodaRODO(wartosc);
        break;
    }
  };

  return (
    <form
      className="formularzKontaktowy"
      onSubmit={formularzHook.onClickSubmit}
    >
      <h1>Formularz Kontaktowy</h1>
      <fieldset>
        <legend>Dane kontaktowe</legend>
        <label>Imie:</label>
        <input
          type="text"
          name="kontaktImie"
          required
          value={formularzHook.kontaktImie}
          onChange={formularzHook.onChangeKontakt}
        />
        <label>Nazwisko:</label>
        <input
          type="text"
          name="kontaktNazwisko"
          required
          value={formularzHook.kontaktNazwisko}
          onChange={formularzHook.onChangeKontakt}
        />
        <label>adres email:</label>
        <input
          type="text"
          name="kontaktAdresEmai"
          required
          value={kontaktAdresEmai}
          onChange={handlerOnChangeKontakt}
        />
        <label>telefon:</label>
        <input
          type="text"
          name="kontaktTelefon"
          required
          value={kontaktTelefon}
          onChange={handlerOnChangeKontakt}
        />
        <label>Plec:</label>
        <label>Kobieta:</label>
        <input
          type="radio"
          value="Kobieta"
          name="kontaktPlec"
          checked={kontaktPlec.includes("Kobieta")}
          onChange={handlerOnChangeKontakt}
        />
        <label>Mezczyzna:</label>
        <input
          type="radio"
          value="Mezyczyzna"
          name="kontaktPlec"
          checked={kontaktPlec.includes("Mezyczyzna")}
          onChange={handlerOnChangeKontakt}
        />
      </fieldset>
      <fieldset>
        <legend>Zgody maketingowe</legend>
        <label>zgoda na marketing telefoniczny</label>
        <input
          type="checkbox"
          name="kontaktZgodyMarketingowe"
          value="zgodaMarketingTelefoniczny"
          onChange={handlerOnChangeKontakt}
          checked={
            kontaktZgodyMarketingowe.includes("zgodaMarketingTelefoniczny")
              ? true
              : false
          }
        />
        <label>zgoda na marketeting email</label>
        <input
          type="checkbox"
          name="kontaktZgodyMarketingowe"
          value="zgodaMarketingEmail"
          onChange={handlerOnChangeKontakt}
          checked={
            kontaktZgodyMarketingowe.includes("zgodaMarketingEmail")
              ? true
              : false
          }
        />
      </fieldset>
      <fieldset>
        <legend>Zgoda na przetwarzanie danych RODO:</legend>
        <label>NIE:</label>
        <input
          type="radio"
          value="nie"
          name="kontaktZgodaRODO"
          checked={kontaktZgodaRODO.includes("nie")}
          onChange={handlerOnChangeKontakt}
        />
        <label>TAK:</label>
        <input
          type="radio"
          value="tak"
          name="kontaktZgodaRODO"
          checked={kontaktZgodaRODO.includes("tak")}
          onChange={handlerOnChangeKontakt}
        />
      </fieldset>
      {!formularzHook.clickSubmit ? (
        <button type="submit">Wyslij formularz kontaktowy</button>
      ) : (
        <>
          <h1>Formularz zostal wyslany</h1>
          <a href="/aktualnosci">Wroc do strony glownej</a>
        </>
      )}
    </form>
  );
};

export default FormularzKontaktowy;

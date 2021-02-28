import { useReducer } from "react";

const initialState = {
  clickSubmit: false,
  kontaktImie: "Janinina",
  kontaktNazwisko: "Kowalsky"
};

const actions = {
  CLICK_SUBMIT: "CLICK_SUBMIT",
  CHANGE_CONTACT_IMIE: "CHANGE_CONTACT_IMIE",
  CHANGE_CONTACT_NAZWISKO: "CHANGE_CONTACT_NAZWISKO"
};

const reducer = (state, action) => {
  /*
  window.sessionStorage.setItem("useFormularz2", JSON.stringify(state));
  initialState = JSON.parse(window.sessionStorage.getItem(useFormularz2));
*/

  switch (action.type) {
    case actions.CLICK_SUBMIT:
      return {
        ...state,
        clickSubmit: !state.clickSubmit
      };

    case actions.CHANGE_CONTACT_IMIE:
      return {
        ...state,
        kontaktImie: actions.payload
      };

    case actions.CHANGE_CONTACT_NAZWISKO:
      return {
        ...state,
        kontaktNazwisko: actions.payload
      };

    default:
      throw new Error("useFormulalrz reducer error - action not supported.");
  }
};

export const useFormularz = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getValidEmail = async () => {
    let response = await fetch("dane.json");
    let jsonData = await response.json();
    console.log(jsonData);
  };

  const onClickSubmit = event => {
    event.preventDefault();

    getValidEmail();

    console.log("useFormulalrz: click submit");
    dispatch({ type: actions.CLICK_SUBMIT, payload: event });
  };

  const onChangeKontakt = event => {
    event.preventDefault();
    console.log("useFormulalrz: click onChangeKontakt");
    const wartosc = event.currentTarget.value;
    const nazwa = event.currentTarget.name;

    console.log(nazwa);

    if (nazwa == "kontaktImie") {
      dispatch({ type: actions.CHANGE_CONTACT_IMIE, payload: wartosc });
    } else if (nazwa == "kontaktNazwisko") {
      dispatch({ type: actions.CHANGE_CONTACT_NAZWISKO, payload: wartosc });
    }
  };

  return {
    ...state,
    onClickSubmit,
    onChangeKontakt
  };
};

export default useFormularz;

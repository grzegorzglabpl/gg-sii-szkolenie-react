import { useReducer } from "react";

const initialState = {
  clickSubmit: true
};

const actions = {
  CLICK_SUBMIT: "CLICK_SUBMIT"
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.CLICK_SUBMIT:
      return {
        ...state,
        clickSubmit: !state.clickSubmit
      };

    default:
      throw new Error("useFormulalrz reducer error - action not supported.");
  }
};

export const useFormularz = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onClickSubmit = event => {
    event.preventDefault();
    console.log("click submit");
    dispatch({ type: actions.CLICK_SUBMIT, payload: event });
  };

  return {
    ...state,
    onClickSubmit
  };
};

export default useFormularz;

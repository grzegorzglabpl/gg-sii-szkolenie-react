import React from "react";
import Pages from "./pages";

const { StronaGlowna, Aktualnosci, Kontakt } = Pages;

const Routers = {
  "/": () => <StronaGlowna />,
  "/aktualnosci": () => <Aktualnosci />,
  "/kontakt": () => <Kontakt />
};

export default Routers;

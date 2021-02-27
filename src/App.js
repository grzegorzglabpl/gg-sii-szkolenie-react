import React from "react";
import { useRoutes } from "hookrouter";
import "./style.css";
import Routers from "./router";

const Header = props => {
  return (
    <header id={props.id}>
      {props.title} - {props.messsage}
    </header>
  );
};

const Nav = () => {
  return <nav>nawigacja</nav>;
};

const Main = () => {
  return <main>kontent</main>;
};

const Aside = () => {
  return <aside>aside</aside>;
};

const Footer = props => {
  return (
    <footer>
      {/* 
  tutaj sobie probuje zrobic stopke
  */}
      (c){props.wyswietlRok ? props.rok : "brak roku"} - autor: {props.autor}
    </footer>
  );
};

export default () => {
  
  const routeResult = useRoutes(Routers);

  return (
    <>
      <Header id="header-1" title="tytul" messsage="wiadomosc" />
      <Nav />
      {routeResult}
      <Aside />
      <Footer wyswietlRok={true} rok="2021" autor="Grzesiek" />
    </>
  );
};

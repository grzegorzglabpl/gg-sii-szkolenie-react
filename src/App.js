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
  return (
    <nav>
      <a href="/aktualnosci">aktualnosci</a>
      <a href="/kontakt">kontakt</a>
    </nav>
  );
};

const Main = () => {
  const routeResult = useRoutes(Routers);
  return <main>{routeResult}</main>;
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
  
  return (
    <>
      <Header id="header-1" title="tytul" messsage="wiadomosc" />
      <Nav />
      <Main />
      <Aside />
      <Footer wyswietlRok={true} rok="2021" autor="Grzesiek" />
    </>
  );
};

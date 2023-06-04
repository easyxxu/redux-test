// import React from "react";
// // import ReactDOM from 'react-dom'; //구버전
// import { createRoot } from "react-dom/client";
// import App from "./App";

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<App />);
import { createStore } from "redux";
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const reducer = () => {
  return "hello";
}; //data를 수정하는 함수
const store = createStore(); // data를 저장하는 공간

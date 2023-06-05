// import React from "react";
// import ReactDOM from 'react-dom'; //구버전
// import { createRoot } from "react-dom/client";
import { createStore } from "redux";
// import App from "./App";

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<App />);

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

// Reducer

// const reducer = () => {
//   return "hello";
// }; //data를 수정하는 함수

const countModifier = (count = 0, action) => {
  //action은 countModifier와 소통하는 방법
  // 1번째 방법
  // if (action.type === "ADD") {
  //   return count + 1;
  // } else if (action.type === "MINUS") {
  //   return count - 1;
  // } else return count;
  // 2번째 방법
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
}; // count를 수정하는 함수

// const store = createStore(); // data를 저장하는 공간
const countStore = createStore(countModifier); // count를 저장하는 공간을 만들고 countModifier를 실행한다

const onChange = () => {
  number.textContent = countStore.getState();
};

countStore.subscribe(onChange);
//countStore.dispatch({ type: "ADD" }); // 커뮤니케이션하는 방법은 countModifier에게 action을 보냄
add.addEventListener("click", () => countStore.dispatch({ type: ADD })); // reducer에 action을 보내는 방법 : dispatch
// dispatch가 reducer를 불러서 current state와 보내진 action(object)을 더함
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));

//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let segundos = 0;
setInterval(function () {
    ReactDOM.render(<Home tiempo = {segundos}/>, document.querySelector("#app"));
    segundos++;
}, 1000)


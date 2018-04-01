import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

let render = () => ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);

let instance = render();

declare var module: { hot: any };
if (module.hot) {
    module.hot.accept();
}
// jak to dzioła

import ReactDOM from "react-dom/client";
import "./index.css";
import "./lib/i18n";
import App from "./app/App";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

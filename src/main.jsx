import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch";

// Configuración correcta del cliente de búsqueda
const searchClient = algoliasearch(
  "D5ATULXFYU",
  "f8c6b70e09997da9459fe10e8041f008"
);

const INDEX_NAME = "autocomplete_twitter_accounts";

// Renderizar correctamente la aplicación
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InstantSearch
      searchClient={searchClient}
      indexName={INDEX_NAME}
      suppressExperimentalWarning
    >
      <App />
    </InstantSearch>
  </React.StrictMode>
);

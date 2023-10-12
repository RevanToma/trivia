import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { GlobalStyles } from "./Styles/GlobalStyles";
import { Provider } from "react-redux";
import store, { persistor } from "./Store/Store";
import { PersistGate } from "redux-persist/integration/react";
import Spinner from "./components/common/Spinner/Spinner";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

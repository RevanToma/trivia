import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { GlobalStyles } from "./Styles/GlobalStyles";
import { Provider } from "react-redux";
import store, { persistor } from "./Store/Store";
import { PersistGate } from "redux-persist/integration/react";
import Spinner from "./components/common/Spinner/Spinner";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartedGame from "./page/Game/StartedGame";
import Results from "./page/Results/Results";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/game",
    element: <StartedGame />,
  },
  {
    path: "/game",
    element: <Results />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Suspense fallback={<Spinner />}>
      <Provider store={store}>
        <PersistGate loading={<Spinner />} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </Suspense>
  </React.StrictMode>
);

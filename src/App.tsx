import { BrowserRouter, Route, Routes } from "react-router-dom";
import InitilizeGame from "./page/Home/InitilizeGame";
import { GlobalStyles } from "./Styles/GlobalStyles";
import { Suspense, lazy } from "react";
import Spinner from "./components/common/Spinner/Spinner";
import NotFound from "./page/NotFound/NotFound";
import RouteGuard from "./components/Guard/RuteGuard";

const Results = lazy(() => import("./page/Results/Results"));
const StartedGame = lazy(() => import("./page/Game/StartedGame"));
const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<InitilizeGame />} />
            <Route
              path="/game"
              element={<RouteGuard component={StartedGame} />}
            />
            <Route
              path="/results"
              element={<RouteGuard component={Results} redirectIfGameStatus />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;

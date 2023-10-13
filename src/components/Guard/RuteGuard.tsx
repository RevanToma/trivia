import { useSelector } from "react-redux";
import { selectGameStatus } from "../../Store/TriviaStore/TriviaSelectors";
import { Navigate } from "react-router-dom";

const RouteGuard = ({
  component: Component,
  redirectIfGameStatus = false,
  resultsRedirect = false,
}: any) => {
  const gameStatus = useSelector(selectGameStatus);

  if (gameStatus === "idle" && redirectIfGameStatus) {
    return <Navigate to="/" replace />;
  }

  if (gameStatus !== "finished" && resultsRedirect) {
    return <Navigate to="/" replace />;
  }

  return <Component />;
};

export default RouteGuard;

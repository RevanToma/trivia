import { useSelector } from "react-redux";
import { selectGameStatus } from "../../Store/TriviaStore/TriviaSelectors";
import { Navigate } from "react-router-dom";

const RouteGuard = ({
  component: Component,
  redirectIfGameStatus = false,
}: any) => {
  const gameStatus = useSelector(selectGameStatus);

  if (
    (gameStatus === "idle" && redirectIfGameStatus) ||
    (gameStatus === "ongoing" && redirectIfGameStatus)
  ) {
    return <Navigate to="/" replace />;
  } else if (gameStatus === "idle") {
    return <Navigate to="/" replace />;
  }

  return <Component />;
};

export default RouteGuard;

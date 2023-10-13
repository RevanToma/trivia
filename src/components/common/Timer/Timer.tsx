import { useState, useEffect } from "react";
import { TimerSpan } from "./TimerStyles";
import { useSelector } from "react-redux";
import { selectCurrentQuestionIndex } from "../../../Store/TriviaStore/TriviaSelectors";
import { useAppDispatch } from "../../../hooks/useDispatch";
import { finishGame } from "../../../Store/TriviaStore/TriviaSlice";
import { useNavigate } from "react-router-dom";

type TimerProps = {
  initialSeconds: number;
};

const Timer: React.FC<TimerProps> = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  const currentQuestionIndex = useSelector(selectCurrentQuestionIndex);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {}, [seconds]);

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setTimeout(() => {
        setSeconds((prevSec) => prevSec - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    } else {
      dispatch(finishGame());
      alert("Time is up! You will be redirected to the results page.");
      navigate("/results");
    }
  }, [seconds, dispatch, navigate]);

  useEffect(() => {
    setSeconds(initialSeconds);
  }, [currentQuestionIndex, initialSeconds]);
  return (
    <TimerSpan>
      Time left: <span>{seconds} seconds</span>
    </TimerSpan>
  );
};

export default Timer;

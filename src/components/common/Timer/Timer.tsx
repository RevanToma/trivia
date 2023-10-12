import { useState, useEffect } from "react";
import { TimerSpan } from "./TimerStyles";
import { useSelector } from "react-redux";
import { selectCurrentQuestionIndex } from "../../../Store/TriviaStore/TriviaSelectors";
import { useAppDispatch } from "../../../hooks/useDispatch";
import { finishGame } from "../../../Store/TriviaStore/TriviaSlice";

type TimerProps = {
  initialSeconds: number;
  onTimeOut: () => void;
};

const Timer: React.FC<TimerProps> = ({ initialSeconds, onTimeOut }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  const currentQuestionIndex = useSelector(selectCurrentQuestionIndex);

  const dispatch = useAppDispatch();

  useEffect(() => {}, [seconds]);

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setTimeout(() => {
        setSeconds((prevSec) => prevSec - 1);
      }, 1000);
      return () => clearTimeout(timerId); // cleanup
    } else {
      dispatch(finishGame());
    }
  }, [seconds, dispatch]);

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

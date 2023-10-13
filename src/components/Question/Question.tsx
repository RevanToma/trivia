import { FC, useState, useEffect } from "react";
import { QuestionProps } from "../../types";
import Button from "../common/Button/Button";
import { useSelector } from "react-redux";
import {
  selectCurrentQuestionIndex,
  selectQuestions,
  selectStartTime,
} from "../../Store/TriviaStore/TriviaSelectors";
import * as S from "./QuestionStyles";
import { useAppDispatch } from "../../hooks/useDispatch";
import {
  finishGame,
  nextQuestion,
  resetTrivia,
  setUserAnswer,
} from "../../Store/TriviaStore/TriviaSlice";
import Timer from "../common/Timer/Timer";
import { useNavigate } from "react-router-dom";
const Question: FC<QuestionProps> = ({ data, onAnswerSelected }) => {
  const [shuffledOpt, setShuffledOpt] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const startTime = useSelector(selectStartTime);
  const currentTime = Date.now();

  const totalQuestions = useSelector(selectQuestions).length;
  const currentQuestion = useSelector(selectQuestions).indexOf(data) + 1;
  const selectedCategory = data.category;
  const currentQuestionIndex = useSelector(selectCurrentQuestionIndex);
  const navigate = useNavigate();

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    onAnswerSelected(answer);
  };

  const handleSubmit = () => {
    dispatch(setUserAnswer(selectedAnswer));

    const finished = currentQuestionIndex >= totalQuestions - 1;

    if (finished) {
      dispatch(finishGame());
      navigate("/results");
    } else {
      dispatch(nextQuestion());
    }
    setSelectedAnswer(null);
  };
  const allowedTime = 31;
  useEffect(() => {
    if (startTime && currentTime - startTime > allowedTime) {
      navigate("/");
      dispatch(resetTrivia());
    }
    setShuffledOpt(
      [...data.incorrect_answers, data.correct_answer].sort(
        () => Math.random() - 0.5
      )
    );
  }, [data, startTime, currentTime, allowedTime, dispatch, navigate]);

  return (
    <S.QuestionContainer>
      <header>
        <h1>{selectedCategory}</h1>
        <h2>
          Question {currentQuestion}/{totalQuestions}
        </h2>
      </header>
      <S.QuestionContent>
        <Timer initialSeconds={5} />
        <h4>{data.question}</h4>

        <>
          {shuffledOpt.map((answer, idx) => (
            <span key={idx}>
              <Button
                isSelected={answer === selectedAnswer}
                onClick={() => handleAnswerClick(answer)}
              >
                {answer}
              </Button>
            </span>
          ))}
        </>
        <Button disabled={!selectedAnswer} onClick={handleSubmit}>
          Submit
        </Button>
      </S.QuestionContent>
    </S.QuestionContainer>
  );
};

export default Question;

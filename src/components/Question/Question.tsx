import { FC, useState, useEffect } from "react";
import { QuestionProps } from "../../types";
import Button from "../common/Button/Button";
import { useSelector } from "react-redux";
import { selectQuestions } from "../../Store/TriviaStore/TriviaSelectors";
import * as S from "./QuestionStyles";
import { useAppDispatch } from "../../hooks/useDispatch";
import {
  nextQuestion,
  setUserAnswer,
} from "../../Store/TriviaStore/TriviaSlice";
import Timer from "../common/Timer/Timer";
const Question: FC<QuestionProps> = ({
  data,

  onAnswerSelected,
}) => {
  const [shuffledOpt, setShuffledOpt] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const totalQuestions = useSelector(selectQuestions).length;
  const currentQuestion = useSelector(selectQuestions).indexOf(data) + 1;
  const selectedCategory = data.category;

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    onAnswerSelected(answer);
  };

  const handleSubmit = () => {
    dispatch(setUserAnswer(selectedAnswer));
    dispatch(nextQuestion());
    setSelectedAnswer(null);
  };
  useEffect(() => {
    setShuffledOpt(
      [...data.incorrect_answers, data.correct_answer].sort(
        () => Math.random() - 0.5
      )
    );
  }, [data]);
  const handleTimeOut = () => {
    console.log("time out");
  };
  return (
    <S.QuestionContainer>
      <header>
        <h1>{selectedCategory}</h1>
        <h2>
          Question {currentQuestion}/{totalQuestions}
        </h2>
      </header>
      <S.QuestionContent>
        <Timer initialSeconds={31} onTimeOut={handleTimeOut} />
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

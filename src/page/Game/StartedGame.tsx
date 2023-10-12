import { selectCurrentQuestion } from "../../Store/TriviaStore/TriviaSelectors";
import Question from "../../components/Question/Question";
import { useSelector } from "react-redux";

const StartedGame = () => {
  const currentQuestion = useSelector(selectCurrentQuestion);

  const handleAnswerSelected = (selectedAnswer: string) => {
    console.log(selectedAnswer);
  };

  return (
    <>
      <Question
        data={currentQuestion}
        onAnswerSelected={handleAnswerSelected}
      />
    </>
  );
};

export default StartedGame;

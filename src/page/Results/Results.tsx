import { useSelector } from "react-redux";
import {
  selectQuestions,
  selectUserAnswers,
} from "../../Store/TriviaStore/TriviaSelectors";
import * as S from "./ResultsStyles";
import Button from "../../components/common/Button/Button";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useDispatch";
import { resetTrivia } from "../../Store/TriviaStore/TriviaSlice";

const Results = () => {
  const userAnswers = useSelector(selectUserAnswers);
  const questions = useSelector(selectQuestions);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const correctAnswers = questions.filter(
    (question, idx) => question.correct_answer === userAnswers[idx]
  ).length;
  const percentageScore = (correctAnswers / questions.length) * 100;

  const handlePlayAgain = () => {
    navigate("/");
    dispatch(resetTrivia());
  };
  const getColorForScore = (score: number) => {
    if (score >= 80) return "green";
    if (score >= 60) return "orange";
    return "red";
  };

  const getTextForScore = (score: number) => {
    if (score >= 80) return "Excellent!";
    if (score >= 60) return "Good job!";
    return "Better luck next time!";
  };
  return (
    <S.ResultsContainer>
      <h1>Results</h1>
      <S.ScoreDisplay>
        <S.ScoreText>
          You answered {correctAnswers} out of {questions.length} questions
          correctly!
        </S.ScoreText>
        <S.PercentageScore color={getColorForScore(percentageScore)}>
          {percentageScore.toFixed(2)}%
        </S.PercentageScore>
        <S.ScoreText>{getTextForScore(percentageScore)}</S.ScoreText>
      </S.ScoreDisplay>
      <S.ResultsTable>
        <thead>
          <tr>
            <th>Question</th>
            <th>Your Answer</th>
            <th>Correct Answer</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => (
            <tr key={index}>
              <td>{question.question}</td>
              <td>{userAnswers[index]}</td>
              <td>{question.correct_answer}</td>
              {userAnswers[index] === question.correct_answer ? (
                <S.CorrectAnswer>✓</S.CorrectAnswer>
              ) : (
                <S.IncorrectAnswer>✕</S.IncorrectAnswer>
              )}
            </tr>
          ))}
        </tbody>
      </S.ResultsTable>

      <Button onClick={handlePlayAgain}>Play Again</Button>
    </S.ResultsContainer>
  );
};

export default Results;

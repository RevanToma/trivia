import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  InitialTriviaApiUrl,
  SessionApi,
  fetchTriviaCategories,
} from "../../Api/Api";
import {
  fetchSessionToken,
  fetchTriviaQuestions,
} from "../../Store/TriviaStore/TriviaSlice";
import { useAppDispatch } from "../../hooks/useDispatch";
import { DifficultyDisplayNames, TriviaCategory } from "../../types";
import Button from "../../components/common/Button/Button";
import * as S from "./StartGameStyles";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSessionToken } from "../../Store/TriviaStore/TriviaSelectors";

const StartGame = () => {
  const {
    register,
    handleSubmit,

    getValues,
    formState: { errors },
  } = useForm();

  const dispatch = useAppDispatch();
  const [categories, setCategories] = useState<TriviaCategory[]>([]);
  const [loading, setLoading] = useState(false);
  const sessionToken = useSelector(selectSessionToken);

  const navigate = useNavigate();
  useEffect(() => {
    const getCategories = async () => {
      const triviaCategories = await fetchTriviaCategories();
      setCategories(triviaCategories);
    };
    getCategories();
  }, []);

  const onSubmit = async () => {
    setLoading(true);
    await dispatch(fetchSessionToken(SessionApi));

    const values = getValues();
    const difficulty = values.difficulty;
    const category = values.category;
    const TriviaApiUrl = `${InitialTriviaApiUrl}&category=${category}&difficulty=${difficulty}&type=multiple&token=${sessionToken}`;
    await dispatch(fetchTriviaQuestions(TriviaApiUrl));
    setLoading(false);
    navigate("/game");
  };

  return (
    <S.StartGameContainer>
      <header>
        <h1>Trivia Game</h1>
      </header>
      <section>
        <h4>Game Rules:</h4>
        <ul>
          <li>Each game consist of 7 questions.</li>
          <li>You have 31 seconds to answer a question.</li>
        </ul>
      </section>

      <S.SetupGameForm onSubmit={handleSubmit(onSubmit)}>
        <S.SetupGameFields>
          <label htmlFor="category">Select Category</label>
          {errors.category && <span>This field is required</span>}
          <select {...register("category", { required: true })} id="category">
            {categories.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </S.SetupGameFields>
        <S.SetupGameFields>
          <label htmlFor="difficulty">Select Difficulty</label>
          <select {...register("difficulty")} id="difficulty">
            {Object.entries(DifficultyDisplayNames).map(
              ([value, displayName]) => (
                <option key={value} value={value}>
                  {displayName}
                </option>
              )
            )}
          </select>
        </S.SetupGameFields>
        <Button type="submit" isLoading={loading}>
          Start Game
        </Button>
      </S.SetupGameForm>
    </S.StartGameContainer>
  );
};

export default StartGame;

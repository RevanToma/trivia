import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as S from "./StartGameStyles";
import Button from "../common/Button/Button";
import { fetchTriviaCategories } from "../../Api/Api";
import { DifficultyDisplayNames, TriviaCategory } from "../../types";
import { useAppDispatch } from "../../hooks/useDispatch";
import { fetchTriviaQuestions } from "../../Store/TriviaStore/TriviaSlice";

const StartGame = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const dispatch = useAppDispatch();
  const [categories, setCategories] = useState<TriviaCategory[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      const triviaCategories = await fetchTriviaCategories();
      setCategories(triviaCategories);
    };
    getCategories();
  }, []);

  const onSubmit = () => {
    const values = getValues();
    const difficulty = values.difficulty;
    const category = values.category;
    const TriviaApiUrl = `https://opentdb.com/api.php?amount=7&category=${category}&difficulty=${difficulty}&type=multiple`;
    dispatch(fetchTriviaQuestions(TriviaApiUrl));
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
        <Button type="submit">Start Game</Button>
      </S.SetupGameForm>
    </S.StartGameContainer>
  );
};

export default StartGame;

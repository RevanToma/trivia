import { TriviaCategory } from "../types";

// const TriviaApi = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy"
export const InitialTriviaApiUrl = "https://opentdb.com/api.php?amount=7";
export const TriviaCategoriesApi = "https://opentdb.com/api_category.php";
export const SessionApi = "https://opentdb.com/api_token.php?command=request";

export const fetchTriviaCategories = async (): Promise<TriviaCategory[]> => {
  const response = await fetch(TriviaCategoriesApi);
  const data = await response.json();

  return data.trivia_categories;
};

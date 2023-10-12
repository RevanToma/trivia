import { RootState } from "../Store";

const triviaSlice = (state: RootState) => state.trivia;

export const selectQuestions = (state: RootState) =>
  triviaSlice(state).questions;

export const selectCurrentQuestionIndex = (state: RootState) =>
  triviaSlice(state).currentQuestionIndex;

export const selectUserAnswers = (state: RootState) =>
  triviaSlice(state).userAnswers;

export const selectSessionToken = (state: RootState) =>
  triviaSlice(state).sessionToken;

export const selectGameStatus = (state: RootState) =>
  triviaSlice(state).gameStatus;

export const selectCurrentQuestion = (state: RootState) =>
  triviaSlice(state).questions[triviaSlice(state).currentQuestionIndex];

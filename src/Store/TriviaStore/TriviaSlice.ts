import { SessionApi } from "../../Api/Api";
import { TriviaState } from "../../types";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export const fetchTriviaQuestions = createAsyncThunk(
  "trivia/fetchTriviaQuestions",
  async (apiUrl: string) => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.results;
  }
);

export const fetchSessionToken = createAsyncThunk(
  "session/fetchToken",
  async (sessionTokenUrl: string) => {
    const response = await fetch(sessionTokenUrl);
    const data = await response.json();
    return data.token;
  }
);

const initialState: TriviaState = {
  questions: [],
  currentQuestionIndex: 0,
  userAnswers: [],
  sessionToken: "",
  gameStatus: "idle",
};

const triviaSlice = createSlice({
  name: "trivia",
  initialState,
  reducers: {
    setQuestions: (state, { payload }) => {
      state.questions = payload;
    },
    setUserAnswer: (state, { payload }) => {
      state.userAnswers = payload;
    },
    nextQuestion: (state) => {
      state.currentQuestionIndex++;
    },
    setSessionToken: (state, { payload }: PayloadAction<string>) => {
      state.sessionToken = payload;
    },
    resetTrivia: (state) => {
      state.questions = [];
      state.currentQuestionIndex = 0;
      state.userAnswers = [];
      state.gameStatus = "idle";
    },
    startGame: (state) => {
      state.gameStatus = "ongoing";
    },
    finishGame: (state) => {
      state.gameStatus = "finished";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTriviaQuestions.fulfilled, (state, { payload }) => {
      state.questions = payload;
      state.gameStatus = "ongoing";
    });
    builder.addCase(fetchSessionToken.fulfilled, (state, { payload }) => {
      state.sessionToken = payload;
    });
  },
});

export const {
  setQuestions,
  setUserAnswer,
  nextQuestion,
  setSessionToken,
  resetTrivia,
  startGame,
  finishGame,
} = triviaSlice.actions;
export default triviaSlice.reducer;

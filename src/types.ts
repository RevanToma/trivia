import { ReactNode } from "react";
export enum ButtonType {
  Disabled = "disabled",
  Primary = "primary",
}

export interface ButtonProps {
  buttontypes: ButtonType;
  children: ReactNode;
  isLoading: boolean;
  isSelected: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled: boolean;
  type: "button" | "submit";
}

export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface TriviaState {
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: string[];
  sessionToken: string;
  gameStatus: "idle" | "ongoing" | "finished";
}

export type TriviaCategory = {
  id: number;
  name: string;
};

export enum Difficulty {
  Easy = "easy",
  Medium = "medium",
  Hard = "hard",
  Any = "",
}

export const DifficultyDisplayNames: { [key in Difficulty]: string } = {
  [Difficulty.Any]: "Any Difficulty",
  [Difficulty.Easy]: "Easy",
  [Difficulty.Medium]: "Medium",
  [Difficulty.Hard]: "Hard",
};

export type QuestionProps = {
  data: {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  };
  onAnswerSelected: (selectedAnswer: string) => void;
};

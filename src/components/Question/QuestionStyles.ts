import styled from "styled-components";
import { StartGameContainer } from "../../page/Home/StartGameStyles";

export const QuestionContainer = styled(StartGameContainer)`
  text-align: center;
  header h1 {
    font-size: 2.5rem !important;
  }
  h2 {
    color: #f1d202;
  }
`;

export const QuestionContent = styled.div`
  display: flex;
  width: 100%;

  gap: 3.5rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h4 {
    width: 35rem;
  }

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  background-color: #1e1e1e;
  border-radius: 1rem;
  padding: 1.2rem;
  span button {
    width: 35rem;
    text-align: left;
    background-color: #323232;
    color: white;
    font-weight: 500;
  }
`;

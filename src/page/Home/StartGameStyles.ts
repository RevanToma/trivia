import styled from "styled-components";

export const StartGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem;
  margin: 1rem;
  border-radius: 1rem;

  width: 50rem;
  min-height: 60rem;
  gap: 1rem;
  margin-top: 7rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
`;

export const SetupGameForm = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 3.5rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  background-color: #1e1e1e;
  border-radius: 1rem;

  button {
    width: 50%;
    margin-top: 2rem;
  }
`;

export const SetupGameFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    color: #dcedc8;
    font-family: Poppins;
    letter-spacing: 0.1rem;
    line-height: 1rem;
    font-size: 1.5rem;
  }
  select {
    width: 28rem;
    height: 3.5rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    color: #1e1e1e;
    font-weight: 600;
    padding: 0rem 0.5rem;
  }
  span {
    color: #ffa500;
  }
`;

import styled from "styled-components";
export const CorrectAnswer = styled.td`
  color: green !important;
  text-align: center;
`;

export const IncorrectAnswer = styled.td`
  color: red !important;
  text-align: center;
`;
export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 3.5rem 3.5rem;

  button {
    margin-top: 2rem;
  }
`;

export const ResultsTable = styled.table`
  border-collapse: collapse;
  width: 70%;
  background-color: #1e1e1e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  border-radius: 1rem;

  th,
  td {
    text-align: left;
    padding: 0.5rem;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
  }

  td:not(:first-child) {
    border-left: 1px solid #f1d202;
  }
  th {
    color: #f1d202;
    border-bottom: 0.2rem solid #f1d202;
    padding: 1rem;
  }

  tr:nth-child(even) {
    background-color: #323232;
  }
  tr:not(:last-child) {
    border-bottom: 1px solid #f1d202;
  }

  td {
    color: white;
    font-weight: 500;
  }

  tr td:last-child {
    text-align: center;
    font-size: 2.5rem;
  }
  tr td:last-child:after {
    display: none;
  }
`;

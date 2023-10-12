import styled from "styled-components";
import { ButtonType } from "../../../types";

export const StyledButton = styled.button<{ $buttonType?: ButtonType }>`
  padding: 1.5rem;
  min-width: 20rem;

  ${({ $buttonType }) => {
    switch ($buttonType) {
      case ButtonType.Primary:
        return `
          background-color: #F1D202;
          color: #1E1E1E;
          &:hover {
            background-color: #D9B801;
          }
        `;
      case ButtonType.Disabled:
        return `
          background-color: #F4E5A3;
          color: #7a7a7a;
          cursor: not-allowed;
        `;
      default:
        return `
          background-color: #F1D202;
          color: #1E1E1E;
        `;
    }
  }}
`;

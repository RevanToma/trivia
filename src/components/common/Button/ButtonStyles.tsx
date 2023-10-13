import styled from "styled-components";
import { ButtonType } from "../../../types";
interface StyledButtonProps {
  $buttonType?: ButtonType;
  $isSelected?: boolean;
}
export const StyledButton = styled.button<StyledButtonProps>`
  padding: 1.5rem;
  min-width: 20rem;

  ${({ $isSelected }) =>
    $isSelected &&
    `
  border: 1px solid #f1d202;
  position: relative; 
  &:after {
    content: '✓';
    font-size: 2.5rem;
    position: absolute;
    color: #f1d202;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`}

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

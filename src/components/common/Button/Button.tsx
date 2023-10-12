import { FC } from "react";
import { ButtonProps, ButtonType } from "../../../types";
import { StyledButton } from "./ButtonStyles";
import Spinner from "../Spinner/Spinner";

const Button: FC<Partial<ButtonProps>> = ({
  buttontypes = ButtonType.Primary,
  children,
  isLoading = false,
  onClick,
  disabled = false,
  type,
  isSelected = false,
}) => {
  return (
    <StyledButton
      $buttonType={disabled ? ButtonType.Disabled : buttontypes}
      onClick={onClick}
      disabled={disabled}
      type={type}
      $isSelected={isSelected}
    >
      {isLoading ? <Spinner /> : children}
    </StyledButton>
  );
};

export default Button;

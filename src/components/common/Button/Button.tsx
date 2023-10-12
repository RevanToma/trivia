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
}) => {
  return (
    <StyledButton
      $buttonType={disabled ? ButtonType.Disabled : buttontypes}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {isLoading ? <Spinner /> : children}
    </StyledButton>
  );
};

export default Button;

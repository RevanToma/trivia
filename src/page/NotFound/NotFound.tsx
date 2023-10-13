import React from "react";
import Button from "../../components/common/Button/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Not Found</h1>
      <Button onClick={() => navigate("/")}>Home</Button>
    </div>
  );
};

export default NotFound;

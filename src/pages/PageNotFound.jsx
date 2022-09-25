import { Result, Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Result
        title="404"
        status={"404"}
        subTitle={"Sorry, the page you are trying to reach could not be found"}
        extra={<Button onClick={() => navigate("/")}>Go Back Home</Button>}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default PageNotFound;

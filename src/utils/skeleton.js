import React from 'react'
import styled from 'styled-components';
import {  Skeleton } from "antd";


const SkeletonAnimation = () => {
  return (
    <SkeletonContainer>
      <Skeleton active style={{ width: "260px", margin: "20px" }} />
      <Skeleton active style={{ width: "260px", margin: "20px" }} />
      <Skeleton active style={{ width: "260px", margin: "20px" }} />
      <Skeleton active style={{ width: "260px", margin: "20px" }} />
      <Skeleton active style={{ width: "260px", margin: "20px" }} />
      <Skeleton active style={{ width: "260px", margin: "20px" }} />
      <Skeleton active style={{ width: "260px", margin: "20px" }} />
      <Skeleton active style={{ width: "260px", margin: "20px" }} />
      <Skeleton active style={{ width: "260px", margin: "20px" }} />
    </SkeletonContainer>
  );
}


const SkeletonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export default SkeletonAnimation
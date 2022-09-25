import React from "react";
import styled from "styled-components";
import { RenderCategoryList } from "../utils/data";

const SideBar = () => {
  return (
    <SidebarContainer className="sidebar">
      <MealLinksContainer>{RenderCategoryList()}</MealLinksContainer>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  width: 20%;
  padding: 5px 0;
  position: fixed;
  top: 40px;
  bottom: 0;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    /* display: none; */
    z-index:-10;
  }

  @media screen and (max-width: 768px) {
    & {
      display: none;
    }
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  margin-bottom: 20px;
`;

export const MealLinksContainer = styled.div`
  margin-top: 20px;
  width: 100%;
`;

export default SideBar;

import { CloseCircleOutlined } from "@ant-design/icons";
import { Button, List } from "antd";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../context/Context";
import SearchTab from "./SearchTab";

const SideBar = () => {
  const { renderCategoryList } = useContext(AppContext);

  return (
    <SidebarContainer>
      <TitleContainer>
        <h3>Categories</h3>
      </TitleContainer>
      <SearchTab />
      <MealLinksContainer>{renderCategoryList()}</MealLinksContainer>
      
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  width: 25%;
  padding: 2rem 1rem;
  position: fixed;
  top: 65px;
  bottom: 0;
  overflow-y: scroll;

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
`;

export default SideBar;

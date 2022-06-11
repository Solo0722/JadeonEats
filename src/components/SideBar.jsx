import { Button, List } from "antd";
import React from "react";
import styled from "styled-components";
import SearchTab from "./SearchTab";

const categories = [
  "Most Popular",
  "Picked for you",
  "Breakfast",
  "Lunch",
  "Supper",
  "Snacks",
  "Desserts",
  "Continental",
  "Local",
];

const SideBar = () => {
  return (
    <SidebarContainer>
      <h2>Stores</h2>
      <SearchTab />
      <MealLinksContainer>
        <List>
          {categories.map((cat) => (
            <List.Item>
              <Button type="text" block style={{ textAlign: "left" }}>
                {cat}
              </Button>
            </List.Item>
          ))}
        </List>
      </MealLinksContainer>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  width: 25%;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem 1rem;

  @media screen and (max-width: 768px) {
    & {
      display: none;
    }
  }
`;

export const MealLinksContainer = styled.div`
  margin-top: 20px;
`;

export default SideBar;

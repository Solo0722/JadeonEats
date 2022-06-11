import { Button, Drawer, List } from "antd";
import { CloseCircleOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { MealLinksContainer } from "./SideBar";
import SearchTab from "./SearchTab";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

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

const Drawerbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const location = useLocation();

  return (
    <DrawerContainer>
      <Button
        type="text"
        onClick={showDrawer}
        style={{
          marginRight: 0,
          display: `${location.pathname == "/" ? "none" : "block"}`,
        }}
        icon={<MenuOutlined />}
      />

      <Drawer
        title="Store"
        placement="right"
        onClose={onClose}
        visible={visible}
        width={"80%"}
        closeIcon={<CloseCircleOutlined color={"#fff"} />}
        drawerStyle={{ backgroundColor: "#181820", color: "#fff" }}
        headerStyle={{
          backgroundColor: "#181820",
          color: "#fff",
          borderBottom: "0px",
        }}
      >
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
      </Drawer>
    </DrawerContainer>
  );
};

const DrawerContainer = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    & {
      display: flex;
    }
  }
`;

export default Drawerbar;

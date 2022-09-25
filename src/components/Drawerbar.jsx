import { Button, Drawer } from "antd";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import { MealLinksContainer } from "./SideBar";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { RenderCategoryList } from "../utils/data";

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
        icon={<BiMenu size={20} />}
        type="text"
        onClick={showDrawer}
        style={{
          background: "#fff",
          color: "#000",
          cursor: "pointer",
          marginRight: "10px",
          display: `${location.pathname == "/" ? "none" : "block"}`,
        }}
      />

      <Drawer
        headerStyle={{ display: "none" }}
        placement="left"
        onClose={onClose}
        visible={visible}
        width={"70%"}
        bodyStyle={{
          width: "100%",
          paddingLeft: "0px",
          paddingRight: "0px",
          paddingTop: "0px",
        }}
      >
        <MealLinksContainer>{RenderCategoryList()}</MealLinksContainer>
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

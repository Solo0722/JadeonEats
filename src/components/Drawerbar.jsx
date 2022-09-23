import { Avatar, Button, Drawer } from "antd";
import { BiMenu } from "react-icons/bi";
import { useContext, useState } from "react";
import { MealLinksContainer } from "./SideBar";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { AppContext } from "../context/Context";

const Drawerbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const location = useLocation();

  const { renderCategoryList } = useContext(AppContext);

  return (
    <DrawerContainer>
      <Avatar
        icon={<BiMenu style={{ marginTop: "5px" }} />}
        size="small"
        shape="square"
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
        <MealLinksContainer>{renderCategoryList()}</MealLinksContainer>
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

import { Button, Drawer, List } from "antd";
import { CloseCircleOutlined, MenuOutlined } from "@ant-design/icons";
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
        headerStyle={{ display: "none" }}
        placement="left"
        onClose={onClose}
        visible={visible}
        width={"70%"}
        bodyStyle={{ width: "100%", paddingLeft: "0px", paddingRight: "0px" }}
        closeIcon={<CloseCircleOutlined />}
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

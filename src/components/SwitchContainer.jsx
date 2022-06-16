import { Switch } from "antd";
import React from "react";
import { HiMoon, HiSun } from "react-icons/hi";

const SwitchContainer = () => {
  return (
    <Switch
      checkedChildren={<HiMoon />}
      unCheckedChildren={<HiSun />}
      style={{
        margin: "0 10px",
      }}
    />
  );
};

export default SwitchContainer;

import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Switch, Button } from "antd";

export default function SwitchTheme() {
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const { switcher, themes } = useThemeSwitcher();

  const switchTheme = () => {
    setIsDarkMode(!JSON.parse(localStorage.getItem("isDarkMode")));
    switcher({
      theme: JSON.parse(localStorage.getItem("isDarkMode"))
        ? themes.light
        : themes.dark,
    });
  };

  return (
    <div className="App">
      <Button
        type="ghost"
        icon={
          isDarkMode ? (
            <FiMoon style={{ marginTop: "5px" }} />
          ) : (
            <FiSun style={{ marginTop: "5px" }} />
          )
        }
        onClick={switchTheme}
      />
    </div>
  );
}
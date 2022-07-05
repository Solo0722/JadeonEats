import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
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
        icon={
          isDarkMode ? (
            <FaMoon style={{ marginTop: "5px" }} />
          ) : (
            <FaSun style={{ marginTop: "5px" }} />
          )
        }
        onClick={switchTheme}
      />
    </div>
  );
}

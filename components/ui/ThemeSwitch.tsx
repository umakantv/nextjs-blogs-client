import { useContext } from "react";
import { IconButton } from "./";

import CustomThemeContext from "../../contexts/theme";
import Icon from "../icons";

const ThemeSwitch = () => {
  const { themeType, switchTheme } = useContext(CustomThemeContext);

  return (
    <IconButton
      color="primary"
      onClick={() => {
        switchTheme(themeType === "light" ? "dark" : "light");
      }}
    >
      <Icon name={themeType === "light" ? "dark_mode" : "light_mode"} />
    </IconButton>
  );
};

export default ThemeSwitch;

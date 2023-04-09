import React from "react";
import "./App.css";
import Background from "./lib/BackGround";
import ThemeProvider from "./lib/ThemeProvider";
import ColorBoxes from "./lib/ColorBoxes";
import { DarkModeSwitcher } from "./lib/DarkModeSwitcher";

export const RTB_Provider = () => {
  return (
    <ThemeProvider>
      <Background>
        <ColorSwitcher />
      </Background>
    </ThemeProvider>
  );
};

export const ColorSwitcher = () => {
  return <ColorBoxes />;
};


export default { RTB_Provider,ColorSwitcher, DarkModeSwitcher};

import React,{ useContext, useEffect } from "react";
import { ThemeContext } from "./ThemeProvider";

function Background({ children, ...props }) {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode == "enable") {
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <div
      className={`inset-0   ${
        theme.backGroundSize == "half"
          ? "h-[50vh]"
          : theme.backGroundSize == "header"
          ? "h-0"
          : ""
      }  fixed  ${theme.backGround} ${theme.gradiant}`}
    >
      <div className="dark:bg-[rgba(0,0,0,0.39)] dark:text-white overflow-y-auto md:scrollbar-thin inset-0 fixed">
        {children}
      </div>
      <div className={`w-full  h-full  ${theme.art} `}></div>
    </div>
  );
}

export default Background;
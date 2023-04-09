import { getFromLocalStorage, setInLocalStorage } from "./localstorage";

export const toggleDarkMode = () => {
  if (darkModeStatus()) {
    disableDarkMode();
    return false;
  } else {
    enableDarkMode();
    return true;
  }
};

export const enableDarkMode = () => {
  document.documentElement.classList.add("dark");
  setInLocalStorage("darkMode", "enable");
};

export const disableDarkMode = () => {
  document.documentElement.classList.remove("dark");
  setInLocalStorage("darkMode", "disable");
};

export const darkModeStatus = () => {
  const darkMode = getFromLocalStorage("darkMode") || "disable";
  if (darkMode == "enable") {
    return true;
  } else {
    return false;
  }
};

const keyGenerator = (str) => {
    return (
      "RTB_" + str + "_087456724363536637GGDHDD33VDVDFDFFDDDJDGGDSDFSFFSFFFFFF"
    );
  };
  
  export const getFromLocalStorage = (key) => {
    try {
      return JSON.parse(localStorage.getItem(keyGenerator(key)));
    } catch (e) {
      return "";
    }
  };
  
  export const setInLocalStorage = (key, value) => {
    try {
      localStorage.setItem(keyGenerator(key), JSON.stringify(value));
    } catch (e) {}
  };
  
  export const removeFromLocalStorage = (key) => {
    try {
      localStorage.removeItem(keyGenerator(key));
    } catch (e) {}
  };
  
  export const clearLocalStorage = () => {
    try {
      localStorage.clear();
    } catch (e) {}
  };
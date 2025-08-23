"use client";

import { useEffect, useState } from "react";

export const ChangeTheme = () => {
  const [isWhiteBlack, setIsWhiteBlack] = useState(true);

  const setTheme = (value: boolean) => {
    document.documentElement.setAttribute("data-theme", value ? "dark" : "");
  };

  useEffect(() => {
    setTheme(isWhiteBlack);
  }, []);

  const handleLightDarkMode = () => {
    setIsWhiteBlack((v) => {
      const newValue = !v;
      setTheme(newValue);
      return newValue;
    });
  };

  return (
    <button
      className={`w-16 h-8 flex items-center rounded-full p-1 duration-300 ${
        isWhiteBlack ? "bg-blue-600" : "bg-gray-300"
      }`}
      onClick={() => handleLightDarkMode()}
      aria-pressed={isWhiteBlack}
    >
      <span
        className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ${
          isWhiteBlack ? "" : "translate-x-8"
        }`}
      ></span>
    </button>
  );
};

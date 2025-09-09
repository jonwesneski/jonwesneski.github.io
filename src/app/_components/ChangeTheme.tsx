"use client";

import { mergeCss } from "@src/utils";
import { ClassValue } from "clsx";
import { useEffect, useState } from "react";

interface IChangeThemeProps {
  className?: ClassValue;
}
export const ChangeTheme = (props: IChangeThemeProps) => {
  const [isWhiteBlack, setIsWhiteBlack] = useState(true);

  const setTheme = (value: boolean) => {
    document.documentElement.setAttribute("data-theme", value ? "dark" : "");
  };

  useEffect(() => {
    setTheme(isWhiteBlack);
  }, [isWhiteBlack]);

  const handleLightDarkMode = () => {
    setIsWhiteBlack((v) => {
      const newValue = !v;
      setTheme(newValue);
      return newValue;
    });
  };

  return (
    <div>
      <span className="block mx-auto w-fit">Theme</span>
      <button
        className={mergeCss(
          "w-16 h-3 flex items-center rounded-full p-1 mt-1 duration-300",
          {
            "bg-orange-500": isWhiteBlack,
            "bg-gray-300": !isWhiteBlack,
          },
          props.className
        )}
        onClick={() => handleLightDarkMode()}
        aria-pressed={isWhiteBlack}
      >
        <span
          className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ${
            isWhiteBlack ? "" : "translate-x-8"
          }`}
        ></span>
      </button>
    </div>
  );
};

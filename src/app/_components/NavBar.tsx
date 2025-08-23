"use client";

import useMediaQuery from "@src/hooks/useMediaQuery";
import { mergeCss } from "@src/utils";

export const NavBar = ({ children }: { children: React.ReactNode }) => {
  const { width, breakpointPxs } = useMediaQuery();
  return (
    <nav
      className={mergeCss(
        "fixed left-0 right-0 z-50 flex py-4 justify-center items-center gap-4 bg-background text-text",
        {
          "bottom-0": width < breakpointPxs.md,
          "top-0": width >= breakpointPxs.md,
        }
      )}
    >
      {children}
    </nav>
  );
};

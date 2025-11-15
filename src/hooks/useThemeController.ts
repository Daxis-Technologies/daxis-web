import { useEffect, useState } from "react";
import type { ThemeName } from "../App";

export type ThemeStructure = {
  mode: "light" | "dark";
  colors: {
    background: string;
    surface: string;
    surfaceMuted: string;
    text: string;
    textMuted: string;
    primary: string;
    border: string;
    accentSoft: string;
  };
};

export const purple = "#a855f7";

export const lightTheme: ThemeStructure = {
  mode: "light",
  colors: {
    background: "#f9fafb",
    surface: "#ffffff",
    surfaceMuted: "#f3f4f6",
    text: "#111827",
    textMuted: "#6b7280",
    primary: purple,
    border: "#e5e7eb",
    accentSoft: "rgba(168, 85, 247, 0.06)",
  },
} as const;

export const darkTheme: ThemeStructure = {
  mode: "dark",
  colors: {
    background: "#020617",
    surface: "#020617",
    surfaceMuted: "#020617",
    text: "#e5e7eb",
    textMuted: "#9ca3af",
    primary: purple,
    border: "rgba(148, 163, 184, 0.4)",
    accentSoft: "rgba(168, 85, 247, 0.06)",
  },
} as const;

const STORAGE_KEY_THEME = "d-axis-theme";
const STORAGE_KEY_FONT_SCALE = "d-axis-font-scale";

export const useThemeController = () => {
  const [theme, setTheme] = useState<ThemeName>("dark");
  const [fontScale, setFontScale] = useState(1);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(
      STORAGE_KEY_THEME
    ) as ThemeName | null;
    const storedScale = window.localStorage.getItem(STORAGE_KEY_FONT_SCALE);

    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
    }

    if (storedScale) {
      const parsed = Number(storedScale);
      if (!Number.isNaN(parsed) && parsed >= 0.9 && parsed <= 1.3) {
        setFontScale(parsed);
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY_THEME, theme);
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY_FONT_SCALE, String(fontScale));
  }, [fontScale]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const increaseFont = () => {
    setFontScale((prev) => Math.min(1.3, +(prev + 0.1).toFixed(2)));
  };

  const decreaseFont = () => {
    setFontScale((prev) => Math.max(0.9, +(prev - 0.1).toFixed(2)));
  };

  const themeObject = theme === "dark" ? darkTheme : lightTheme;

  return {
    theme,
    themeObject,
    toggleTheme,
    fontScale,
    increaseFont,
    decreaseFont,
  };
};

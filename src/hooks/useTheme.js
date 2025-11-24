import { useEffect, useState } from "react";

export function useTheme() {
  // cek tema terakhir dari localStorage, default: "dark"
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    // set atribut di body: data-theme="dark" / "light"
    document.body.setAttribute("data-theme", theme);
    // simpan ke localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}

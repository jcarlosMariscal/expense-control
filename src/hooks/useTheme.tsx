import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const htmlElement = document.documentElement;
    const checkTheme = () => {
      const isDark = htmlElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    };

    // Inicialmente verifica el tema
    checkTheme();
    // Observa cambios en las clases del elemento html
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          checkTheme();
        }
      });
    });

    mutationObserver.observe(htmlElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Limpieza al desmontar
    return () => mutationObserver.disconnect();
  }, []);
  return theme;
};

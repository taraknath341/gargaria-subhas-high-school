function renderTheme() {
   const theme = localStorage.getItem("theme");
   if (theme === "light" || theme === "dark") {
      document.documentElement.setAttribute("data-theme", theme);
   } else {
      document.documentElement.removeAttribute("data-theme");
   }
}

export default renderTheme;

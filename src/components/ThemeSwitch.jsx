import { useState } from "react";

const ThemeSwitch = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  document.body.setAttribute("data-bs-theme", isDarkTheme ? "dark" : "light");

  return (
    <div role="button" onClick={() => setIsDarkTheme(!isDarkTheme)}>
      {isDarkTheme ? <i className="bi bi-moon fs-4"></i> : <i className="bi bi-sun fs-3"></i>}
    </div>
  );
};

export default ThemeSwitch;
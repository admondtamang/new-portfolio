// import { useState } from "react";
// import { DarkModeSwitch } from "react-toggle-dark-mode";
// import useDarkMode from "../../hooks/useDarkMode";

// export default function ToggleDarkMode() {
//   const [colorTheme, setTheme] = useDarkMode();
//   const [darkSide, setDarkSide] = useState(
//     colorTheme === "light" ? true : false
//   );

//   const toggleDarkMode = (checked: boolean) => {
//     // eslint-disable-next-line
//     setTheme(colorTheme);
//     setDarkSide(checked);
//   };

//   return (
//     <>
//       <DarkModeSwitch
//         style={{ marginBottom: "2rem" }}
//         checked={darkSide}
//         onChange={toggleDarkMode}
//         size={30}
//       />
//     </>
//   );
// }

import { createContext, Dispatch } from "react";

interface ThemeContext {
    theme: string;
    setTheme: (value: string) => void
}

const themeContext = createContext<ThemeContext>({
    theme: "dark",
    setTheme: () => {}
})

export default themeContext;
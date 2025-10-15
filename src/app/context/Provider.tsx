'use client'

import { useState } from "react";
import themeContext from "./ThemeContext";

export default function ThemeProvider({children}: {children: React.ReactNode}) {
    const [theme, setTheme] = useState('dark')
    return (
        <themeContext.Provider value={{theme, setTheme}}>
            {children}
        </themeContext.Provider>
    )
}
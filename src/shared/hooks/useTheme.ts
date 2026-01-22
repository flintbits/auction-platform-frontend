import { useEffect, useState } from "react";

export type Theme = 'white' | 'black' | 'dark'

const STORAGE_KEY = "theme";

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(() => {
        const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
        return stored ?? 'white'
    })


    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(STORAGE_KEY, theme)
    }, [theme])

    return { theme, setTheme }
}
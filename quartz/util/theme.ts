export interface ColorScheme {
  light: string
  lightgray: string
  gray: string
  darkgray: string
  dark: string
  yellow: string
  primary: string
  secondary: string
  tertiary: string
  linkcolor: string
  linkbackground: string
  highlight: string
}

interface Colors {
  lightMode: ColorScheme
  darkMode: ColorScheme
}

export interface Theme {
  typography: {
    header: string
    body: string
    code: string
    bodyfontweight: string

  }
  cdnCaching: boolean
  colors: Colors
  fontOrigin: "googleFonts" | "local"
}

export type ThemeKey = keyof Colors

const DEFAULT_SANS_SERIF =
  '-apple-system, Roboto, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
const DEFAULT_MONO = "Roboto Mono, ui-monospace, SFMono-Regular, SF Mono, Menlo, monospace"

export function googleFontHref(theme: Theme) {
  const { code, header, body } = theme.typography
  return `https://fonts.googleapis.com/css2?family=${code}&family=${header}:wght@400;700&family=${body}:ital,wght@0,400;0,600;1,400;1,600&display=swap`
}

export function joinStyles(theme: Theme, ...stylesheet: string[]) {
  return `
${stylesheet.join("\n\n")}

:root {
  --light: ${theme.colors.lightMode.light};
  --lightgray: ${theme.colors.lightMode.lightgray};
  --gray: ${theme.colors.lightMode.gray};
  --darkgray: ${theme.colors.lightMode.darkgray};
  --dark: ${theme.colors.lightMode.dark};
  --yellow: ${theme.colors.lightMode.yellow};
  --primary: ${theme.colors.lightMode.primary};
  --secondary: ${theme.colors.lightMode.secondary};
  --tertiary: ${theme.colors.lightMode.tertiary};
  --linkcolor: ${theme.colors.lightMode.linkcolor};
  --linkbackground: ${theme.colors.lightMode.linkbackground};
  --highlight: ${theme.colors.lightMode.highlight};
  --headerFont: "${theme.typography.lightMode.header}", ${DEFAULT_SANS_SERIF};
  --bodyFont: "${theme.typography.lightMode.body}", ${DEFAULT_SANS_SERIF};
  --codeFont: "${theme.typography.lightMode.code}", ${DEFAULT_MONO};
  --bodyfontweight: "${theme.typography.lightMode.bodyfontweight}", 200; 

}

:root[saved-theme="dark"] {
  --light: ${theme.colors.darkMode.light};
  --lightgray: ${theme.colors.darkMode.lightgray};
  --gray: ${theme.colors.darkMode.gray};
  --darkgray: ${theme.colors.darkMode.darkgray};
  --dark: ${theme.colors.darkMode.dark};
  --yellow: ${theme.colors.darkMode.yellow};
  --primary: ${theme.colors.darkMode.primary};
  --secondary: ${theme.colors.darkMode.secondary};
  --tertiary: ${theme.colors.darkMode.tertiary};
  --linkcolor: ${theme.colors.darkMode.linkcolor};
  --linkbackground: ${theme.colors.darkMode.linkbackground};
  --highlight: ${theme.colors.darkMode.highlight};
  --bodyFont: "${theme.typography.darkMode.body}", ${DEFAULT_SANS_SERIF};
  --bodyfontweight: "${theme.typography.darkMode.bodyfontweight}", 100; 

}
`
}

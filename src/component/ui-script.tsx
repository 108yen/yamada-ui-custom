"use client"
import { config } from "@/theme"
import { ColorModeScript, ThemeSchemeScript } from "@yamada-ui/react"

export const UIScript = () => {
  return (
    <>
      <ThemeSchemeScript initialThemeScheme={config.initialThemeScheme} />
      <ColorModeScript initialColorMode={config.initialColorMode} />
    </>
  )
}

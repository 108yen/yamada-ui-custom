"use client"

import { config } from "@/theme"
import { ColorModeScript, ThemeSchemeScript } from "@yamada-ui/react"

export function YamadaUIScripts() {
  const { initialThemeScheme, initialColorMode } = { ...config }

  return (
    <>
      <ThemeSchemeScript initialThemeScheme={initialThemeScheme} />
      <ColorModeScript initialColorMode={initialColorMode} />
    </>
  )
}

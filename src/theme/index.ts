"use client"

import { UsageTheme, extendConfig, extendTheme } from "@yamada-ui/react"
import components from "./components"
import styles from "./styles"
import tokens from "./tokens"
import { customConfig } from "./config"
import { themeSchemes } from "./semantics"

export const customTheme: UsageTheme = {
  styles,
  components,
  themeSchemes,
  ...tokens,
}

export const theme = extendTheme(customTheme)()
export const config = extendConfig(customConfig)

import { CSSUIObject } from "@yamada-ui/react"

export const headerStyles: Record<string, CSSUIObject> = {
  title: {
    fontSize: "2xl",
    fontWeight: "semibold",
    whiteSpace: "nowrap",
    color: ["primary.700", "primary.100"],
  },
  colorBox: {
    minW: { base: "12", md: "10" },
    minH: { base: "12", md: "10" },
    rounded: "md",
    boxShadow: "inner",
    outline: "0",
    _focusVisible: { shadow: "outline" },
    transitionProperty: "common",
    transitionDuration: "slower",
  },
}

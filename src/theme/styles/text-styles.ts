import { TextStyles } from "@yamada-ui/react"

export const textStyles: TextStyles = {
  gradient: {
    fontSize: "5xl",
    bgGradient: [
      "linear(to-r, himmel.900, frieren.700)",
      "linear(to-r, himmel.500, frieren.700)",
    ],
    bgClip: "text",
    w: "fit-content",
  },
}

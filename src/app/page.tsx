"use client"
import { Header } from "@/component/layouts/header"
import { Button, Center, Container, Heading, useTheme } from "@yamada-ui/react"

export default function Home() {
  const { changeThemeScheme } = useTheme()

  return (
    <>
      <Header />
      <Center>
        <Container size="sm" variant="with-border-dotted" layerStyle="serie">
          <Button
            colorScheme="frieren"
            onClick={() => {
              changeThemeScheme("frieren")
            }}
          >
            frieren
          </Button>
          <Button
            colorScheme="fern"
            onClick={() => {
              changeThemeScheme("fern")
            }}
          >
            fern
          </Button>
          <Button
            colorScheme="stark"
            onClick={() => {
              changeThemeScheme("stark")
            }}
          >
            stark
          </Button>
          <Button
            colorScheme="himmel"
            onClick={() => {
              changeThemeScheme("himmel")
            }}
          >
            himmel
          </Button>
          <Button
            colorScheme="heiter"
            onClick={() => {
              changeThemeScheme("heiter")
            }}
          >
            heiter
          </Button>
          <Button
            colorScheme="eisen"
            onClick={() => {
              changeThemeScheme("eisen")
            }}
          >
            eisen
          </Button>
          <Button
            colorScheme="flamme"
            onClick={() => {
              changeThemeScheme("flamme")
            }}
          >
            flamme
          </Button>
          <Button
            colorScheme="serie"
            onClick={() => {
              changeThemeScheme("serie")
            }}
          >
            serie
          </Button>
          <Heading textStyle="gradient">
            ありがとうフリーレン。君のおかげで最後にとても楽しい冒険ができた。綺麗だ。
          </Heading>
        </Container>
      </Center>
    </>
  )
}

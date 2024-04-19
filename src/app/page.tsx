import { Header } from "@/component/layouts/header"
import { Button, Center, Container, Heading } from "@yamada-ui/react"

export default function Home() {
  return (
    <>
      <Header />
      <Center>
        <Container size="sm" variant="with-border-dotted" layerStyle="serie">
          <Button colorScheme="frieren">frieren</Button>
          <Button colorScheme="fern">fern</Button>
          <Button colorScheme="stark">stark</Button>
          <Button colorScheme="himmel">himmel</Button>
          <Button colorScheme="heiter">heiter</Button>
          <Button colorScheme="eisen">eisen</Button>
          <Button colorScheme="flamme">flamme</Button>
          <Button colorScheme="serie">serie</Button>
          <Heading textStyle="gradient">
            ありがとうフリーレン。君のおかげで最後にとても楽しい冒険ができた。綺麗だ。
          </Heading>
        </Container>
      </Center>
    </>
  )
}

"use client"
import { useRouter } from "next/navigation"
import Image from "next/image"
import ExpandableList from "@/components/challenge2/ExpandableList"
import BackgroundImage from "@/assets/challenge2/images/background-pattern-desktop.svg"
import styled from "styled-components"
import StarIcon from "@/assets/challenge2/images/icon-star.svg"

const Container = styled.div`
  display: flex;
  height: 80vh;
  width: 100%;
  background-color: hsl(275, 100%, 97%);

  @media screen and (max-width: 540px) {
    height: 100vh;
  }
`
const Card = styled.div`
  margin: auto;
  width: 35rem;
  border: solid 1px black; // comment this later
  border-radius: 15px;
  padding: 1.5rem;
  background-color: rgb(255, 255, 255);
  z-index: 1;

  @media screen and (max-width: 540px) {
    margin: auto 2rem;
  }
`

const CardHeader = styled.div`
  align-items: center;
  display: flex;
  padding: 1rem 0;
`

const CardTtitle = styled.h1`
  font-family: "Roboto", sans-serif;
`
const CardBody = styled.div`
  padding: 1rem 0;
`

export default function Page() {
  return (
    <>
      <Container>
        <Image src={BackgroundImage} alt="BG" style={bg_img}></Image>
        <Card>
          <CardHeader>
            <Image src={StarIcon} alt="Star" style={star_icon} />
            <CardTtitle>FAQs</CardTtitle>
          </CardHeader>
          <CardBody>
            <ExpandableList textContent="What is ReactJs?">
              React is the library for web and native user interfaces. Build
              user interfaces out of individual pieces called components written
              in JavaScript.
            </ExpandableList>
            <ExpandableList textContent="What is Next.js">
              Next.js is a React framework that enables several extra features,
              including server-side rendering and generating static websites.
            </ExpandableList>
            <ExpandableList textContent="What is VueJs">
              The Progressive JavaScript Framework · Approachable. Builds on top
              of standard HTML, CSS and JavaScript with intuitive API and
              world-class documentation.
            </ExpandableList>
            <ExpandableList textContent="What is NuxtJs">
              Nuxt is an open source framework that makes web development
              intuitive and powerful. Create performant and production-grade
              full-stack web apps and websites with confidence.
            </ExpandableList>
          </CardBody>
        </Card>
      </Container>
    </>
  )
}
const bg_img = {
  width: "100%",
  position: "absolute",
  top: 74,
  objectFit: "cover",
}
const star_icon = {
  marginRight: "1rem",
}

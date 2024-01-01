"use client"
import Image from "next/image"
import ExpandableList from "@/components/challenge2/ExpandableList"
import BackgroundImage from "@/assets/challenge2/images/background-pattern-desktop.svg"
import * as Style from "@/assets/styles/n-challenge2"

export default function Page() {
  return (
    <>
      <Style.Container>
        <Image src={BackgroundImage} alt="BG" style={bg_img}></Image>
        <Style.Card>
          <Style.CardHeader>
            {/* <Image src={StarIcon} alt="Star" style={star_icon} /> */}
            <Style.StarIcon />
            <Style.CardTitle>FAQs</Style.CardTitle>
          </Style.CardHeader>
          <Style.CardBody>
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
          </Style.CardBody>
        </Style.Card>
      </Style.Container>
    </>
  )
}
const bg_img = {
  width: "100%",
  position: "absolute",
  top: 90,
  objectFit: "cover",
}

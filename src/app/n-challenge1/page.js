"use client"

import Image from "next/image"
import Avatar from "@/assets/challenge1/image-avatar.webp"
import * as Style from "@/assets/styles/n-challenge1"

export default function Page() {
  return (
    <>
      <Style.Container>
        <Style.Card>
          <Style.CardBody>
            <Style.CardHeader />
            <Style.Button>Learning</Style.Button>
            <h5>Publish 21 Dec 2023</h5>
            <Style.CardTextHeading>
              HTML & CSS foundations
            </Style.CardTextHeading>
            <Style.CardBodyText>
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </Style.CardBodyText>
          </Style.CardBody>
          <Style.CardFooter>
            <Image src={Avatar} style={avatar} alt="Avatar" />
            <p>Greg Hooper</p>
          </Style.CardFooter>
        </Style.Card>
      </Style.Container>
    </>
  )
}

const avatar = {
  marginRight: "1rem",
  width: "3rem",
  height: "3rem",
}

"use client"

import styles from "@/assets/challenge1/styles.module.css"
import Image from "next/image"
import CardHeaderImg from "@/assets/challenge1/images/illustration-article.svg"
import Avatar from "@/assets/challenge1/images/image-avatar.webp"
import * as Style from "@/assets/styles/n-challenge1"

export default function Page() {
  return (
    <>
      <Style.Container>
        <Style.Card>
          <Image
            className={styles.card_header}
            src={CardHeaderImg}
            alt="Card Header"
          />
          <Style.CardBody>
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
            <Image src={Avatar} className={styles.avatar} alt="Avatar" />
            <p>Greg Hooper</p>
          </Style.CardFooter>
        </Style.Card>
      </Style.Container>
    </>
  )
}

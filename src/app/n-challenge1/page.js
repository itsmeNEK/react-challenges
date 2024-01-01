"use client"

import styles from "@/assets/challenge1/styles.module.css"
import Image from "next/image"
import CardHeaderImg from "@/assets/challenge1/images/illustration-article.svg"
import Avatar from "@/assets/challenge1/images/image-avatar.webp"

import styled from "styled-components"

const Container = styled.div`
  display: flex;
  height: 80vh;
  width: 100%;
  background-color: rgb(255, 204, 0);
  @media screen and (max-width: 540px) {
    height: 100vh;
  }
`
const Card = styled.div`
  margin: auto;
  width: 25rem;
  box-shadow: 20px 20px 0px black;
  border: solid 1px black;
  border-radius: 15px;
  padding: 1.5rem;
  background-color: rgb(255, 255, 255);

  @media screen and (max-width: 540px) {
    margin: auto 2rem;
  }
`
const CardBody = styled.div`
  padding: 2rem 0 0.5rem 0;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
`
const Button = styled.button`
  padding: 0.5rem 1.8rem;
  border: none;
  border-radius: 5px;
  font-weight: 800;
  background-color: rgb(255, 204, 0);
`
const CardTextHeading = styled.a`
  font-size: 1.8rem;
  padding: 0 !important;
  color: rgb(255, 204, 0);
  font-weight: 600;

  @media screen and (max-width: 540px) {
    font-size: 1.2rem;
  }
`

const CardBodyText = styled.p`
  font-size: 1.2rem;
  color: rgb(155, 155, 155);

  @media screen and (max-width: 540px) {
    font-size: 0.8rem;
  }
`
const CardFooter = styled.div`
  display: flex;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
`

export default function Page() {
  return (
    <>
      <Container>
        <Card>
          <Image
            className={styles.card_header}
            src={CardHeaderImg}
            alt="Card Header"
          />
          <CardBody>
            <Button>Learning</Button>
            <h5>Publish 21 Dec 2023</h5>
            <CardTextHeading>HTML & CSS foundations</CardTextHeading>
            <CardBodyText>
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </CardBodyText>
          </CardBody>
          <CardFooter>
            <Image src={Avatar} className={styles.avatar} alt="Avatar" />
            <p>Greg Hooper</p>
          </CardFooter>
        </Card>
      </Container>
      {/* <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.card_header}>
            <Image src={CardHeader}
            alt="Card Header" />
          </div>
          <div className={styles.card_body}>
            <button className={styles.button}>Learning</button>
            <h5>Publish 21 Dec 2023</h5>
            <a href="">
              <h3>HTML & CSS foundations</h3>
            </a>
            <p className={styles.body_text}>
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </p>
          </div>
          <div className={styles.card_footer}>
            <Image src={Avatar} className={styles.avatar} alt="Avatar"  />
            <p>Greg Hooper</p>
          </div>
        </div>
      </div> */}
    </>
  )
}

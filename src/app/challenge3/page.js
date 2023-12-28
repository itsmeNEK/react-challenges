"use client"

import React from "react"
import styled from "styled-components"
import SideImage from "@/assets/challenge3/images/illustration-sign-up-desktop.svg"
import Image from "next/image"

const SuccessIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 64 64"
      style={{ marginRight: "10px" }}
    >
      <defs>
        <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FF6A3A" />
          <stop offset="100%" stopColor="#FF527B" />
        </linearGradient>
      </defs>
      <g fill="none">
        <circle cx="32" cy="32" r="32" fill="url(#a)" />
        <path
          stroke="#FFF"
          strokeWidth="4"
          d="m18.286 34.686 8.334 7.98 19.094-18.285"
        />
      </g>
    </svg>
  )
}

const Container = styled.div`
  display: flex;
  height: 80vh;
  width: 100%;
  background-color: hsl(234, 29%, 20%);
  @media screen and (max-width: 540px) {
    height: 100vh;
  }
`

const Card = styled.div`
  display: flex;
  margin: auto;
  width: 50rem;
  border-radius: 25px;
  padding: 1rem;
  background-color: rgb(255, 255, 255);
`

const CardLeft = styled.div`
  width: 60%;
  padding: 0 40px;
  margin: auto;
`
const CardTitle = styled.h1`
  font-weight: bold;
  font-size: 3rem;
  font-family: "roboto", sans-serif;
`
const CardText = styled.p`
  font-family: "roboto", sans-serif;
`
const List = styled.ul`
  list-style: none outside;
  font-family: "roboto", sans-serif;
  margin-left: -40px;
`
const ListItem = styled.li`
  align-items: center;
  display: flex;
  padding-bottom: 5px;
  margin: 5px 0;
`
const ListItemContent = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
]

const renderListItemContent = ListItemContent.map((item) => (
  <ListItem key={item}>
    <SuccessIcon />
    {item}
  </ListItem>
))
export default function page() {
  return (
    <Container>
      <Card>
        <CardLeft>
          <CardTitle>Stay updated!</CardTitle>
          <CardText>
            Join 60,000+ product manager receiving monthly updates on:
          </CardText>
          <List>{renderListItemContent}</List>
        </CardLeft>
        <div>
          <Image src={SideImage} alt="image" style={side_image}></Image>
        </div>
      </Card>
    </Container>
  )
}

const side_image = {
  width: "100%",
  height: "550px",
  borderRadius: "none",
  top: 100,
  objectFit: "cover",
}

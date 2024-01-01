"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
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
  border-radius: 25px;
  padding: 1rem;
  background-color: rgb(255, 255, 255);
`
const LabelContainer = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 700;
`

const CardLeft = styled.div`
  width: 28rem;
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
const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 8px;
  color: #333;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #555;
    outline: none;
  }
`

const FormLabel = styled.label`
  font-family: "roboto", sans-serif;
`
const ErrorMessage = styled.label`
  font-family: "roboto", sans-serif;
  color: red;
`

const StyledButton = styled.button`
  background-color: hsl(234, 29%, 20%);
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: hsl(4, 100%, 67%);
    box-shadow: 0 5px 15px hsl(4, 100%, 67%);
  }
`

const ListItemContent = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
]

export default function page() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [isValid, setIsValid] = useState(false)

  const renderListItemContent = ListItemContent.map((item) => (
    <ListItem key={item}>
      <SuccessIcon />
      {item}
    </ListItem>
  ))

  const validateEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (re.test(String(email).toLowerCase())) {
      setErrorMessage("")
      return true
    }
    setErrorMessage("Valid email required")
    return false
  }
  const handleInputChange = (e) => {
    setEmail(e.target.value)
    setIsValid(validateEmail(e.target.value))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsValid(validateEmail(e.target.value))
    if (isValid) {
      router.push(`/challenge3/confirm?data=${encodeURIComponent(email)}`)
    }
  }
  return (
    <Container>
      <Card>
        <CardLeft>
          <CardTitle>Stay updated!</CardTitle>
          <CardText>
            Join 60,000+ product manager receiving monthly updates on:
          </CardText>
          <List>{renderListItemContent}</List>
          <form onSubmit={handleSubmit}>
            <LabelContainer>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <ErrorMessage>{errorMessage}</ErrorMessage>
            </LabelContainer>
            <StyledInput
              style={!isValid && email ? IsNotValidStyle : IsValidStyle}
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              placeholder="example@example.com"
            />
            <StyledButton type="submit">
              Subscribe to monthly newsletter
            </StyledButton>
          </form>
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

const IsNotValidStyle = {
  backgroundColor: "#FFCCCC",
  border: "2px solid red",
}

const IsValidStyle = {
  border: "2px solid #ccc",
  backgroundColor: "#f8f8f8",
}

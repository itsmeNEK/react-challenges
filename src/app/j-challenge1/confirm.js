import React from "react"
import styled from "styled-components"

const CardConfirm = styled.div`
  display: block;
  margin: auto;
  width: 20rem;
  border-radius: 25px;
  padding: 2rem;
  background-color: rgb(255, 255, 255);
`
const SuccessIconBig = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
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

export default function confirm() {
  return (
    <div>
      <CardConfirm>
        <SuccessIconBig />
        <p style={CardTitleConfirm}>Thanks for subscribing!</p>
      </CardConfirm>
    </div>
  )
}

const CardTitleConfirm = {
  fontSize: "3rem",
  fontFamily: "roboto, sans-serif",
  fontWeight: "700",
}

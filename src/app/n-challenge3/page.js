"use client"
import * as Style from "@/assets/styles/n-challenge3"
import { useState } from "react"

export default function Page() {
  const [isSelected, setIsSelected] = useState(null)

  const selectButton = (e) => {
    setIsSelected(e)
  }

  const CircleButton = Array.from({ length: 5 }, (_, index) => (
    <Style.CircleButton
      key={index + 1}
      style={isSelected === `${index + 1}` ? selectedButton : notSelectedButton}
      onClick={() => selectButton(`${index + 1}`)}
    >
      {index + 1}
    </Style.CircleButton>
  ))

  return (
    <>
      <Style.Container>
        <Style.Card>
          <Style.StarIcon />
          <Style.CardTitle>How did we do?</Style.CardTitle>
          <Style.CardText>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </Style.CardText>
          <Style.ButtonContainer>{CircleButton}</Style.ButtonContainer>
          <Style.SubmitButton>submit</Style.SubmitButton>
        </Style.Card>
      </Style.Container>
    </>
  )
}

const selectedButton = {
  backgroundColor: "hsl(217, 12%, 63%)",
}
const notSelectedButton = {}

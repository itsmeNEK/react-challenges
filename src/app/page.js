"use client"
import * as Style from "@/assets/styles/homepage"
import BillImage from "@/assets/homepage/bill_bg.png"
import Image from "next/image"

export default function Page() {
  return (
    <>
      <Style.HeaderContainer>
        <Style.HeaderBG>
          <Style.IntroPatternRight />
          <Style.IntroPatternLeft />
          <Image src={BillImage} alt="bill" style={BillImg} />
        </Style.HeaderBG>
      </Style.HeaderContainer>
      <h1>dasdas</h1>
    </>
  )
}
const BillImg = {
  display: "flex",
  position: "absolute",
  width: "500px",
  height: "750px",
  top: 250,
  right: 150,
  zIndex: 1,
  borderRadius: "25px",
  boxShadow: "1px 1px 15px black",
}

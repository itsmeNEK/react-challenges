"use client"
import * as Style from "@/assets/styles/homepage"
import BillImage from "@/assets/homepage/bill_bg.png"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Page() {
  return (
    <>
      <Style.HeaderContainer>
        <Style.HeaderBG>
          <Style.IntroPatternRight />
          <Style.IntroPatternLeft />
          <Style.BillImgContainer
            initial={{ x: 700, y: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image src={BillImage} alt="bill" style={BillImg} />
          </Style.BillImgContainer>
          <Style.IntroContainer
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <Style.LineDivider />
            <Style.IntroTitle>
              Hi, <br /> I'm Bill
            </Style.IntroTitle>
            <Style.IntroParagraph>
              I'm a frontend developer with a passion for crafting engaging and
              user-friendly web experiences. My journey in the world of frontend
              development has equipped me with skills in HTML, CSS, and
              JavaScript, along with expertise in popular frameworks and
              libraries such as React.js.
            </Style.IntroParagraph>
          </Style.IntroContainer>
        </Style.HeaderBG>
      </Style.HeaderContainer>
      <Style.ObjectiveContainer
        initial={{ y: 300 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Style.LineDivider />
        <Style.SectionTitle>About React</Style.SectionTitle>
        <Style.ObjectivesGridContainer>
          <Style.Objectives>
            <Style.SnappyProcess />
            <Style.ObjectivesTitle>Snappy Process</Style.ObjectivesTitle>
            <Style.ObjectivesText>
              Build reusable code is a key practice. Let's go through an
              introduction to creating reusable code in React.Reusable code is a
              fundamental concept in programming and is essential for creating
              maintainable, scalable, and efficient applications.
            </Style.ObjectivesText>
          </Style.Objectives>
          <Style.Objectives>
            <Style.AffordablePrices />
            <Style.ObjectivesTitle>Open Source</Style.ObjectivesTitle>
            <Style.ObjectivesText>
              React.js, a widely-used JavaScript library for building user
              interfaces, stands as a testament to the power and influence of
              open source contributions.
            </Style.ObjectivesText>
          </Style.Objectives>
          <Style.Objectives>
            <Style.PeopleFirst />
            <Style.ObjectivesTitle>History</Style.ObjectivesTitle>
            <Style.ObjectivesText>
              React.js, developed and maintained by Facebook, was open-sourced
              in 2013, marking a strategic shift in software development
              methodologies.
            </Style.ObjectivesText>
          </Style.Objectives>
        </Style.ObjectivesGridContainer>
      </Style.ObjectiveContainer>
    </>
  )
}
const BillImg = {
  display: "flex",
  position: "absolute",
  width: "500px",
  height: "750px",
  top: 450,
  right: 150,
  zIndex: 1,
  borderRadius: "25px",
  boxShadow: "1px 1px 15px black",
}

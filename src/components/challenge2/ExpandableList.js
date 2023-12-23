import React from "react"
import PlusIcon from "@/assets/challenge2/images/icon-plus.svg"
import Image from "next/image"
import styled from "styled-components"
// Create a button variable and add CSS
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid red;
  color: red;
`

export default function ExpandableList() {
  return (
    <div className={styles.ListContainer}>
      <div>
        <Button>btn</Button>
      </div>
      <div>
        <Image src={PlusIcon} width={30} height={30} />
      </div>
    </div>
  )
}

const styles = {
  ListContainer: {
    display: "flex",
    justifyContent: "space-between",
    color: "red",
  },
}

import React, { useState } from "react"
import styled from "styled-components"

const ListContainer = styled.div``
const ListTitle = styled.a`
  padding: 1rem 0;
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  font-weight: 700;

  &:hover {
    color: purple;
    transition: color 0.25s;
    cursor: pointer;
  }
`
const PlusIcon = styled.svg`
  flex: none;
  fill: purple;
  width: 30px;
  height: 30px;

  &:hover {
    fill: black;
    transition: fill 0.25s;
    cursor: pointer;
  }
`
const ListHeader = styled.div`
  font-family: "Work", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ListBody = styled.div`
  overflow: hidden;
  transition: all 0.5s ease-out;
`

export default function ExpandableList(props) {
  let frame = React.useRef()
  const [listBodyHeight, setListBodyHeight] = useState(0)

  function collapse_expand() {
    if (listBodyHeight === 0) {
      setListBodyHeight(100)
    } else {
      setListBodyHeight(0)
    }
  }
  return (
    <ListContainer>
      <ListHeader>
        <ListTitle>{props.textContent}</ListTitle>
        <div>
          <PlusIcon onClick={() => collapse_expand()} viewBox="0 0 30 31">
            <path
              d={
                listBodyHeight === 0
                  ? "M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
                  : "M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
              }
            />
          </PlusIcon>
        </div>
      </ListHeader>
      <ListBody ref={frame} style={{ height: listBodyHeight }}>
        <p>{props.children}</p>
      </ListBody>
    </ListContainer>
  )
}

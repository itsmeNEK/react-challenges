import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  height: 80vh;
  width: 100%;
  background-color: hsl(275, 100%, 97%);

  @media screen and (max-width: 540px) {
    height: 100vh;
  }
`
export const Card = styled.div`
  margin: auto;
  width: 35rem;
  border: solid 1px black; // comment this later
  border-radius: 15px;
  padding: 1.5rem;
  background-color: rgb(255, 255, 255);
  z-index: 1;

  @media screen and (max-width: 540px) {
    margin: auto 2rem;
  }
`

export const CardHeader = styled.div`
  align-items: center;
  display: flex;
  padding: 1rem 0;
`

export const CardTitle = styled.h1`
  margin-left: 1rem;
  font-family: "Roboto", sans-serif;
`
export const CardBody = styled.div`
  padding: 1rem 0;
`

export const StarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="41"
      fill="none"
      viewBox="0 0 40 41"
    >
      <path
        fill="#AD28EB"
        d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"
      />
    </svg>
  )
}

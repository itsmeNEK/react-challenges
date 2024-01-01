import styled from "styled-components"
import "typeface-overpass"

export const Container = styled.div`
  display: flex;
  height: 80vh;
  width: 100%;
  background-color: hsl(216, 12%, 8%);

  @media screen and (max-width: 540px) {
    height: 100vh;
  }
`
export const Card = styled.div`
  width: 20rem;
  margin: auto;
  border-radius: 25px;
  padding: 2rem;
  background-color: hsl(213, 19%, 18%);
  z-index: 1;

  @media screen and (max-width: 540px) {
    margin: auto 2rem;
  }
`
export const CardTitle = styled.h2`
  font-family: "overpass", sans-serif;
  font-weight: normal;
  color: white;
`

export const CardText = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: hsl(217, 12%, 63%);
  font-family: "overpass", sans-serif;
  line-height: 25px;

  @media screen and (max-width: 540px) {
    font-size: 0.8rem;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px 0;
`

export const CircleButton = styled.button`
  border: none;
  background-color: hsl(213, 19%, 22%);
  color: lightgray;
  font-weight: 700;
  width: 50px;
  height: 50px;
  padding: 15px;
  border-radius: 50%;

  &:hover {
    background-color: hsl(25, 97%, 53%) !important;
    cursor: pointer;
    transition: 500ms;
  }
`
export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 25px;
  border: none;
  font-size: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: white;
  background-color: hsl(25, 97%, 53%);

  &:hover {
    cursor: pointer;
    background-color: white;
    color: hsl(25, 97%, 53%);
  }
`

export const StarIcon = () => {
  return (
    <svg
      width="17"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      style={startIcon}
    >
      <path
        d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
        fill="#FC7614"
      />
    </svg>
  )
}

const startIcon = {
  backgroundColor: "hsl(213, 19%, 22%)",
  padding: "15px",
  height: "18px",
  width: "17px",
  borderRadius: "50%",
}

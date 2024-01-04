import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  height: 80vh;
  width: 100%;
  background-color: rgb(255, 204, 0);
  @media screen and (max-width: 540px) {
    height: 100vh;
  }
`
export const Card = styled.div`
  margin: auto;
  width: 25rem;
  box-shadow: 20px 20px 0px black;
  border: solid 1px black;
  border-radius: 15px;
  padding: 1.5rem;
  background-color: rgb(255, 255, 255);

  @media screen and (max-width: 540px) {
    margin: auto 2rem;
  }
`
export const CardBody = styled.div`
  padding: 0 0 0.5rem 0;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
`
export const Button = styled.button`
  padding: 0.5rem 1.8rem;
  border: none;
  border-radius: 5px;
  font-weight: 800;
  background-color: rgb(255, 204, 0);

  &:hover {
    background-color: rgb(255, 224, 0);
    cursor: pointer;
  }
`
export const CardTextHeading = styled.a`
  font-size: 1.8rem;
  padding: 0 !important;
  color: rgb(255, 204, 0);
  font-weight: 600;

  @media screen and (max-width: 540px) {
    font-size: 1.2rem;
  }
`

export const CardBodyText = styled.p`
  font-size: 1.2rem;
  color: rgb(155, 155, 155);

  @media screen and (max-width: 540px) {
    font-size: 0.8rem;
  }
`
export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
`

const CardHeaderStyle = {
  width: "100%",
  height: "15rem",
  objectFit: "cover",
  borderRadius: "15px",
  marginBottom: "1rem",
  marginTop: 0,
}

export const CardHeader = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="336"
        height="201"
        fill="none"
        viewBox="0 0 336 201"
        style={CardHeaderStyle}
      >
        <g clipPath="url(#a)">
          <path fill="#F4D04E" d="M0 .5h336v200H0z" />
          <rect
            width="139"
            height="95"
            x="87.996"
            y="77.729"
            fill="#fff"
            rx="47.5"
            transform="rotate(-45 87.996 77.729)"
          />
          <rect
            width="139"
            height="95"
            x="54.055"
            y="77.729"
            fill="#111"
            rx="47.5"
            transform="rotate(-45 54.055 77.729)"
          />
          <path
            fill="#111"
            d="M234.864 209.036 451.4-7.5l67.175 67.175-216.536 216.536z"
          />
          <rect
            width="139"
            height="95"
            x="20.114"
            y="77.729"
            fill="#fff"
            rx="47.5"
            transform="rotate(-45 20.114 77.729)"
          />
          <rect
            width="204.19"
            height="270.554"
            fill="#111"
            rx="102.095"
            transform="scale(-1 1) rotate(45 -103.887 14.564)"
          />
          <path
            stroke="#fff"
            strokeWidth="3"
            d="m6.69-357.5 135.583 135.727c12.481 12.494 12.481 32.737 0 45.231L-45.544 11.475c-12.481 12.494-12.481 32.737 0 45.23L107.088 209.5"
          />
          <path
            stroke="#111"
            strokeWidth="3"
            d="M69.965 71.719v23.334h23.334M136.079 52.273V28.94h-23.334M102.845 38.838v46.67M210.364-37.5l60.873 60.873c12.497 12.496 12.497 32.758 0 45.254l-77.745 77.746c-12.497 12.496-12.497 32.758 0 45.254l69.872 69.873"
          />
          <path
            stroke="#111"
            strokeWidth="3"
            d="m253.339 149.574-12.144 12.145 14.256 14.257v12.672h12.673l13.729 13.729 12.145-12.145M278.685 124.228l-12.145 12.145 14.257 14.257v12.673h12.673l13.729 13.729 12.145-12.145M304.031 98.883l-12.145 12.144 14.257 14.257v12.673h12.673l13.729 13.729 12.144-12.145M329.376 73.537l-12.145 12.145 14.257 14.257v12.672h12.673l13.729 13.729 12.145-12.144"
          />
          <path
            stroke="#fff"
            strokeWidth="5"
            d="m354.722 48.191-12.145 12.145 14.257 14.257v12.673h12.673l13.729 13.729 12.145-12.145"
          />
          <mask
            id="b"
            width="285"
            height="285"
            x="234"
            y="-8"
            maskUnits="userSpaceOnUse"
          >
            <path
              fill="#111"
              d="M234.864 209.036 451.4-7.5l67.175 67.175-216.536 216.536z"
            />
          </mask>
          <g stroke="#fff" mask="url(#b)">
            <path
              strokeWidth="3"
              d="m253.339 149.574-12.144 12.145 14.256 14.257v12.672h12.673l13.729 13.729 12.145-12.145M278.685 124.228l-12.145 12.145 14.257 14.257v12.673h12.673l13.729 13.729 12.145-12.145M304.031 98.883l-12.145 12.144 14.257 14.257v12.673h12.673l13.729 13.729 12.144-12.145M329.376 73.537l-12.145 12.145 14.257 14.257v12.672h12.673l13.729 13.729 12.145-12.145"
            />
            <path
              strokeWidth="5"
              d="m354.722 48.191-12.145 12.145 14.257 14.257v12.673h12.673l13.729 13.729 12.145-12.145"
            />
          </g>
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 .5h336v200H0z" />
          </clipPath>
        </defs>
      </svg>
    </>
  )
}

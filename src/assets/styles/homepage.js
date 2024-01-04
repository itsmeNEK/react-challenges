import styled from "styled-components"
const { motion } = require("framer-motion")
export const HeaderContainer = styled.div`
  width: 100%;
  height: 1050px;

  @media screen and (max-width: 540px) {
    height: 100vh;
    width: 100%;
  }
`

export const HeaderBG = styled.div`
  display: block;
  width: 100%;
  height: 800px;
  background-color: hsl(256, 26%, 20%);

  @media screen and (max-width: 540px) {
    height: 500px;
  }
`
export const IntroContainer = styled(motion.div)`
  width: 80%;
  margin: auto;
  position: relative;
  top: 30%;

  @media screen and (max-width: 540px) {
    top: 20%;
  }
`
export const BillImgContainer = styled(motion.div)``
export const LineDivider = styled.hr`
  margin: 0;
  height: 1px;
  width: 300px;
  color: hsl(216, 30%, 68%);
  background-color: hsl(216, 30%, 68%);

  @media screen and (max-width: 540px) {
    width: 100px;
  }
`
export const IntroTitle = styled.h1`
  font-size: 5rem;
  font-family: "Courier New", Courier, monospace;
  color: white;
  margin-bottom: 0;

  @media screen and (max-width: 540px) {
    font-size: 1.5rem;
  }
`
export const IntroParagraph = styled.p`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  line-height: 25px;
  width: 650px;
  font-size: 18px;
  color: lightgray;

  @media screen and (max-width: 540px) {
    width: 100%;
  }
`

export const ObjectiveContainer = styled(motion.div)`
  width: 80%;
  margin: auto;
  margin-top: 15rem;
  margin-bottom: 15rem;
`
export const SectionTitle = styled(motion.h1)`
  font-size: 3rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: hsl(256, 26%, 20%);
`
export const ObjectivesGridContainer = styled.div`
  margin: 4rem 0;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 540px) {
    display: block;
  }
`
export const Objectives = styled(motion.div)`
  width: 30%;
  margin: 15px 3rem;
  @media screen and (max-width: 540px) {
    width: 100%;
    margin: auto;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
`
export const ObjectivesTitle = styled.h1`
  font-size: 1.5rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`
export const ObjectivesText = styled.p`
  color: gray;
  font-size: 18px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`

export const ContactContainer = styled(motion.div)`
  position: relative;
  justify-content: space-between;
  align-items: center;
  display: flex;
  height: 350px;
  width: 75%;
  margin: auto;
  margin-top: 25rem;
  margin-bottom: 15rem;
  padding: 0 3rem;
  background-color: hsl(256, 26%, 20%);
  overflow: hidden;
  @media screen and (max-width: 540px) {
    margin-top: 5rem;
    margin-bottom: 5rem;
    display: block;
  }
`

export const ContactTitle = styled.h1`
  display: flex;
  position: relative;
  font-size: 5rem;
  margin-left: 3rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: white;
  @media screen and (max-width: 540px) {
    font-size: 2rem;
    display: block;
    margin-left: 0;
    margin: 5rem auto;
    text-align: center;
  }
`
export const ContactMeBtn = styled.button`
  margin-right: 3rem;
  font-weight: bold;
  width: 150px;
  height: 50px;
  border: 0;
  background-color: white;
  text-transform: uppercase;
  color: hsl(256, 26%, 20%);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  z-index: 2;

  &:hover {
    cursor: pointer;
    background-color: lightgray;
    transition: 500ms;
  }
  @media screen and (max-width: 540px) {
    display: block;
    z-index: 4;
    margin: 5rem auto;
  }
`

const ContactRight = {
  position: "absolute",
  top: 0,
  right: 0,
}
const mobileContactRight = {
  // width: "350",
  // height: "500",
  // display: "flex",
  // position: "absolute",
  // right: 0,
  // zIndex: 1,
  display: "none",
}
const PatternRight = {
  width: "436",
  height: "593",
  display: "flex",
  position: "absolute",
  right: 0,
  zIndex: 2,
}
const mobilePatternRight = {
  // width: "350",
  // height: "500",
  // display: "flex",
  // position: "absolute",
  // right: 0,
  // zIndex: 1,
  display: "none",
}

const PatternLeft = {
  display: "flex",
  position: "absolute",
  left: 0,
  top: 600,
}
const mobilePatternLeft = {
  // width: "350",
  // height: "500",
  // display: "flex",
  // position: "absolute",
  // right: 0,
  // zIndex: 1,
  display: "none",
}

export const ContactPattern = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="434"
      height="350"
      style={window.innerWidth <= 540 ? mobileContactRight : ContactRight}
    >
      <g fill="none" fillRule="evenodd" stroke="#9E96C6">
        <path d="M374.872-183.487c-83.088-26.03-168.523-69.446-255.99 9.854C31.415-94.333-23.575-24.865 11.936 65.016c35.51 89.881 180.463 33.898 222.58 114.23 42.116 80.332-50.424 153.24-10.528 224.736 39.896 71.496 70.573 117.318 198.785 71.859 128.212-45.46 116.391-161.127 213.89-228.861 97.5-67.734 202.988-169.134 58.222-350.07-144.766-180.935-236.925-54.367-320.013-80.397z" />
        <path d="M384.985-142.161c-67.557-21.138-137.022-56.395-208.139 8.002C105.73-69.762 61.02-13.351 89.892 59.638c28.873 72.99 146.729 27.527 180.973 92.762 34.243 65.235-40.998 124.441-8.56 182.5 32.439 58.059 57.381 95.27 161.627 58.354 104.246-36.916 94.634-130.846 173.908-185.85C677.114 152.4 762.883 70.057 645.178-76.874c-117.705-146.93-192.637-44.15-260.193-65.287z" />
        <path d="M404.804-113.49c-54.849-17.232-111.247-45.974-168.987 6.523-57.74 52.496-94.04 98.482-70.598 157.983 23.442 59.5 119.13 22.44 146.932 75.62 27.802 53.179-33.286 101.444-6.95 148.773 26.337 47.33 46.587 77.663 131.224 47.57 84.637-30.094 76.834-106.665 141.196-151.504 64.362-44.84 133.998-111.966 38.434-231.743-95.565-119.778-156.402-35.99-211.25-53.223z" />
        <path d="M424.91-80.123c-44.205-13.836-89.659-36.915-136.194 5.238-46.534 42.153-75.79 79.079-56.898 126.856 18.893 47.777 96.011 18.018 118.418 60.72 22.407 42.7-26.826 81.456-5.6 119.46 21.225 38.003 37.546 62.36 105.758 38.196 68.213-24.164 61.923-85.648 113.796-121.652 51.872-36.005 107.994-89.905 30.975-186.082-77.02-96.177-126.05-28.9-170.255-42.736z" />
        <path d="M430.256-58.56c-36.06-11.317-73.137-30.194-111.097 4.285-37.96 34.478-61.824 64.681-46.413 103.76 15.411 39.079 78.319 14.738 96.597 49.665 18.278 34.928-21.883 66.627-4.57 97.712 17.315 31.085 30.629 51.008 86.271 31.243 55.642-19.765 50.512-70.056 92.826-99.505 42.313-29.45 88.093-73.537 25.267-152.204-62.827-78.668-102.822-23.638-138.881-34.956z" />
        <path d="M440.955-42.498c-29.325-9.164-59.479-24.448-90.35 3.469-30.87 27.916-50.278 52.37-37.745 84.012 12.533 31.641 63.693 11.933 78.557 40.213 14.865 28.28-17.796 53.946-3.715 79.115 14.08 25.169 24.908 41.3 70.16 25.296 45.25-16.003 41.078-56.722 75.49-80.566C567.763 85.196 604.994 49.5 553.9-14.196 502.807-77.89 470.28-33.335 440.955-42.498z" />
      </g>
    </svg>
  )
}
export const IntroPatternRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={window.innerWidth <= 540 ? mobilePatternRight : PatternRight}
    >
      <g fill="none" fillRule="evenodd" stroke="#96A9C6">
        <path d="M341.639-24.675c-75.703-23.693-153.543-63.212-233.235 8.97C28.71 56.477-21.39 119.709 10.964 201.522c32.354 81.814 164.422 30.855 202.794 103.977 38.373 73.122-45.94 139.485-9.591 204.563 36.35 65.078 64.3 106.787 181.115 65.409 116.816-41.379 106.045-146.664 194.878-208.318 88.833-61.654 184.944-153.953 53.046-318.647S417.341-.98 341.64-24.674z" />
        <path d="M351.105 13.249c-61.583-19.24-124.905-51.33-189.734 7.283C96.543 79.146 55.786 130.491 82.105 196.925c26.32 66.434 133.755 25.055 164.971 84.43 31.216 59.377-37.372 113.266-7.802 166.11 29.57 52.845 52.306 86.713 147.334 53.113 95.028-33.6 86.267-119.094 158.53-169.158 72.265-50.064 150.45-125.012 43.153-258.747S412.688 32.489 351.105 13.249z" />
        <path d="M368.812 38.417C318.85 22.72 267.478-3.465 214.883 44.36c-52.594 47.825-85.66 89.72-64.307 143.926 21.353 54.206 108.513 20.443 133.838 68.89 25.325 48.448-30.32 92.418-6.33 135.536 23.99 43.117 42.436 70.752 119.531 43.336 77.095-27.415 69.987-97.173 128.614-138.022 58.627-40.85 122.058-102.003 35.009-211.122-87.049-109.12-142.465-32.788-192.426-48.487z" />
        <path d="M387.316 69.184c-40.295-12.596-81.728-33.603-124.147 4.768-42.419 38.371-69.087 71.984-51.865 115.475 17.221 43.491 87.518 16.402 107.943 55.273 20.425 38.87-24.453 74.148-5.105 108.743s34.225 56.767 96.404 34.77c62.179-21.996 56.446-77.965 103.73-110.739 47.284-32.774 98.442-81.839 28.236-169.388-70.207-87.55-114.901-26.307-155.196-38.902z" />
        <path d="M392.083 89.046c-32.91-10.295-66.749-27.467-101.393 3.897-34.643 31.365-56.424 58.84-42.358 94.389 14.065 35.549 71.477 13.407 88.158 45.179 16.682 31.772-19.971 60.609-4.17 88.886 15.803 28.277 27.953 46.4 78.735 28.42 50.782-17.979 46.1-63.727 84.718-90.516 38.617-26.79 80.398-66.895 23.06-138.457-57.339-71.562-93.841-21.503-126.75-31.798z" />
        <path d="M401.225 103.406c-26.718-8.36-54.191-22.305-82.318 3.165-28.127 25.47-45.81 47.78-34.39 76.649 11.419 28.868 58.03 10.887 71.574 36.688 13.544 25.8-16.214 49.217-3.385 72.18 12.83 22.963 22.694 37.68 63.923 23.08 41.229-14.6 37.428-51.75 68.78-73.505 31.353-21.755 65.275-54.323 18.723-112.435-46.553-58.112-76.188-17.462-102.907-25.822z" />
      </g>
    </svg>
  )
}

export const IntroPatternLeft = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="195"
      height="504"
      style={window.innerWidth <= 540 ? mobilePatternLeft : PatternLeft}
    >
      <g fill="none" fillRule="evenodd" stroke="#9E96C6">
        <path d="M-162.361 17.325c-75.703-23.693-153.543-63.212-233.235 8.97-79.693 72.182-129.794 135.414-97.44 217.227 32.354 81.814 164.422 30.855 202.794 103.977 38.373 73.122-45.94 139.485-9.591 204.563 36.35 65.078 64.3 106.787 181.115 65.409C-1.902 576.092-12.673 470.807 76.16 409.153c88.833-61.654 184.944-153.953 53.046-318.647S-86.659 41.02-162.36 17.326z" />
        <path d="M-152.895 55.249c-61.583-19.24-124.905-51.33-189.734 7.283-64.828 58.614-105.585 109.959-79.266 176.393 26.32 66.434 133.755 25.055 164.971 84.43 31.216 59.377-37.372 113.266-7.802 166.11 29.57 52.845 52.306 86.713 147.334 53.113 95.028-33.6 86.267-119.094 158.53-169.158 72.265-50.064 150.45-125.012 43.153-258.747S-91.312 74.489-152.895 55.249z" />
        <path d="M-135.188 80.417C-185.15 64.72-236.522 38.535-289.117 86.36c-52.594 47.825-85.66 89.72-64.307 143.926 21.353 54.206 108.513 20.443 133.838 68.89 25.325 48.448-30.32 92.418-6.33 135.536 23.99 43.117 42.436 70.752 119.531 43.336 77.095-27.415 69.987-97.173 128.614-138.022 58.627-40.85 122.058-102.003 35.009-211.122-87.049-109.12-142.465-32.788-192.426-48.487z" />
        <path d="M-116.684 111.184c-40.295-12.596-81.728-33.603-124.147 4.768-42.419 38.371-69.087 71.984-51.865 115.475 17.221 43.491 87.518 16.402 107.943 55.273 20.425 38.87-24.453 74.148-5.105 108.743s34.225 56.767 96.404 34.77c62.179-21.996 56.446-77.965 103.73-110.739 47.284-32.774 98.442-81.839 28.236-169.388-70.207-87.55-114.901-26.307-155.196-38.902z" />
        <path d="M-111.917 131.046c-32.91-10.295-66.749-27.467-101.393 3.897-34.643 31.365-56.424 58.84-42.358 94.389 14.065 35.549 71.477 13.407 88.158 45.179 16.682 31.772-19.971 60.609-4.17 88.886 15.803 28.277 27.953 46.4 78.735 28.42 50.782-17.979 46.1-63.727 84.718-90.516 38.617-26.79 80.398-66.895 23.06-138.457-57.339-71.562-93.841-21.503-126.75-31.798z" />
        <path d="M-102.775 145.406c-26.718-8.36-54.191-22.305-82.318 3.165-28.127 25.47-45.81 47.78-34.39 76.649 11.419 28.868 58.03 10.887 71.574 36.688 13.544 25.8-16.214 49.217-3.385 72.18 12.83 22.963 22.694 37.68 63.923 23.08 41.229-14.6 37.428-51.75 68.78-73.505C12.762 261.908 46.684 229.34.132 171.228c-46.553-58.112-76.188-17.462-102.907-25.822z" />
      </g>
    </svg>
  )
}

export const SnappyProcess = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86">
      <g fill="none" fillRule="evenodd">
        <circle cx="43" cy="43" r="43" fill="#96A9C6" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M32 59h1.195l21.072-20.146c.276-.356.123-.534-.46-.534H45.11l9.158-10.786c.276-.356.061-.534-.612-.534h-11.67c-.337 0-.613.119-.888.356l-8.515 14.645c-.061.356.122.534.582.534h8.423L32 59z"
        />
      </g>
    </svg>
  )
}

export const AffordablePrices = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86">
      <g fill="none" fillRule="evenodd">
        <circle cx="43" cy="43" r="43" fill="#96A9C6" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M43 27c-8.836 0-16 7.164-16 16s7.164 16 16 16c8.838 0 16-7.164 16-16s-7.162-16-16-16zm4.363 22.178c-.787.883-1.924 1.402-3.41 1.558V53H42.06v-2.252c-2.479-.254-4.012-1.695-4.604-4.32l2.93-.764c.271 1.65 1.17 2.475 2.695 2.475.713 0 1.24-.176 1.576-.53a1.79 1.79 0 00.504-1.279c0-.518-.168-.91-.504-1.176-.336-.267-1.084-.605-2.242-1.015-1.04-.362-1.855-.717-2.441-1.073a4.032 4.032 0 01-1.428-1.48c-.365-.637-.549-1.379-.549-2.223 0-1.107.328-2.105.98-2.992.653-.885 1.68-1.426 3.083-1.623V33h1.894v1.748c2.117.254 3.488 1.451 4.111 3.594l-2.609 1.07c-.51-1.469-1.295-2.203-2.361-2.203-.535 0-.965.164-1.287.492a1.636 1.636 0 00-.487 1.194c0 .476.157.841.47 1.097.31.254.98.569 2.003.946 1.125.41 2.008.798 2.647 1.164a4.16 4.16 0 011.533 1.513c.38.645.572 1.397.572 2.258 0 1.322-.395 2.424-1.182 3.305z"
        />
      </g>
    </svg>
  )
}
export const PeopleFirst = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86">
      <g fill="none" fillRule="evenodd">
        <circle cx="43" cy="43" r="43" fill="#96A9C6" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M52.874 49.874l-5.095-2.547c-.48-.24-.779-.724-.779-1.261v-1.804c.122-.149.25-.32.383-.507.661-.933 1.19-1.972 1.576-3.093a2.116 2.116 0 001.241-1.929V36.6c0-.514-.192-1.011-.533-1.4v-2.837c.03-.293.147-2.04-1.116-3.48C47.455 27.633 45.678 27 43.267 27c-2.412 0-4.19.634-5.285 1.883-1.263 1.44-1.145 3.187-1.115 3.48V35.2a2.127 2.127 0 00-.534 1.4v2.133c0 .65.295 1.255.799 1.658.488 1.935 1.51 3.392 1.868 3.86v1.765c0 .516-.282.99-.734 1.237l-4.758 2.596A4.81 4.81 0 0031 54.073V55.8c0 2.531 8.024 3.2 12.267 3.2 4.242 0 12.266-.669 12.266-3.2v-1.623a4.786 4.786 0 00-2.659-4.303z"
        />
      </g>
    </svg>
  )
}

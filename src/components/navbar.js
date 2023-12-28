"use client"
import { useRouter } from "next/navigation"
import styled from "styled-components"

const Navbar = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid lightgray;
  margin-bottom: 10px;
`
const NavbarContent = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
`
const NavbarBrand = styled.a`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 2.5rem;
`
const NavbarItems = styled.ul`
  list-style-type: none;
  display: flex;
  height: 100%;
  justify-items: center;
  align-items: center;
`

const NavbarItem = styled.li`
  display: flex;
  position: relative;
  margin: 0 5px;
  height: 100%;
  align-items: center;

  &::after {
    position: absolute;
    content: "";
    display: flex;
    transition: 400ms ease-in;
    width: 0%;
    border-bottom: solid 3px black;
    padding-top: 65px;
  }

  &:hover:after {
    width: 100%;
  }
`
const NavbarLink = styled.button`
  background: transparent;
  border: 0;
  font-family: sans-serif;
  font-size: 0.9rem;
  color: lightgray;
  z-index: 1;
  cursor: pointer;

  &:hover {
    font-weight: 500;
    color: gray;
  }
`

export default function Page() {
  const router = useRouter()

  return (
    <>
      <Navbar>
        <NavbarBrand>React</NavbarBrand>
        <NavbarContent>
          <NavbarItems>
            <NavbarItem>
              <NavbarLink type="button" onClick={() => router.push("/")}>
                Challenge1
              </NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink
                type="button"
                onClick={() => router.push("/challenge2")}
              >
                Challenge2
              </NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink
                type="button"
                onClick={() => router.push("/challenge3")}
              >
                Challenge3
              </NavbarLink>
            </NavbarItem>
          </NavbarItems>
          <NavbarItems>
            <NavbarItem>
              <NavbarLink type="button">...</NavbarLink>
            </NavbarItem>
          </NavbarItems>
        </NavbarContent>
      </Navbar>
    </>
  )
}

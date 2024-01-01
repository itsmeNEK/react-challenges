import styled from "styled-components"

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid lightgray;
  margin-bottom: 10px;
`
export const NavbarContent = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
`
export const NavbarBrand = styled.a`
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  font-weight: bold;
  font-size: 2.5rem;
`
export const NavbarItems = styled.ul`
  list-style-type: none;
  display: flex;
  height: 100%;
  justify-items: center;
  align-items: center;
`

export const NavbarItem = styled.li`
  display: flex;
  position: relative;
  font-family: sans-serif;
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
export const NavbarLink = styled.button`
  background: transparent;
  border: 0;
  font-family: sans-serif;
  font-size: 0.9rem;
  color: lightgray;
  z-index: 1;
  cursor: pointer;
`

export const Dropdown = styled.ul`
  display: none;
  position: absolute;
  font-family: sans-serif;
  top: 100%;
  left: 0;
  list-style: none;
  padding: 5px;
  margin: 0;
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 0 3px black;
`

export const DropdownItem = styled.li`
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    font-weight: 500;
    color: gray;
  }
`

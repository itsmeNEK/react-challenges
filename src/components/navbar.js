"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import * as Styled from "./navbarStyle"

const NavbarListItemsNewbie = [
  { href: "/n-challenge1", text: "Blog Card" },
  { href: "/n-challenge2", text: "Accordion" },
  { href: "/n-challenge3", text: "Rating" },
]

const NavbarListItemsJunior = [
  { href: "/j-challenge1", text: "Newsletter" },
  { href: "/j-challenge2", text: "Age calculator" },
  { href: "/j-challenge3", text: "Notifications " },
]
export default function Page() {
  const router = useRouter()
  const [isDropdownVisible, setDropdownVisible] = useState(false)
  const [whatDropdownVisible, setWhatDropdownVisible] = useState(1)

  const toggleDropdown = (index) => {
    setDropdownVisible(!isDropdownVisible)
    setWhatDropdownVisible(index)
  }

  const renderNavItemsNewbie = NavbarListItemsNewbie.map((item, index) => (
    <Styled.DropdownItem
      key={index}
      type="button"
      onClick={() => router.push(item.href)}
    >
      {item.text}
    </Styled.DropdownItem>
  ))
  const renderNavItemsJunior = NavbarListItemsJunior.map((item, index) => (
    <Styled.DropdownItem
      key={index}
      type="button"
      onClick={() => router.push(item.href)}
    >
      {item.text}
    </Styled.DropdownItem>
  ))

  return (
    <>
      <Styled.Navbar>
        <Styled.NavbarBrand>React</Styled.NavbarBrand>
        <Styled.NavbarContent>
          <Styled.NavbarItems>
            {/* newbie */}
            <Styled.NavbarItem>
              <Styled.NavbarLink
                onClick={() => {
                  toggleDropdown(1)
                }}
              >
                Newbie
                <Styled.Dropdown
                  style={{
                    display:
                      isDropdownVisible && whatDropdownVisible === 1
                        ? "block"
                        : "none",
                  }}
                >
                  {renderNavItemsNewbie}
                </Styled.Dropdown>
              </Styled.NavbarLink>
            </Styled.NavbarItem>
            {/* junior */}
            <Styled.NavbarItem>
              <Styled.NavbarLink
                onClick={() => {
                  toggleDropdown(2)
                }}
              >
                Junior
                <Styled.Dropdown
                  style={{
                    display:
                      isDropdownVisible && whatDropdownVisible === 2
                        ? "block"
                        : "none",
                  }}
                >
                  {renderNavItemsJunior}
                </Styled.Dropdown>
              </Styled.NavbarLink>
            </Styled.NavbarItem>
          </Styled.NavbarItems>
        </Styled.NavbarContent>
      </Styled.Navbar>
    </>
  )
}

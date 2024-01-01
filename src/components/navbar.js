"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import * as S from "./navbarStyle"

const NavbarListItems = [
  { href: "/", text: "Challenge_1" },
  { href: "/challenge2", text: "Challenge_2" },
  { href: "/challenge3", text: "Challenge_3" },
]

export default function Page() {
  const router = useRouter()
  const [isDropdownVisible, setDropdownVisible] = useState(false)

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible)
  }

  const renderNavItems = NavbarListItems.map((item, index) => (
    <S.DropdownItem
      key={index}
      type="button"
      onClick={() => router.push(item.href)}
    >
      {item.text}
    </S.DropdownItem>
  ))

  return (
    <>
      <S.Navbar>
        <S.NavbarBrand>React</S.NavbarBrand>
        <S.NavbarContent>
          <S.NavbarItems>
            <S.NavbarItem>
              <S.NavbarLink onClick={toggleDropdown}>
                Newbie
                <S.Dropdown
                  style={{ display: isDropdownVisible ? "block" : "none" }}
                >
                  {renderNavItems}
                </S.Dropdown>
              </S.NavbarLink>
            </S.NavbarItem>
          </S.NavbarItems>
        </S.NavbarContent>
      </S.Navbar>
    </>
  )
}

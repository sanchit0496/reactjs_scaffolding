// components/Navbar.js
import React from 'react'
import { NavContainer, NavList, NavItem, NavLinkStyled } from './NavbarStyled'

const Navbar = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <NavLinkStyled to="/">Home</NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/about">About</NavLinkStyled>
        </NavItem>
      </NavList>
    </NavContainer>
  )
}

export default Navbar

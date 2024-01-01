// components/NavbarStyled.js
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavContainer = styled.nav`
  background-color: #333;
  padding: 10px;
`

export const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`

export const NavItem = styled.li`
  margin-right: 20px;
`

export const NavLinkStyled = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`

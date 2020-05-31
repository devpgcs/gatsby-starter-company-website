import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import NavbarWrapper from './navbar.style'
import Desktop from './Desktop'
import Mobile from './Mobile'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      homeJson {
        MENU_ITEMS {
          id
          path
          label
        }
      }
    }
  `)
  return (
    <NavbarWrapper className="nav">
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <>
            <Mobile
              links={data.homeJson.MENU_ITEMS}
              {...{ theme, toggleTheme }}
            />
            <Desktop
              links={data.homeJson.MENU_ITEMS}
              {...{ theme, toggleTheme }}
            />
          </>
        )}
      </ThemeToggler>
    </NavbarWrapper>
  )
}

export default Navbar

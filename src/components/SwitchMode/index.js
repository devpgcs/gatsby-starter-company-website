import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Moon from '../../../static/images/moon-solid.svg'
import Sun from '../../../static/images/sun-solid.svg'

export default () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <label>
        <input
          type="checkbox"
          className="theme-changer"
          onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
          checked={theme === 'dark'}
        />{' '}
        <div className="mode-container">
          <img src={Moon} alt="Dark Mode" className="moon"/>
          <img src={Sun} alt="Light Mode" className="sun"/>
        </div>
      </label>
    )}
  </ThemeToggler>
)
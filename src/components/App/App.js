import React from 'react'
import { NavbarApp } from '../../containers'
import FooterApp from './FooterApp'

const App = ({children}) => (
  <div className="sbox-page-wrapper">
    <header>
      <NavbarApp />
    </header>
    <main>
      {children}
    </main>
    <footer className="page-footer black">
      <FooterApp />
    </footer>
  </div>
)

export default App

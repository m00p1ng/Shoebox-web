import React from 'react'
import { Navbar } from '../../containers'
import Footer from './Footer'

const App = ({children}) => (
  <div className="sb-page-wrapper">
    <header>
      <Navbar />
    </header>
    <main>
      {children}
    </main>
    <footer className="page-footer black">
      <Footer />
    </footer>
  </div>
)

export default App

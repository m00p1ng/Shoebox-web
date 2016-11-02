import React from 'react'
import { Navbar } from '../../containers'
import Footer from './Footer'

const App = ({children}) => (
  <div>
    <Navbar />
    {children}
    <Footer />
  </div>
)

export default App

import React from 'react'
import Parallax1 from './Parallax1'
import Parallax2 from './Parallax2'
import HomeSection1 from './HomeSection1'
import HomeSection2 from './HomeSection2'
import { ProductListApp } from '../../containers'

const Home = () => (
  <div>
    <Parallax1 />
    <HomeSection1 />
    <Parallax2 />
    <HomeSection2 />
  </div>
)

export default Home

import React from 'react'
import Banner from '../Banner/Banner'
import { Outlet } from 'react-router-dom'


const PagPadrao = () => {
  return (
    <main>
      <Banner/>
      <Outlet/>
    </main>
  )
}

export default PagPadrao
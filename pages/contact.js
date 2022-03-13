import React from 'react'
import styled from 'styled-components'
import Accordion from '../components/accordion'
import Data from '../components/data'
import Navbar from '../components/Navbar'
import Sidebar from '../components/sidebar'



const Temp = styled.div`
display: flex;
flex-direction: row;
`
export default function Contact() {
  return (
    <React.Fragment>
      <Navbar/>
    <Temp>
      <Sidebar/>
      <Data/>
      </Temp>
    </React.Fragment>
  )
}



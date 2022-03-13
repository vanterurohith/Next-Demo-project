import styled from 'styled-components'
import Form from '../components/form'
import Navbar from '../components/Navbar'
import Sidebar from '../components/sidebar'

const Temp = styled.div`
display: flex;
flex-direction: row;
`
export default function About() {
  return (
    <div>
      <Navbar/>
      <Temp>
      <Sidebar/>
      <Form/>
      </Temp>  
    </div>
  )
}


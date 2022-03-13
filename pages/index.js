import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Sidebar from '../components/sidebar'

const Temp = styled.div`
display: flex;
flex-direction: row;
`

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Temp>
      <Sidebar/>
      <h1>Home</h1>
      </Temp>
    </div>
  )
}

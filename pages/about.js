import Head from 'next/head'
import Accordion from '../components/accordion'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div style={{backgroundColor: "lightblue"}}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Accordion/>
    </div>
  )
}


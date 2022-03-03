import Head from 'next/head'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <h1>Home</h1>
    </div>
  )
}

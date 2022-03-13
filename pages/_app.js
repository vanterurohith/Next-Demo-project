import '../styles/globals.css'
import Accordion from '../components/accordion'
import Navbar from '../components/Navbar'
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>  
  ) 
}

export default MyApp
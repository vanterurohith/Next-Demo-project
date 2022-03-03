import styled from 'styled-components'
import Link from 'next/link';


const Nav =styled.nav`
    height: 80px;
    width: 100vw;
    background: #263238;
    color: antiquewhite;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;

const StyledLink =styled.a`
    padding: 0rem 2rem;
`
export default function Navbar() {
  return (
    <Nav>
      <div>
          <Link href="/" passHref>
              <StyledLink>Templars</StyledLink>
          </Link>
      </div>  
      <div>
      <Link href="/" passHref>
              <StyledLink>Home</StyledLink>
        </Link>

      <Link href="/about" passHref>
              <StyledLink>About </StyledLink>
        </Link>

      <Link href="/contact" passHref>
              <StyledLink>Contact</StyledLink>
        </Link>
      </div>
    </Nav>
  )
}

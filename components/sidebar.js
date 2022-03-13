import styled from 'styled-components'
import Link from 'next/link';


const Nav =styled.nav`
    height: 100vh;
    width: 150px;
    background: #263238;
    color: antiquewhite;
    position: relative;
    padding: 10px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;

const StyledLink =styled.a`
    padding: 0rem 2rem;
    margin: 30px;
    margin-left: 1px;
`
export default function Sidebar() {
  return (
    <Nav> 
      <Link href="/" passHref>
              <StyledLink>Home</StyledLink>
        </Link>

      <Link href="/about" passHref>
              <StyledLink>About </StyledLink>
        </Link>

      <Link href="/contact" passHref>
              <StyledLink>Contact</StyledLink>
        </Link>
    </Nav>
  )
}

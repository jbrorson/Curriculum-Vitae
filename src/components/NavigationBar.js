import React from 'react'; 
import styled from 'styled-components';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';


const Styles = styled.div`
  .navbar { background-color: #fefefe; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #000;
    &:hover { color: peachpuff; }
  }
  .navbar-brand {
    font-size: 1.3em;
    color: #000;
    /* &:hover { color: peachpuff; } */
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;


export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Josefine Brorson</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

// const NavStyle = styled.nav`
// display: flex; 

// margin-top: auto 0;
// margin-bottom: 2rem;
// background: pink;
// `

// function Navbar() {
//   return (
// <NavStyle>
//   <h5>About</h5>
//   <h5>Location</h5>
// </NavStyle>
//   )
// };

export default Navbar;
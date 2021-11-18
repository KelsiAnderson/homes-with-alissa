import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Container} from 'react-bootstrap';

export default function Navs ({children}) {
    return (
  <Container>
  <Navbar expand="lg" variant="light" bg="light">
    <Navbar.Brand href="/">Alyssa</Navbar.Brand>
    <Nav.Link href="/about">About</Nav.Link>
    <Nav.Link href="/testimonials">Testimonials</Nav.Link>
    <Nav.Link href="/recentSales">Recent Sales</Nav.Link>
    <Nav.Link href="/contact">Contact Me</Nav.Link>
  </Navbar>
</Container>
    )
};
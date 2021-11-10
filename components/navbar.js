import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Container} from 'react-bootstrap';

const links = [
    {href: '/', label: 'homepage'},
    {href: '/testimonials', label: 'Client Testimonials'},
    {href: '/contact', label: 'Contact Alissa'},
    {href: '/recentSales', label: 'Recent Sales'}
];

export default function Navagate ({children}) {
    return (

  <Container>
  <Navbar expand="lg" variant="light" bg="light">
    <Navbar.Brand href="/">About</Navbar.Brand>
    <Nav.Link href="/testimonials">Testimonials</Nav.Link>
    <Nav.Link href="/contact">Contact Me</Nav.Link>
    <Nav.Link href="/recentSales">Recent Sales</Nav.Link>
  </Navbar>
</Container>
    )
};
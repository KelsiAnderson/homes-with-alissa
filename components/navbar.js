import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import FormConmtrol from 'react-bootstrap/FormControl';
import {Form, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Container} from 'react-bootstrap';




const links = [
    {href: '/', label: 'homepage'},
    {href: '/listings', label: 'Current Listings'},
    {href: '/testimonials', label: 'Client Testimonials'},
    {href: '/about', label: 'About Alissa'},
    {href: '/contact', label: 'Contact Alissa'},
    {href: '/recentSales', label: 'Recent Sales'}
];

export default function Nav ({children}) {
    return (

  <Container>
  <Navbar expand="lg" variant="light" bg="light">
    <Navbar.Brand href="#">Navbar</Navbar.Brand>
  </Navbar>
</Container>
    )
};
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../components/navbar.js';
import ContactInfo from '../components/contactForm.js';

export default function Contact(){
    return (
        <div>
        <Nav />
        <ContactInfo />
        </div>
    );
}
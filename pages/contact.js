import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../components/navbar.js';
import ContactInfo from '../components/contactForm.js';
import Layout from '../components/layout.js';

export default function Contact(){
	return (
		<ContactInfo />   
	);
}

Contact.getLayout = function getlayout(page) {
	return (
		<Layout>
			{page}
		</Layout>
	);
}
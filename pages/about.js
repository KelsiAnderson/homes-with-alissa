import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'

export default function About() {
	return (
		<div>
		<h1>This is the about page</h1>
		<h4>Hi I am Alissa! I am a real estate agent!</h4>
		</div>
	)
}

About.getLayout = function getlayout(page) {
	return (
		<Layout>
			{page}
		</Layout>
	);
}

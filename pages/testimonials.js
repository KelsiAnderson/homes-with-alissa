import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout';

export default function Testimonials(){
    return (
			<div>
				<h1>This is where people tell me if they like my services or not</h1>
			</div>
    )
}

Testimonials.getLayout = function getlayout(page) {
	return (
		<Layout>
			{page}
		</Layout>
	)
}
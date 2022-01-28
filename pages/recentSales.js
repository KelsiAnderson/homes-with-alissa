import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout';
import RecentSalesPost from '../components/recentSalePost';

export default function RecentSales(){
	return (
		<div>
		<h1>Check out the homes I have recently sold</h1>
		<RecentSalesPost />
		</div>
	);
}

RecentSales.getLayout = function getlayout(page) {
	return (
		<Layout>
			{page}
		</Layout>
	);
}
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
// import { request } from "../datocms";

export default function Home() {
  return (
    <h1>Hi, I am Alyssa</h1>
  );
}

Home.getLayout = function getlayout(page) {
  return (
    <Layout >
      {page}
    </Layout>
  );
}


  
  
  
  

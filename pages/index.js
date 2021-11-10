import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../components/navbar.js';
// import { request } from "../datocms";
import SearchBar from "./searchBar"
import formInstance from "./components/contactForm.js"


export default function Home({ data }) {
    return (
        <div>
            <Nav></Nav>
            <h1>Welcome to the homepage</h1>
          <div>
            <SearchBar />
          </div>
        </div>
        
    )
}

// export async function getStaticProps() {
//     const data = await request({
//       query: HOMEPAGE_QUERY,
//       variables: { limit: 10 }
//     });
//     return {
//       props: { data }
//     };
//   }

// -----------------------------------------------------
  
  
  
  

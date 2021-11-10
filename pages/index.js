import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../components/navbar.js';
// import { request } from "../datocms";
import SearchBar from "./searchBar"

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

  
  
  
  

import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../components/navbar.js'


export default function Home() {
    return (
        <div><Nav></Nav>
        <h1>Welcome to the homepage</h1>
        </div>
    )
}
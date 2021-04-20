import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../components/navbar.js';

export default function About() {
    return (
        <div><Nav></Nav> 
        <h1>This is the about page</h1>
        <h4>Hi I am Alissa! I am a real estate agent!</h4> </div>
    )
}
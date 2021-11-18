import { NavItem } from 'react-bootstrap'
import Nav from './navbar'

export default function Layout({ children }) {
    //use this for components that show up on every page
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  )
}
import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'


export const NavBar = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Ganbatte Studio</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Suministros</Nav.Link>
          <Nav.Link href="/orders">Órdenes</Nav.Link>
          <Nav.Link href="/requisitions">Requisiciones</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      </>
    )
}
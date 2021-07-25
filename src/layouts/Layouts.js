import React from 'react'
import {Footer} from './Footer'
import {NavBar} from './NavBar'
import {Container} from 'react-bootstrap'


export const Layouts = ({children}) => {
    return (
      <>
      <NavBar/>
      <Container>
       {children}
      </Container>
      <Footer/>
      </>
    )
}
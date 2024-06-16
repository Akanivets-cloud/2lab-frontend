import React, { Component } from 'react';
import { Navbar, Nav, FormControl, Container, Form, Button } from 'react-bootstrap';
import logo from '../logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import Contacts from '../Pages/Contacts';
import About from '../Pages/About';
import Blog from '../Pages/Blog';

export default class Header extends Component {
  render() {
    return (
      <Router>
        <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              />
              React Site
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About us</Nav.Link>
                <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="me-sm-3"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div style={{ paddingTop: '56px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

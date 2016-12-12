import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

const Navigation = (props) => {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to='/'>MVPme</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem>Projects</NavItem>
          <NavDropdown title="User" id="basic-nav-dropdown">
            <MenuItem>My Projects</MenuItem>
            <MenuItem>My Submissions</MenuItem>
            <MenuItem divider />
            <MenuItem>Logout</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;

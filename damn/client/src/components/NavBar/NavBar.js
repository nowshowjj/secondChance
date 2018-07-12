import React, { Component } from 'react';
// import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { BrowserRouter as Router } from 'react-router-dom';
export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Second Chance</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Login</NavLink>
              </NavItem>
              
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Select City
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Austin
                  </DropdownItem>
                  <DropdownItem>
                    Baltimore
                  </DropdownItem>                
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Resources
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavItem>
                      <NavLink href="https://www.baltimorehealth.org/nep/" target="_blank">Needle Exchange</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="http://www.rehabcenter.net/inpatient-rehab-centers/maryland-inpatient-rehab-centers/baltimore/" target="_blank">Rehab Centers</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="https://www.baltoareana.org/" target="_blank">Narcotics Anonymous</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="https://suicidepreventionlifeline.org/" target="_blank">Suicide Prevention Lifeline</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="https://health.baltimorecity.gov/opioid-overdose/baltimore-city-overdose-prevention-and-response-information" target="_blank">Find Narcan</NavLink>
                    </NavItem>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
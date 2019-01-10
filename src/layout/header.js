import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, 
		 Collapse, NavItem } from 'reactstrap';
import '../css/bootstrap.css';
	
class Header extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

	toggleNav() {
	  this.setState({
		isNavOpen: !this.state.isNavOpen
      });
    }

	render() {
		return (
			<Navbar dark expand="md">
				<div className="container">
					<NavbarToggler onClick={this.toggleNav} />
					<NavbarBrand className="mr-auto" href="/"><span class="glyphicon glyphicon-globe"></span> Animal-Wiki</NavbarBrand>
					<Collapse isOpen={this.state.isNavOpen} navbar>
					<Nav navbar>
					</Nav>
					</Collapse>
                </div>
            </Navbar>	
		);
	}
}
export default Header;
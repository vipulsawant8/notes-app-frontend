import { Navbar, Container, Nav, NavbarBrand, NavbarToggle, NavbarCollapse, NavDropdown, DropdownItem } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LogoutButton } from "@/components/auth";

const NavbarComponent = () => {

	const isAuthenticated  = useSelector(state => state.auth.isAuthenticated);

	if (!isAuthenticated) return;

  return (
	<Navbar bg="dark" variant="dark" expand="lg" className="mb-3 shadow-sm">
		<Container fluid>
			<NavbarBrand className="fw-semibold"> Notes App </NavbarBrand>
			<Navbar.Toggle aria-controls="main-navbar" />
				<Navbar.Collapse id="main-navbar">
					
					<Nav className="ms-lg-auto">
						<NavDropdown title="Account" align="end">

							<DropdownItem
								as={Link}
								to="/password-change"
							>
								Change Password
							</DropdownItem>

							<NavDropdown.Divider />

							<DropdownItem as="div">
								<LogoutButton />
							</DropdownItem>

						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
		</Container>
	</Navbar>
  );
}

export default NavbarComponent;
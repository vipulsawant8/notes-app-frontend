import { Navbar, Container, Nav, NavbarBrand, NavDropdown, DropdownItem } from "react-bootstrap";
import { Link } from "react-router-dom";
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
				<Navbar.Collapse id="main-navbar" className="justify-content-lg-end justify-content-md-start">
					
					<Nav>
						<LogoutButton />
					</Nav>
				</Navbar.Collapse>
		</Container>
	</Navbar>
  );
}

export default NavbarComponent;
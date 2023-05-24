import React from "react";
import { UserAuth } from '../context/AuthContext';
import '../assets/css/paper-kit.css';

// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Collapse,
  Button
} from "reactstrap";
import { useNavigate } from "react-router-dom";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const { googleSignIn, user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg" style={{ paddingBottom: 0 }}>
      <Container style={{ paddingBottom: 0 }}>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/"
            style={{ fontSize: 'x-large', color: 'red' }}
          >
            Hi Canada!
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>

            <NavItem>
              <NavLink
                href="/visa"
              // onClick={(e) => e.preventDefault()}
              >
                Visa & Status
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                color="default"
                data-toggle="dropdown"
                // href="#pablo"
                id="dropdownMenuButton"
                nav
                onClick={(e) => e.preventDefault()}
                role="button"
              >
                Basics
              </DropdownToggle>
              <DropdownMenu
                aria-labelledby="dropdownMenuButton"
                className="dropdown-info"
              >
                <DropdownItem header tag="span">
                  Basic Services
                </DropdownItem>
                <DropdownItem
                  href="health"
                >
                  Healthcare
                </DropdownItem>
                <DropdownItem
                  href="education"
                >
                  Education
                </DropdownItem>
                <DropdownItem
                  href="housing"
                >
                  Housing
                </DropdownItem>
                <DropdownItem
                  href="transport"
                >
                  Transportation
                </DropdownItem>
                <DropdownItem
                  href="lifestyle"
                >
                  Culture & Lifestyle
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                color="default"
                data-toggle="dropdown"
                id="dropdownMenuButton"
                nav
                onClick={(e) => e.preventDefault()}
                role="button"
              >
                Services
              </DropdownToggle>
              <DropdownMenu
                aria-labelledby="dropdownMenuButton"
                className="dropdown-info"
              >
                <DropdownItem header tag="span">
                  Various Services
                </DropdownItem>
                <DropdownItem
                  href="financial"
                >
                  Financial Services
                </DropdownItem>
                <DropdownItem
                  href="government"
                >
                  Government Services
                </DropdownItem>
                <DropdownItem
                  href="legal"
                >
                  Legal Services
                </DropdownItem>

              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink
                href="employment"
              >
                Employment
              </NavLink>
            </NavItem>

            <NavItem style={{ width: 40 }}>
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/HiCanada2023"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fa fa-twitter" />
                <p className="d-lg-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem style={{ width: 40 }}>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/hicanada2023"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem style={{ width: 40 }}>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/hicanada2023"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem style={{ width: 40 }}>
              <NavLink
                data-placement="bottom"
                href="https://www.youtube.com/channel/UC7bDtwI1tXrqTLYWa09NWFQ"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-youtube" />
                <p className="d-lg-none">YouTube</p>
              </NavLink>
            </NavItem>
            <NavItem>
              {user?.displayName ?
                <Button
                  className="btn-round"
                  color="danger"
                  onClick={handleSignOut}
                >
                  Sing Out
                </Button> : <Button className="btn-round"
                  color="success" onClick={handleGoogleSignIn}>Sing In</Button>}
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;

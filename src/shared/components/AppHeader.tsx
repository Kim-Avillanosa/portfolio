import Link from "next/link";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Dropdown,
  Badge,
} from "react-bootstrap";

const AppHeader: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>Kim Avillanosa</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Dropdown className="m-1">
              <Dropdown.Toggle variant="outline-light">
                Showcase
              </Dropdown.Toggle>
              <Dropdown.Menu variant="dark">
                <Dropdown.Item
                  href="https://kmavillanosa-blog-demo.netlify.app/"
                  target="_blank"
                >
                  Blog Sample
                </Dropdown.Item>
                <Dropdown.Item disabled href="/notyet">
                  Covid Tracker <Badge>Soon</Badge>
                </Dropdown.Item>
                <Dropdown.Item disabled href="/notyet">
                  Weather <Badge>Soon</Badge>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="m-1">
              <Dropdown.Toggle variant="outline-light">
                For Recruiters
              </Dropdown.Toggle>
              <Dropdown.Menu variant="dark">
                <Link href="/files/Kim_Cyriel_Avillanosa.pdf" passHref>
                  <Dropdown.Item target="_blank">
                    Download my resume
                  </Dropdown.Item>
                </Link>
                <Link href="/contact" passHref>
                  <Dropdown.Item>Contact me</Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppHeader;

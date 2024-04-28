import { Nav, Navbar } from "react-bootstrap";
import { categories } from "../utils/constant";

const HeaderNavbar = ({ activeCategory, setActiveCategory }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Navbar.Brand href="/" className="px-4">
        Fresh <span className="badge bg-light text-black px-2 my-2">News</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="me-auto"
          defaultActiveKey={"#{activeCategory}"}
          variant={"pills"}
        >
          {categories.map((category) => (
            <Nav.Link
              key={category}
              href={`#${category}`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderNavbar;

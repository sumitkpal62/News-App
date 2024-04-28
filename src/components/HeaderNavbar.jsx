import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { categories, countries } from "../utils/constant";

const HeaderNavbar = ({
  activeCategory,
  setActiveCategory,
  selectedCountry,
  setSelectedCountry,
}) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Navbar.Brand href="/" className="px-4">
        Fresh <span className="badge bg-light text-black px-2 my-2">News</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-2" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav variant={"pills"}>
          {categories.map((category) => (
            <Nav.Link
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`${
                activeCategory === category ? "bg-primary" : ""
              } text-white px-4`}
              style={{ cursor: "pointer" }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Nav.Link>
          ))}
        </Nav>
        <NavDropdown
          title={countries.find((c) => c.code === selectedCountry).name}
          className="text-white bg-primary rounded px-4 py-2"
        >
          <div style={{ maxHeight: "200px", overflow: "scroll" }}>
            {countries.map((country) => (
              <NavDropdown.Item
                key={country.code}
                onClick={() => setSelectedCountry(country.code)}
              >
                {country.name}
              </NavDropdown.Item>
            ))}
          </div>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderNavbar;

import "./App.css";
import "./style/main.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container, Offcanvas, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import RouteWrapper from "./assets/RouteWrapper";


function App() {

  const location = useLocation();

  const routes = [
    '/', '/about', '/projects', '/projects/calculator', '/projects/tictac'
  ];
  const [active, setActive] = useState(routes.indexOf(location.pathname));

  //mobile offcanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //language update and local storage
  // const [Lang, changeLang] = useState("pl");
  // const langUpdate = (val) => {
  //   localStorage.setItem("language", val);
  //   changeLang(localStorage.getItem("language"));
  //   window.location.reload(false);
  // };

  //load storage data
  // useEffect(() => {
  //   if (localStorage.getItem("language") != null ) {
  //     changeLang(localStorage.getItem("language"));
  //   } else {
  //     changeLang("pl");
  //     localStorage.setItem("language", "pl");
  //   }
  // });

  useEffect(()=>{
    getLocation();  
  }, [location]);

  const getLocation = ()=>{
    if (routes.includes(location.pathname)){
      setActive(routes.indexOf(location.pathname));
    }
  }

  return (
    <div>
      <Navbar
        style={{
          boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.25)",
        }}
        className="Navbar_main"
        variant="dark"
      >
        <div className="nav-overlay"></div>
        <Container>
          <Navbar.Brand href="/" style={{zIndex:"100"}}>
            Kacper
          </Navbar.Brand>
          <Nav>
            <Nav className="me-auto d-none d-md-flex">
              <Nav.Link as={Link} to="/" className={`mainLink ${active === 0 ? 'nav-active' : ''}`}>Home page</Nav.Link>
              <div className="vr my-1 mx-4" />
              <Nav.Link as={Link} to="/about" className={`mainLink ${active === 1 ? 'nav-active' : ''}`}>About me</Nav.Link>
              <div className="vr my-1 mx-4" />
              <Nav.Link as={Link} to="/projects" className={`mainLink ${active === 2 ? 'nav-active' : ''}`}>My projects</Nav.Link>
            </Nav>
            <Button
              className="d-md-none upperbtn"
              style={{ width: "auto" }}
              onClick={handleShow}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="white"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>

            </Button>
          </Nav>
        </Container>
      </Navbar>
        {/* MOBILE */}
        <Offcanvas
          show={show}
          className="d-block d-md-none offBgc"
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Kacper</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{ maxWidth: "400px" }}>
            <hr className="my-2" />
            <Nav.Link
              className={`Offcanv d-flex ${active === 0 ? 'off-active' : ''}`}
              onClick={handleClose}
              as={Link}
              to="/"
            >
              <p className="my-auto ms-3 fw-bold" style={{ fontSize: "20px" }}>
                Home
              </p>
            </Nav.Link>
            <hr className="my-2" />
            <Nav.Link
              className={`Offcanv d-flex ${active === 1 ? 'off-active' : ''}`}
              onClick={handleClose}
              as={Link}
              to="/about"
            >
              <p className="my-auto ms-3 fw-bold" style={{ fontSize: "20px" }}>
                About
              </p>
            </Nav.Link>
            <hr className="my-2" />
            <Nav.Link
              className={`Offcanv d-flex ${active === 2 ? 'off-active' : ''}`}
              onClick={handleClose}
              as={Link}
              to="/projects"
            >
              <p className="my-auto ms-3 fw-bold" style={{ fontSize: "20px" }}>
                My projects
              </p>
            </Nav.Link>
            <hr className="my-2" />
            {/* <Container className="d-flex">
              <p
                className="my-auto fw-semibold me-2"
                style={{ fontSize: "16px" }}
              >
                ustawienia
              </p>
              <NavDropdown
                title={
                  <span className="Marecki">
                    <p className="d-inline p-1 fw-bolder">{Lang}</p>
                  </span>
                }
                className="my-auto nav-dropdown"
                onSelect={langUpdate}
              >
                <NavDropdown.Item eventKey="PL"><span className="nav-dropdown-text">PL</span></NavDropdown.Item>
                <NavDropdown.Item eventKey="EN"><span className="nav-dropdown-text">EN</span></NavDropdown.Item>
                <NavDropdown.Item eventKey="DE"><span className="nav-dropdown-text">DE</span></NavDropdown.Item>
              </NavDropdown>
              <div className="vr m-1" />
            </Container> */}
          </Offcanvas.Body>
        </Offcanvas>
      {/* routes */}

      
        <RouteWrapper/>
        {/* <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Find />} />
          <Route path="/visual" element={<MadeOrder/>} />
          <Route path="/routes" element={<TripsWrapper/>} />
          <Route path="/order/:order_id" element={<OrderWrapper/>} />
          <Route path="/order/complete/:order_id/:hash" element={<ManualOrder/>} />
          <Route path="/register" element={<IsLogin><Register /></IsLogin>} />
          <Route path="/password/reset" element={<Reset />} />
          <Route path="/email/verify/:token" element={<Validation />} />
          <Route path="/password/new/:token" element={<Reset2 />} />
          <Route path="/login" element={<IsLogin><Login /></IsLogin>} />
          <Route
            path="/account/trips"
            element={<RequireLogin><PanelTrips /></RequireLogin>}
          />
          <Route
            path="/account/settings"
            element={<RequireLogin><PanelSettings /></RequireLogin>}
          /> */}
    </div>
  );
}

export default App;

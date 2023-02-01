import "./App.css";
import "./style/main.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Offcanvas, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import RouteWrapper from "./assets/RouteWrapper";


function App() {

  //mobile offcanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //currency update and local storage
  const [curr, changeCurr] = useState("PLN");
  const currUpdate = (val) => {
    localStorage.setItem("currency", val);
    changeCurr(localStorage.getItem("currency"));
  };

  //language update and local storage
  const [Lang, changeLang] = useState("pl");
  const langUpdate = (val) => {
    localStorage.setItem("language", val);
    changeLang(localStorage.getItem("language"));
    window.location.reload(false);
  };

  //load storage data
  useEffect(() => {
    if (localStorage.getItem("language") != null && localStorage.getItem("currency") != null) {
      changeLang(localStorage.getItem("language"));
      changeCurr(localStorage.getItem("currency"));
    } else {
      changeLang("pl");
      localStorage.setItem("language", "pl");
      changeCurr("PLN");
      localStorage.setItem("currency", "PLN");
    }
  });


  return (
    <Router>
      <Navbar
        style={{
          backgroundColor: "var(--main)",
          boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.25)",
        }}
        className="Navbar_main"
        variant="dark"
      >
        <div className="nav-overlay"></div>
        <Container>
          <Navbar.Brand href="/" style={{zIndex:"100"}}>
            Brand
          </Navbar.Brand>
          <Nav>
            <Nav className="me-auto d-none d-md-flex">
              <Nav.Link href="/" className="mainLink">Home page</Nav.Link>
              <div className="vr my-1 mx-4" />
              <Nav.Link href='/about' className="mainLink">About me</Nav.Link>
              <div className="vr my-1 mx-4" />
              <Nav.Link href='/projects' className="mainLink">My projects</Nav.Link>
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
          className="d-block d-md-none"
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>MareckiTour</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{ maxWidth: "400px" }}>
            <hr className="my-2" />
            <Nav.Link
              className="Offcanv d-flex"
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
              className="Offcanv d-flex"
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
              className="Offcanv d-flex logout-btn"
              onClick={handleClose}
              as={Link}
              to="/projects"
            >
              <p className="my-auto ms-3 fw-bold" style={{ fontSize: "20px" }}>
                My projects
              </p>
            </Nav.Link>
            <hr className="my-2" />
            <Container className="d-flex">
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
              <NavDropdown
                title={
                  <span className="Marecki">
                    <p className="d-inline p-1 fw-bolder">{curr}</p>
                  </span>
                }
                className="my-auto nav-dropdown"
                onSelect={currUpdate}
              >
                <NavDropdown.Item eventKey="PLN">
                 <span className="nav-dropdown-text">PLN</span></NavDropdown.Item>
                <NavDropdown.Item eventKey="EUR">
                  <span className="nav-dropdown-text">EUR</span></NavDropdown.Item>
              </NavDropdown>
            </Container>
            <hr className="my-2" />
            <Container className="w-100">
              <Nav.Link className="Offcanv">ustawienia</Nav.Link>
              <Nav.Link className="Offcanv">ustawienia</Nav.Link>
              <Nav.Link className="Offcanv">ustawienia</Nav.Link>
            </Container>
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
    </Router>
  );
}

export default App;

import React, {useState, useEffect} from "react";
import { Link } from "gatsby";
import {Button, Container, Navbar, Nav} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./assets/styles/_index.scss";
import HexnodeLogo from "./assets/img/hexnodelogo.svg";

const Header = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
      setShow(!show);
    }
   
    const useHasScrolled = () => {
        const [scrollDirection, setScrollDirection] = useState(null) // 'up', 'down', or null
        const [lastScrollY, setLastScrollY] = useState(0)
        const [isAtTop, setIsAtTop] = useState(true)
      
        useEffect(() => {
          const onScroll = () => {
            const currentScrollY = window.scrollY
      
            if (currentScrollY === 0) {
              setScrollDirection(null)
              setIsAtTop(true)
            } else {
              setIsAtTop(false)
              if (currentScrollY > lastScrollY) {
                setScrollDirection("down")
              } else if (currentScrollY < lastScrollY) {
                setScrollDirection("up")
              }
            }
      
            setLastScrollY(currentScrollY)
          }
      
          window.addEventListener("scroll", onScroll)
      
          return () => window.removeEventListener("scroll", onScroll)
        }, [lastScrollY])
      
        return { scrollDirection, isAtTop }
      }
      
    const { scrollDirection, isAtTop } = useHasScrolled();

    // Scroll to id
    // const handleScroll = (id) => {
    //   const element = document.getElementById(id);
    //   if (element) {
    //     element.scrollIntoView({ behavior: "smooth" });
    //   }
    // };
    const handleScroll = (id, offset = 0) => {
      const element = document.getElementById(id);
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({
          top: top,
          behavior: "smooth",
        });
      }
    };
    // Scroll to id

    return(
        <div className={`header-div fixed-top ${isAtTop ? "" : scrollDirection === 'down' ? "header-scrolled down" : "header-scrolled up"}`}>
            <Navbar expand="lg" className="navbar-div">
                <Container>
                <Navbar.Brand href="https://www.hexnode.com/"><img src={HexnodeLogo} alt="" /></Navbar.Brand>                
                <Navbar.Collapse id="navbarScroll" className="navbar-item-div">
                    <Nav className="me-auto my-2 my-lg-0 navbar-items" style={{ maxHeight: '100px' }} navbarScroll>
                    <a href="javascript:void(0)" className="nav-link" onClick={() => handleScroll("why-hexnode", -100)}>Why Hexnode</a>
                    <a href="javascript:void(0)" className="nav-link" onClick={() => handleScroll("features", -100)}>Features</a>
                    <a href="javascript:void(0)" className="nav-link" onClick={() => handleScroll("multi-platform", -100)}>Platforms</a>
                    <a href="javascript:void(0)" className="nav-link" onClick={() => handleScroll("customers", -100)}>Customers</a>
                    {/* <Nav.Link href="#action1">Why Hexnode</Nav.Link>
                    <Nav.Link href="#action2">Features</Nav.Link>
                    <Nav.Link href="#action2">Platforms</Nav.Link>
                    <Nav.Link href="#action2">Customers</Nav.Link>               */}
                    </Nav>
                    <Link to="https://www.hexnode.com/mobile-device-management/cloud/signup/"><Button className="button button-primary">14 DAY FREE TRIAL</Button></Link>
                </Navbar.Collapse>

                <div className="burger-menu d-lg-none">
                    <button className="burger-menu-btn" onClick={handleShow}>
                      <div className={`burg ${show === true ? "activeBurg" : ""}`}></div>
                    </button>
                </div>                 
                </Container>

            </Navbar>
            <div className={`burger-content ${show === true ? "active" : ""}`}>
              <ul className="list-unstyled">
                <li className="why-hexnode">
                  <a href="javascript:void(0)" className="nav-link" onClick={() => handleScroll("why-hexnode", -100)}>Why Hexnode</a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="nav-link" onClick={() => handleScroll("features", -100)}>Features</a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="nav-link" onClick={() => handleScroll("multi-platform", -100)}>Platforms</a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="nav-link" onClick={() => handleScroll("customers", -100)}>Customers</a>
                </li>
                  {/* <li className="why-hexnode"><Link to="/" className="">Why Hexnode</Link></li>
                  <li><Link to="/" className="">Features</Link></li>
                  <li><Link to="/" className="">Platforms</Link></li>
                  <li><Link to="/" className="">Customers</Link></li> */}
                  <div className="offcanvas-button-div">
                      <Button className="button button-primary button-fullwidth"><Link to="https://www.hexnode.com/mobile-device-management/cloud/signup/">14 DAY FREE TRIAL</Link></Button>
                      <Link to="https://www.hexnode.com/mobile-device-management/sign-in/" className="login-button">Login</Link>
                  </div>                  
              </ul>
            </div>
        </div>        
    )
}

export default Header
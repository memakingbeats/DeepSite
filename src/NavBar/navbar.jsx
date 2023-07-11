import React, { useEffect, useState } from 'react';
import './navbar.css'; // Import the CSS file for the navbar component

function NavBar() {
  const [navbarColor, setNavbarColor] = useState('transparent');
  const [dropdownOpen, setDropdownOpen] = useState([false, false, false, false]);
  const [arrowDirection, setArrowDirection] = useState('down');

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 100) {
        setNavbarColor('#e3f2fd'); // Change the color to your desired color
      } else {
        setNavbarColor('transparent');
      }
    };

    document.addEventListener('scroll', changeNavbarColor);

    return () => {
      document.removeEventListener('scroll', changeNavbarColor);
    };
  }, []);

  const handleDropdownToggle = (index) => {
    const updatedDropdownOpen = [...dropdownOpen];
    updatedDropdownOpen[index] = !updatedDropdownOpen[index];
    setDropdownOpen(updatedDropdownOpen);
    setArrowDirection(updatedDropdownOpen[index] ? 'up' : 'down');
  };

  const handleMouseEnter = (index) => {
    if (!dropdownOpen[index]) {
      handleDropdownToggle(index);
    }
  };

  const handleMouseLeave = (index) => {
    if (dropdownOpen[index]) {
      handleDropdownToggle(index);
    }
  };

  const handleCardMouseEnter = (index) => {
    if (!dropdownOpen[index]) {
      handleDropdownToggle(index);
    }
  };

  const handleCardMouseLeave = (index) => {
    if (dropdownOpen[index]) {
      handleDropdownToggle(index);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: navbarColor }}>
      <a className="navbar-brand" href="/">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className={`navbar-toggler-icon ${arrowDirection}`}></span>
      </button>
      <div className={`collapse navbar-collapse ${dropdownOpen.some((isOpen) => isOpen) ? 'show' : ''}`} id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdownMenuLink"
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={() => handleMouseLeave(0)}
            >
              Soluçōes
            </a>
            <div
              className={`dropdown-menu ${dropdownOpen[0] ? 'show' : ''}`}
              aria-labelledby="navbarDropdownMenuLink"
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={() => handleMouseLeave(0)}
            >
              <div className="card" onMouseEnter={() => handleCardMouseEnter(0)} onMouseLeave={() => handleCardMouseLeave(0)}>
                <div className="card-body">
                  <h5 className="card-title">Dropdown Card Title</h5>
                  <p className="card-text">Additional information about the dropdown item can be placed here.</p>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdownMenuLink"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseLeave(1)}
            >
              Produtos
            </a>
            <div
              className={`dropdown-menu ${dropdownOpen[1] ? 'show' : ''}`}
              aria-labelledby="navbarDropdownMenuLink"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseLeave(1)}
            >
              <div className="card" onMouseEnter={() => handleCardMouseEnter(1)} onMouseLeave={() => handleCardMouseLeave(1)}>
                <div className="card-body">
                  <h5 className="card-title">Dropdown Card Title</h5>
                  <p className="card-text">Additional information about the dropdown item can be placed here.</p>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdownMenuLink"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={() => handleMouseLeave(2)}
            >
              Indústrias
            </a>
            <div
              className={`dropdown-menu ${dropdownOpen[2] ? 'show' : ''}`}
              aria-labelledby="navbarDropdownMenuLink"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={() => handleMouseLeave(2)}
            >
              <div className="card" onMouseEnter={() => handleCardMouseEnter(2)} onMouseLeave={() => handleCardMouseLeave(2)}>
                <div className="card-body">
                  <h5 className="card-title">Dropdown Card Title</h5>
                  <p className="card-text">Additional information about the dropdown item can be placed here.</p>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdownMenuLink"
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={() => handleMouseLeave(3)}
            >
              Materiais
            </a>
            <div
              className={`dropdown-menu ${dropdownOpen[3] ? 'show' : ''}`}
              aria-labelledby="navbarDropdownMenuLink"
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={() => handleMouseLeave(3)}
            >
              <div className="card" onMouseEnter={() => handleCardMouseEnter(3)} onMouseLeave={() => handleCardMouseLeave(3)}>
                <div className="card-body">
                  <h5 className="card-title">Dropdown Card Title</h5>
                  <p className="card-text">Additional information about the dropdown item can be placed here.</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </nav>
  );
}

export default NavBar;
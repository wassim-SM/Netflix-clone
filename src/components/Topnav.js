import React, { useState, useEffect } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { firebaseAuth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Navcontainer = styled.div`
  nav {
    position: fixed;
    top: 0;
    width: 100%;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    z-index: 100;
  }
  .topnavcontent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }
  .leftSide, .rightSide {
    display: flex;
    align-items: center;
  }
  .logo img {
    height: 40px;
    margin-left: 3rem;
  }
  .links {
    list-style: none;
    display: flex;
    gap: 1rem;
    margin-left: 2rem;
  }
  .links li a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
  .rightSide button {
    border: none;
    color: white;
    background-color: red;
    cursor: pointer;
    font-size: 20px;
    padding: 7px;
    border-radius: 50%;
  }
  .scrolled {
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .notScroll {
    background-color: transparent;
  }
`;

const Navbar = () => {
  const navlink = [
    { name: "Home", link: "/" },
    { name: "Tv show", link: "/tv" },
    { name: "My List", link: "/mylist" },
    { name: "Movies", link: "/movie" }
  ];
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (!currentUser) navigate('/login');
    });
    return () => unsubscribe();
  }, [navigate]);

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navcontainer>
      <nav className={isScrolled ? 'scrolled' : 'notScroll'}>
        <div className="topnavcontent">
          <div className="leftSide">
            <div className="logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" />
            </div>
            <ul className="links">
              {navlink.map(({ name, link }) => (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="rightSide">
            <button onClick={() => signOut(firebaseAuth)}>
              <AiOutlineLogout />
            </button>
          </div>
        </div>
      </nav>
    </Navcontainer>
  );
};

export default Navbar;

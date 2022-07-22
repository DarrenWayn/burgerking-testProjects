/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { dropdownMenu as menus } from '../utils/data';
import LogoBk from '../assets/images/bk-logo.png';

const Navbar = () => {
  return (
    <div className="navbar sticky">
      <Nav />
    </div>
  );
};

const Nav = () => {
  return (
    <>
      <div className="humbergerMenu"></div>
      <ul>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Offers</a>
        </li>
        <li>
          <a href="#">Restaurants</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Rewards</a>
        </li>
        <li>
          <a href="#">More ▾</a>
        </li>

        {/* Dropdown Menu */}
        <div class="dropdownMenu">
          <ul>
            {menus.map(m => {
              return (
                <>
                  <li>
                    <a href={m.link}>{m.menu}</a>
                  </li>
                </>
              );
            })}
          </ul>
        </div>

        <li className="burgerkingLogo">
          <a href="#">
            <img src={LogoBk} alt="BurgerKing-Logo" />
          </a>
        </li>
        <li>
          For item availability <a href="#">Choose your location</a>
        </li>
        <li>
          <button className="btn-red">Sign Up</button>
        </li>
        <li>
          <button className="btn-cart">0.00</button>
        </li>
      </ul>
    </>
  );
};

export default Navbar;

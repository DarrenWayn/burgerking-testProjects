/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { mainMenu as menus, dropdownMenu as dropmenus } from '../utils/data';
import useMediaQuery from '../hooks/useMediaQuery';
import LogoBk from '../assets/images/bk-logo.png';

const Navbar = () => {
  const isTablet = useMediaQuery('(min-width: 720px)');

  return (
    <div className="navbar sticky">
      <div className={`base ${isTablet ? 'humburgerShow' : 'humburgerRemove'}`}>
        <span>test</span>
      </div>
      <ul className="nav">
        {menus.map(m => {
          return (
            <>
              <li>
                <a href={m.link}>{m.menu}</a>
                {/* Dropdown Menu */}
                <ul className="dropdown">
                  {dropmenus.map(m => {
                    return (
                      <>
                        <li className="dropdownItem">
                          <a href={m.link}>{m.menu}</a>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </li>
            </>
          );
        })}

        <li className="burgerkingLogo">
          <a href="#">
            <img src={LogoBk} alt="BurgerKing-Logo" />
          </a>
        </li>
        <li>
          For item availability
          <a href="#" className="textRed">
            Choose your location
          </a>
        </li>
        <li>
          <button className="btnRed">Sign Up</button>
        </li>
        <li>
          <button className="btnCart">0.00</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

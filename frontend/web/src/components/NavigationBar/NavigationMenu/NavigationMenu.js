import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AuthorisedNavigationMenu from './AuthorisedNavigationMenu/AuthorisedNavigationMenu';
import CrossIcon from './CrossIcon/CrossIcon';
import HamburgerIcon from './HamburgerIcon/HamburgerIcon';
import styles from './NavigationMenu.module.scss';
import UnAuthorisedNavigationMenu from './UnAuthorisedNavigationMenu/UnAuthorisedNavigationMenu';

function NavigationMenu(props) {
  const location = useLocation();
  const [show_menu, setShowMenu] = useState(false);

  function hideMenu() {
    setShowMenu(false);
  }

  function showMenu() {
    setShowMenu(true);
  }

  function toggleMenu() {
    setShowMenu(!show_menu);
  };

  return (
    <>
      {show_menu ? '' : (
        <div className={styles.ToggleMenu} onClick={toggleMenu}>
          <HamburgerIcon />
        </div>
      )}
      <div className={`${styles.NavigationMenuList} ${show_menu ? styles.ActiveNavigationMenuList : ''}`}>
        <div className={styles.ToggleMenu} onClick={toggleMenu}>
          <CrossIcon />
        </div>
        {(location.pathname.startsWith("/user")) ? (
          <AuthorisedNavigationMenu hideMenu={hideMenu} />
        ) : (
          <UnAuthorisedNavigationMenu hideMenu={hideMenu} />
        )}
      </div>
    </>
  );
}


export default NavigationMenu;

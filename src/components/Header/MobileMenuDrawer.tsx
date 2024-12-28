import styles from './Header.module.scss';
import { NavLink } from "react-router-dom";
import { addLeadingZero } from '../../utils/helpers';
import React from 'react';

interface MobileMenuDrawerProps {
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NAV_LINKS = [
    {name: 'Home', path: '/'},
    {name: 'Destination', path: '/destination'},
    {name: 'Crew', path: '/crew'},
    {name: 'Technology', path: '/technology'}
]
export default function MobileMenuDrawer ({setIsMenuOpen}: MobileMenuDrawerProps) {

    return (
        <div className={`${styles.menu__drawer} `}>
            <img className={styles.menu__close} src={"/assets/shared/icon-close.svg"} alt={"close button"} onClick={() => setIsMenuOpen(false)}/>
            <ul className={styles.nav__list}>
                {NAV_LINKS.map((link, index) => (
                    <NavLink to={link.path}><li key={index} className={`${styles.nav__link} text-8`}><span className="bold">{addLeadingZero(index)}</span> {link.name}</li></NavLink>
                ))}
            </ul>
        </div>
    )
}
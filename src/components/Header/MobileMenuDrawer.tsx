import styles from './Header.module.scss';
import { NavLink } from "react-router-dom";
import { addLeadingZero } from '../../utils/helpers';

interface MobileMenuDrawerProps {
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const links = [
    {name: 'Home', path: '/'},
    {name: 'Destination', path: '/destination'},
    {name: 'Crew', path: '/crew'},
    {name: 'Technology', path: '/technology'}
]
export default function MobileMenuDrawer ({setIsMenuOpen}: MobileMenuDrawerProps) {
    return (
        <div className={`${styles.menu__drawer} `}>
            <img className={styles.menu__close} src={"assets/shared/icon-close.svg"} alt={"close button"} onClick={() => setIsMenuOpen(false)}/>
            <ul className={styles.nav__list}>
                {links.map((link, index) => (
                    <li key={index} className={`${styles.nav__link} text-8`}><NavLink to={link.path}><span className="bold">{addLeadingZero(index)}</span> {link.name}</NavLink></li>
                ))}
            </ul>
        </div>
    )
}
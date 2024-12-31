import styles from './Header.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS } from './MobileMenuDrawer';
import { addLeadingZero } from '../../utils/helpers';

interface MainHeaderProps {
    navigateToHome: () => void;
}
export default function MainHeader ({ navigateToHome }: MainHeaderProps) {
    const { pathname } = useLocation();

    return (
        <>
           <img className={styles.mobile__logo} src={"/assets/shared/logo.svg"} alt="SpaceX" onClick={navigateToHome}/>
            <ul className={styles.nav__list}>
                {NAV_LINKS.map((link, index) => {
                    const isActive = pathname == link.path.toLowerCase();

                    return <div className={styles.nav__item}>
                        <li className={`${styles.nav__link} ${styles.is_selected} ${isActive ? styles.active : ""} text-8`}><NavLink to={link.path}><span className="bold">{addLeadingZero(index)}</span> {link.name}</NavLink></li>
                    </div>
                })}
            </ul>
        </>
    )
}
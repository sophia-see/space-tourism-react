import styles from './Header.module.scss';
import React from 'react';

interface MobileHeaderProps {
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    navigateToHome: () => void;
}
export default function MobileHeader ({setIsMenuOpen, navigateToHome}: MobileHeaderProps) {
    return (
        <>
            <img className={styles.mobile__logo} src={"/assets/shared/logo.svg"} alt="SpaceX" onClick={navigateToHome}/>
            <img className={styles.mobile__burger} src={"/assets/shared/icon-hamburger.svg"} alt="Menu" onClick={() => setIsMenuOpen(true)}/>
        </>
    )
}
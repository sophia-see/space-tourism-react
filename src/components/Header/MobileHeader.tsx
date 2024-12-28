import styles from './Header.module.scss';
import React from 'react';

interface MobileHeaderProps {
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function MobileHeader ({setIsMenuOpen}: MobileHeaderProps) {
    return (
        <>
            <img className={styles.mobile__logo} src={"/assets/shared/logo.svg"} alt="SpaceX" />
            <img className={styles.mobile__burger} src={"/assets/shared/icon-hamburger.svg"} alt="Menu" onClick={() => setIsMenuOpen(true)}/>
        </>
    )
}
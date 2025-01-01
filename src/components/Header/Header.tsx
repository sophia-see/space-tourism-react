import React from 'react';
import './Header.module.scss';
import MainHeader from './MainHeader';
import MobileHeader from './MobileHeader';
import MobileMenuDrawer from './MobileMenuDrawer';
import { useLocation, useNavigate } from 'react-router-dom';
import useDeviceSize from '../../hooks/useDeviceSize';

interface HeaderProps {
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Header ({isMenuOpen, setIsMenuOpen}: HeaderProps) {
    const { isMobile } = useDeviceSize();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate(`/`);     
    }
    
    React.useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const renderHeader = React.useMemo(() => {
        return isMobile ? <MobileHeader setIsMenuOpen={setIsMenuOpen} navigateToHome={navigateToHome}/> : <MainHeader navigateToHome={navigateToHome}/>;
    }, [isMobile]);



    return (
        <header>
            <nav>
                {renderHeader}
            </nav>
            {isMenuOpen && <MobileMenuDrawer setIsMenuOpen={setIsMenuOpen}/>}
        </header>
    )
}
import React from 'react';
import './Header.module.scss';
import MainHeader from './MainHeader';
import MobileHeader from './MobileHeader';
import MobileMenuDrawer from './MobileMenuDrawer';
import useViewportSize from '../../hooks/useViewportSize';
import { useLocation } from 'react-router-dom';

export default function Header () {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const {width} = useViewportSize();
    const { pathname } = useLocation();

    React.useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const renderHeader = React.useMemo(() => { 
        if (width > 768) {
            return <MainHeader />;
        }
        return <MobileHeader setIsMenuOpen={setIsMenuOpen}/>;
    }, [width]);

    return (
        <header>
            <nav>
                {renderHeader}
            </nav>
            {isMenuOpen && <MobileMenuDrawer setIsMenuOpen={setIsMenuOpen}/>}
        </header>
    )
}
import './styles/main.scss'
import { Route, BrowserRouter, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home/Home'
import Destination from './components/Destination/Destination'
import Crew from './components/Crew/Crew'
import Technology from './components/Technology/Technology'
import NotFound from './components/NotFound'
import Header from './components/Header/Header'
import React from 'react'
import useDeviceSize from './hooks/useDeviceSize'
import { NAV_LINKS } from './components/Header/MobileMenuDrawer'

function Main() {
  const { pathname } = useLocation();
  const {isMobile, isTablet, isDesktop} = useDeviceSize();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const backgroundImage = React.useMemo(() => {
    const size = isMobile ? "mobile" : isTablet ? "tablet" : "desktop";

    const navPath = NAV_LINKS.find(link => pathname.startsWith(`/${link.name.toLowerCase()}`)) ?? NAV_LINKS[0];
    const navName = navPath.name.toLowerCase();
    
    return `url(/assets/${navName}/background-${navName}-${size}.jpg)`;
  }, [pathname, isMobile, isTablet, isDesktop]);

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = ''; 
    }
  }, [isMenuOpen]);

  return (
    <div 
      id="App"
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        height: '100%',
        width: '100vw',
      }}
    >
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination/:id" element={<Destination />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew/:id" element={<Crew />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology/:id" element={<Technology />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="*" element={<NotFound />} />     
      </Routes>    
    </div>
  )
}

const App = () => (
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);

export default App;

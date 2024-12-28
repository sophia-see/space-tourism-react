import './styles/main.scss'
import { Route, BrowserRouter, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home/Home'
import Destination from './components/Destination/Destination'
import Crew from './components/Crew/Crew'
import Technology from './components/Technology/Technology'
import NotFound from './components/NotFound'
import Header from './components/Header/Header'
import React from 'react'
import useViewportSize from './hooks/useViewportSize'
import useDeviceSize from './hooks/useDeviceSize'

function Main() {
  const { pathname } = useLocation();
  const {isMobile, isTablet, isDesktop} = useDeviceSize();

  const backgroundImage = React.useMemo(() => {
    const size = isMobile ? "mobile" : isTablet ? "tablet" : "desktop";

    switch (pathname) {
      // case '/':
      //   return `url(/assets/home/background-home-${size}.jpg)`;
      case '/destination':
      case '/crew':
      case '/technology':
        return `url(/assets${pathname}/background-${pathname.replace("/","")}-${size}.jpg)`;
      default:
        return `url(/assets/home/background-home-${size}.jpg)`;
    }
  }, [pathname, isMobile, isTablet, isDesktop]);

  return (
    <div 
      id="App"
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination/:id" element={<Destination />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
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

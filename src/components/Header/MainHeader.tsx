import './Header.module.scss';
import { NavLink } from 'react-router-dom';

export default function MainHeader () {
    return (
        <ul className='nav__list'>
            <li className='nav__link'><NavLink to="/">Home</NavLink></li>
            <li className='nav__link'><NavLink to="/destination">Destination</NavLink></li>
            <li className='nav__link'><NavLink to="/crew">Crew</NavLink></li>
            <li className='nav__link'><NavLink to="/technology">Technology</NavLink></li>
        </ul>
    )
}
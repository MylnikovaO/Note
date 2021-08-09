import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div>
            <nav className='nav' >
                <NavLink exact className='navigation' to='/'>Home</NavLink>
                <NavLink className='navigation' to='/note'>Note</NavLink>
                <NavLink className='navigation' to='/create'>Create</NavLink>
                <NavLink className='navigation' to='/about'>About</NavLink>
            </nav>
        </div>
    );
}

export default Header;
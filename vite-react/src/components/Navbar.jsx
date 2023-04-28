import reactLogo from '../assets/react.svg';
import '../style.css';

function Navbar() {
    return (
        <nav>
            <img className='nav--logo' src={reactLogo}></img>
            <h3 className='nav--logo-text'>ReactFacts</h3>
            <h4 className='nav--title'>React Course-Project 1</h4>
        </nav>

    );
}

export default Navbar;
function Header() {
    return (
        <div>
            <nav className='nav'>
                <img src='src/assets/react.svg' 
                alt=''/>

                <ul className='nav-list'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>

            <h1>Fun facts about React</h1>
        </div>
    )
}

export default Header;
import globe from '/images/globe.png'

function Navbar() {
    return (
        <nav>
            <img src={globe} alt="globe" />
            <p>my travel journal</p>
        </nav>
    )
}

export default Navbar
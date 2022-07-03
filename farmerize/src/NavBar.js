import React from 'react'

function NavBar() {
    return(
        <div>
            <nav>
                <div className='logo'>React Nav</div>
                <ul className='nav-links'>
                    <li><a>Logo</a></li>
                    <li><a>Farmerize</a></li>
                    <li><a>Search</a></li>
                    <li><a>Wishlist</a></li>
                    <li><a>Cart</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
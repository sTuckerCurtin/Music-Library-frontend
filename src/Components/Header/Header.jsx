import React from 'react';
import "./Header.css"

const Header = (props) => {
    return ( 
        <section>
            <div>
                <header>

                    <nav className='navbar navbar-light coral'>
                        <a className='navbar-brand' href='#'>
                            <img src='headset.png' width='30' height='30' className='d-inline-block align-top' alt='' />
                            Toe\Tappr
                        </a>
                    </nav>
                </header>
            </div>
        </section>
    );
}
 
export default Header;

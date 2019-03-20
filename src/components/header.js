import React from 'react';
import './header.css'

function Header (props) {
    
        return (

            <nav>
            <div className="navbar-fixed">
                <div class="nav-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m6">
                                <input type="text" id="icon_prefix" placeholder="   Buscar..." className="validate holi"></input>
                            </div>

                        </div>
                    </div>   
                </div>
            </div>    
            </nav>
            
        ) 
}

export default Header;
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Navbar extends Component {
    render(){
        return(
            <nav className="navBar">
                <div className="site-wrap">
                        <div className="site-mobile-menu site-navbar-target">
                            <div className="site-mobile-menu-header">
                                
					            <div className="site-mobile-menu-close ">
						            <span className="icon-close2 h1 js-menu-toggle"></span>
				                </div>
                        
                                <div className="menu-nav">
                                    <ul>
                                    <li><span className="icon-home h3"><NavLink exact to="/"> Homepage</NavLink></span></li>
                                        <li><span className="icon-tv h3"><NavLink to="/about/"> Channels</NavLink></span></li>
                                        <li><span className="icon-film h3"><NavLink to="/movies/"> All Movies</NavLink></span></li>
                                        <li><span className="icon-user h3"><NavLink to="/portfolio/"> Account</NavLink></span></li>
                                        <li><span className="icon-money h3"><NavLink to="/portfolio/"> Wallet</NavLink></span></li>
                                        <li><span className="icon-cloud h3"><NavLink to="/portfolio/"> Subscription</NavLink></span></li>
                                        
                                        <li><span className="icon-power-off h3"><NavLink to="/contact/"> LogOut</NavLink></span></li>
                                    </ul>
                                </div>
				            </div>
			            </div>
               
                        <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
                            <div className="container-fluid">
                                <div className="d-flex align-items-center">
                                    <div className="site-logo mr-auto w-25">
                                        <a href="/" className="nav-logo">
                                        <span className="icon-tv h5"></span>
                                        </a>
                                    </div>

                                        <div className="mx-auto text-center">
                                            <nav className="site-navigation position-relative text-right" role="navigation">
                                                <ul className="site-menu main-menu js-clone-nav mx-auto d-none d-lg-block  m-0 p-0">
                                                    <li><NavLink exact to="/"> <span className="icon-television h5"></span> LIVE TV CHANNELS</NavLink></li>
                                                    <li><NavLink to="/movies/"> <span className="icon-film h5"></span> MOVIES ON DEMAND</NavLink></li>
                                                    <li><NavLink to="/tutorial/"> PVR <span className="icon- h3"></span></NavLink></li>
                                                </ul>
                                            </nav>
                                        </div>

                                        <div className="ml-auto w-25">
                                            <nav className="site-navigation position-relative text-right" role="navigation">
                                                <ul className="site-menu main-menu  js-clone-nav mr-auto d-none d-lg-block m-0 p-0">
                                                    <li><NavLink to="/contact/">SETTINGS <span className="icon-settings_input_composite h5"></span></NavLink></li>
                                                </ul>
                                            </nav>
                                            <a href="/" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle float-right"><span className="icon-menu h1"></span></a>
                                        </div>
                                </div>
                            </div>
                        </header>
                </div>
            </nav>
        );
    }
}
export default Navbar;
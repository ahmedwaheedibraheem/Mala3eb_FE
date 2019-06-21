import React from 'react';
import './footer.module.css';
import Class from './footer.module.css';
import '../../Theme/bootstrap.css';
import { Link } from 'react-router-dom';


const Footer = (props) => {
    return (
        <div className="container-fuild">
            <div className="row no-gutters">
                <div className="col-md-12">
                    <div className={Class.backcolor}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <h3>Recent Posts</h3>
                                <p>Single Post – Sidebar<br></br>APRIL 11, 2014</p>
                                <p>Single Post – Sidebar<br></br>APRIL 11, 2014</p>
                                <p>Single Post – Sidebar<br></br>APRIL 11, 2014</p>
                                <p>Single Post – Sidebar<br></br>APRIL 11, 2014</p>
                            </div>
                            <div className="col-md-4">
                                <h3>Recent Topics</h3>
                                <p>Single Post – Sidebar<br></br>APRIL 11, 2014</p>
                                <p>Single Post – Sidebar<br></br>APRIL 11, 2014</p>
                                <p>Single Post – Sidebar<br></br>APRIL 11, 2014</p>
                                <p>Single Post – Sidebar<br></br>APRIL 11, 2014</p>
                            </div>
                            <div className="col-md-4">
                                <h3>About Our Team</h3>
                                <p>Elit cernantur in pariatur. Te illum de aute, a incididunt te pariatur. Vidisse aut tempor. Eu aut lorem cernantur, occaecat dolor mandaremus consequat. Do labore excepteur, dolor id admodum.</p>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-6" className={Class.pageFooter}>
                                        <Link to=""><i className="fab fa-facebook-square"></i></Link>
                                        <Link><i className="fab fa-twitter"></i></Link>
                                        <Link><i className="fab fa-instagram"></i></Link>
                                    </div>
                                    <div className={Class.copyright} className="col-md-6">Copyright Egemenerd</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;
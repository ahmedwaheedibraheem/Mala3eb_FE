import React, { Component } from 'react';
import * as classess from './contactus.module.css'
import '../../Theme/bootstrap.css';
import { Link } from 'react-router-dom';

class Contactus extends Component {

    state = {
        Pageaddress: "ملاعب",
    }
    render() {
        return (
            <div className={classess.customersupport}>
                <div className={`${classess.containerfluidEdit}container-fluid text-center`}>
                    <div className={classess.bgimg}>
                        <div className={classess.overlay}>
                            <div className="row no-gutters">
                                <div className="col-lg-12">
                                    <div className={classess.pageHeader}>
                                        <Link to="/main"><h3>{this.state.Pageaddress}</h3></Link>
                                        <div>
                                            <Link to="/aboutus" className={classess.pagelink}> من نحن</Link>
                                            <Link to="/contactus" className={classess.pagelink}>تواصل معنا</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4 className={classess.pageBody}>Let's make customer support interaction<br></br> <span>more hummen </span>&amp; <span>more reliable.</span></h4>
                            <div className="row no-gutters">
                                <div className="col-sm">
                                    <i className={`fa fa-phone ${classess.phone} text-white`}></i>
                                    <h6>Phone</h6>
                                    <p> 01014114494 <br/></p>
                                </div>
                                <div className="col-sm">

                                    <i className={`fas fa-envelope ${classess.Email} text-white`}></i>
                                    <h6>Email</h6>
                                    <p> hebahamed300@gmail.com<br/></p>
                                </div>
                                <div className="col-sm">

                                    <i className={`fas fa-map-marker-alt ${classess.Address} text-white`}></i>
                                    <h6>Address</h6>
                                    <p>ITI ismailia <br></br><br></br></p>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-sm-12">
                                    <div className={classess.pageFooter}>
                                        <Link to=""><i className="fab fa-facebook-square"></i></Link>
                                        <Link><i className="fab fa-twitter"></i></Link>
                                        <Link><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contactus;
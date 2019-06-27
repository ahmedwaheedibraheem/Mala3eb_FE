import React, { Component } from 'react';
import * as classess from './aboutus.module.css'
import '../../Theme/bootstrap.css';
import { Link } from 'react-router-dom';

class Aboutus extends Component {

    state = {
        Pageaddress: "ملاعب",
        pagedescription: "قم بتسجيل الدخول أو انشاء حساب جديد للغوص فى عالم كرة القدم الافتراضى الذى يقدمه ملاعب"
    }
    render() {
        return (
            <div className={classess.customersupport}>
                <div className={`${classess.containerfluidEdit}container-fluid text-center`}>
                    <div className="row no-gutters">
                        <div className={classess.bgimg}>
                            <div className={classess.overlay}>
                                <div className="col-lg-12">
                                    <div className={classess.pageHeader}>
                                        <Link to="/main"><h3>{this.state.Pageaddress}</h3></Link>
                                        <div>
                                            <Link to="/aboutus" className={classess.pagelink}> من نحن</Link>
                                            <Link to="/contactus" className={classess.pagelink}>تواصل معنا</Link>
                                            <Link to="/" className={classess.pagelink}>تسجيل الدخول </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className={classess.backcolor}>
                                        <div className="row no-gutters">
                                            <div className="col-sm">
                                                <h3>Our Promise</h3>
                                                <p>هذا الموقع هدفه أن يمنح للمستخدم تجربه <br></br></p>
                                            </div>
                                            <div className="col-sm">
                                                <h3>Our Promise</h3>
                                                <p>Cras quis commodo,aliquam lectus sed.<br></br>Cras quis commodo,aliquam lectus sed.</p>
                                            </div>
                                            <div className="col-sm">

                                                <h3>Our mission</h3>
                                                <p>Cras quis commodo,aliquam lectus sed.<br></br>Cras quis commodo,aliquam lectus sed</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

export default Aboutus;
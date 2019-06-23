import React, { Component } from 'react';
import Classes from './main-page.module.css';
import { Link } from 'react-router-dom';
import '../../Theme/bootstrap.css';


class Mainpage extends Component {
    state = {
        Pageaddress: "ملاعب",
        pagedescription: "قم بتسجيل الدخول أو انشاء حساب جديد للغوص فى عالم كرة القدم الافتراضى الذى يقدمه ملاعب"
    }

    onLoginHandler() {
        this.props.history.push('login');
    }

    onRegisterHandler() {
        this.props.history.push('/register');
    }

    render() {
        return (
            <div className={`${Classes.containerfluidEdit}container-fluid`}>
                <div className="row no-gutters">
                    <div className="col-lg-12">
                        <div className={Classes.bgimg}>
                            <div className={Classes.overlay}>
                                <div className={Classes.pageHeader}>
                                    <Link to="/main"><h3>{this.state.Pageaddress}</h3></Link>
                                    <div>
                                        <Link to="/aboutus" className={Classes.pagelink}> من نحن</Link>
                                        <Link to="/contactus" className={Classes.pagelink}>تواصل معنا</Link>
                                    </div>
                                </div>
                                <div className={Classes.pageBody}>
                                    <h2>{this.state.Pageaddress}</h2>
                                    <div className={Classes.parag}>{this.state.pagedescription}</div>
                                    <div className={Classes.pageBtn}>
                                        <button onClick={() => { this.onLoginHandler() }} type="button" className={`${Classes.regist} btn btn-success`} >تسجيل الدخول</button>
                                        <button onClick={() => { this.onRegisterHandler() }} type="button" className={`${Classes.newcont} btn btn-outline-secondary`}>حساب جديد</button>
                                    </div>
                                </div>
                                <div className={Classes.pageFooter}>
                                    <Link to=""><i className="fab fa-facebook-square"></i></Link>
                                    <Link to=""><i className="fab fa-twitter"></i></Link>
                                    <Link to=""><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mainpage;
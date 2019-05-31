import React, { Component } from 'react';
import Classes from './main-page.module.css';
import '../../Theme/bootstrap.css';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
} from 'react-router-dom';

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
                                    <h3>{this.state.Pageaddress}</h3>
                                    <div>
                                        <Router>
                                            <Link to="" className={Classes.pagelink}> من نحن</Link>
                                            <Link to="" className={Classes.pagelink}>تواصل معنا</Link>
                                        </Router>
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
                                    <i className="fab fa-facebook-square"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fa-instagram"></i>
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

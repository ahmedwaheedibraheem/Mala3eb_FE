import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as userActions from '../../Store/User/user-actions';
import * as SearchAPI from '../../API/search';

class Navbar extends Component {
    state = {
        searchKey: ''
    }

    async searchHandler(searchKey) {
        let result = await SearchAPI.search(searchKey);
        console.log(result);
        this.props.history.push(`/searchresult`, result);
    }

    logoutHandler = () => {
        localStorage.removeItem('token');
        this.props.setAppUser(null);
        this.props.history.push('/');
    }

    render() {
        // no user
        let links = <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink exact className="nav-link" to="/aboutus">تعرف علينا</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact className="nav-link" to="/contactus">تواصل معنا</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact className="nav-link" to="/login">تسجيل الدخول</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact className="nav-link" to="/register">إنشاء حساب جديد</NavLink>
                </li>
            </ul>
        </div>
        // user logged in
        if (this.props.user) {
            links = <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/entitiespage">الكيانات</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/creation"> جديد</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/pitchlist"> احجز ملعبك</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/aboutus">تعرف علينا</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/contactus">تواصل معنا</NavLink>
                    </li>
                </ul>
                <button type="button" style={{ color: "red" }} className="btn btn-link" onClick={this.logoutHandler}>تسجيل الخروج</button>
            </div>
        }
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">ملاعب</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <form className="form-inline my-2 my-lg-0">
                        <input onChange={(event) => { this.setState({ searchKey: event.target.value }) }}
                            className="form-control mr-sm-2"
                            type="text"
                            placeholder="بحث" />
                        <button
                            onClick={(event) => { event.preventDefault(); this.searchHandler(this.state.searchKey) }}
                            className="btn btn-secondary my-2 my-sm-0"
                            type="submit">بحث</button>
                    </form>
                </div>
                {links}
            </nav>
        );
    }
}

// Map state to props
const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
};

// mapActionsToProps
const mapActionsToProps = (dispatch) => {
    return {
        setAppUser: (user) => dispatch(userActions.setAppUser(user))
    };
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Navbar));
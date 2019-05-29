import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">ملاعب</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"><i className="fas fa-bell"></i> <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="far fa-comment"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fas fa-user-alt"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="far fa-heart"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="far fa-plus-square"></i></a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="بحث" />
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">بحث</button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default Navbar;
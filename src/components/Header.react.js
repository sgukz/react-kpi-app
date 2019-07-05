// react components
import React from 'react'
// render html 
class Header extends React.Component {
    render() {
        return (
            <nav className="navbar has-shadow is-white">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <img src="/hrms-logo.png" alt="ระบบบริหารทรัพยากรบุคคล : Human Resource Management System" width="112" height="28" />
                        </a>

                        <div className="navbar-burger burger" data-target="navMenuColorinfo-example">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div id="navMenuColorinfo-example" className="navbar-menu">
                        <div className="navbar-start">
                            <a className="navbar-item" href="https://bulma.io/">
                                <span className="icon">
                                    <i className="fas fa-home"></i>
                                </span>&nbsp;หน้าแรก
                            </a>
                            <a className="navbar-item">
                                <span className="icon">
                                    <i className="fas fa-book"></i>
                                </span>&nbsp;คู่มือการใช้งาน
                            </a>
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link">
                                    <span className="icon">
                                        <i className="fas fa-rss"></i>
                                    </span>&nbsp;เพิ่มเติม
                                </a>
                                <div className="navbar-dropdown">
                                    <a className="navbar-item">
                                        About
                                    </a>
                                    <hr className="navbar-divider" />
                                    <a className="navbar-item">
                                        Report an issue
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <a className="button is-light">
                                        <span className="icon has-text-info">
                                            <i className="fas fa-sign-in-alt"></i>
                                        </span>&nbsp;เข้าสู่ระบบ
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        )
    }
}

export default Header
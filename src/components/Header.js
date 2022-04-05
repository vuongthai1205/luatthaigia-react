import { Link } from "react-router-dom"
function Header(){
    return (
        <div className="grid wide">
            <header className="header">
                <Link className="logo" to="/">Luật THÁI GIA</Link>
                <nav className="navbar hide-on-tablet hide-on-mobile">
                    <ul className="navbar__list">
                        <li className="navbar__item">
                            <Link to="/sohuutritue">
                                Sở hữu trí tuệ
                            </Link>
                            <i className="fa-solid fa-angle-down"></i>
                            <div className="navbar-menu">
                                <ul className="navbar-menu__list">
                                    <li className="navbar-menu__item">Bản quyền tác giả</li>
                                    <li className="navbar-menu__item">Nhãn hiệu hàng hóa</li>
                                    <li className="navbar-menu__item">Kiểu dáng công nghiệp</li>
                                </ul>
                            </div>
                        </li>
                        <li className="navbar__item">
                            <a href="./index.html">
                                Dịch vụ cung cấp
                            </a>
                            <i className="fa-solid fa-angle-down"></i>
                            <div className="navbar-menu">
                                <ul className="navbar-menu__list">
                                    <li className="navbar-menu__item">Bản quyền tác giả</li>
                                    <li className="navbar-menu__item">Nhãn hiệu hàng hóa</li>
                                    <li className="navbar-menu__item">Kiểu dáng công nghiệp</li>
                                    <li className="navbar-menu__item">Bản quyền tác giả</li>
                                    <li className="navbar-menu__item">Nhãn hiệu hàng hóa</li>
                                    <li className="navbar-menu__item">Kiểu dáng công nghiệp</li>
                                </ul>
                            </div>
                        </li>
                        <li className="navbar__item">
                            <a href="./index.html">
                                Cam kết Luật Thái Gia
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="contact">
                    <span className="contact__time hide-on-mobile">
                        <i className="fa-regular fa-clock"></i>
                        09:00 - 18:00
                    </span>
                    <span className="contact__tel hide-on-mobile">
                        <i className="fa-solid fa-phone"></i>
                        0933.943.686
                    </span>
                    <span className="contact__more"><i className="fa-solid fa-bars"></i></span>
                </div>
            </header>
        </div>
    )
  }
export default Header
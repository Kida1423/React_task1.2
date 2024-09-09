 import logoImg from './../../img/icons/logo.svg'
 import './header.css'

 function Header(){
    return (
        <header className='header'>
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={logoImg} alt="logo" />
                        <span>FASHION</span>
                    </div>
                    <nav className="header__nav">
                        <ul>
                            <li><a href="#!"></a>CATALOGUE</li>
                            <li><a href="#!"></a>FASHION</li>
                            <li><a href="#!"></a>FAVOURITE</li>
                            <li><a href="#!"></a>LIFESTYLE</li>
                            <li ><a href="#!" className='header__nav-btn'>SIGN UP</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
 }

 export default Header
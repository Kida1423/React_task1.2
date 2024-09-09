import "./footer.css"
import facebook from "./../../img/logos/facebook.png"
import instagram from "./../../img/logos/instagram.png"
import twitter from "./../../img/logos/twitter.png"
import linkidin from "./../../img/logos/in.png"

const Footer = () => {
    return ( 
        <footer>
            <div className="container__footer">
                <div className="footer_left">
                    <h3>FASHION</h3>
                    <p>Complete your style with awesome clothes from us.</p>
                    <div className="social">
                        <div>
                            <a href="#!"><img src={facebook} alt="Facebook" /></a>
                        </div>
                        <div>
                            <a href="#!"><img src={instagram} alt="Instagram" /></a>
                        </div>           
                        <div>
                            <a href="#!"><img src={twitter} alt="Twitter" /></a>
                        </div>
                        <div>
                            <a href="#!"><img src={linkidin} alt="Linkidin" /></a>
                        </div>
                    </div>
                </div>
                <div className="footer_right">
                    <div className="menu">
                        <h3>Company</h3>
                        <ul>
                            <li>About</li>
                            <li>Contact us</li>
                            <li>Support</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className="menu">
                        <h3>Quick Link</h3>
                        <ul>
                            <li>Share Location</li>
                            <li>Orders Tracking</li>
                            <li>Size Guide</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div className="menu">
                        <h3>Legal</h3>
                        <ul>
                            <li>Terms & conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>  
            </div>
        </footer>
     );
}
 
export default Footer;
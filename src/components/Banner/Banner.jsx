
import "./../Promo/promo.css"
import "./banner.css"
import BannerImg from "./../../img/imges/banner-img.jpg"

const Banner = () => {
    return ( 
        <section className="banner"> 
            <div className="container">
                <div className="banner__content">
                    <div className="banner__img">
                        <img src={BannerImg} alt="BannerImg" />
                    </div>
                    <div className="banner__text">
                        <div className="promo__title banner_title">
                            <span className='highlight'>
                                <span>PAYDAY</span>
                            </span>
                            SALE NOW
                        </div>
                        <div className="promo__desc banner_desc">
                            <p>Spend minimal $100 get 30% off
                            voucher code for your next purchase</p>

                            <span>1 June - 10 June 2021</span>

                            *Terms & Conditions apply
                        </div>
                        <div className="banner__btn-wrapper">
                            <a href="#!" className='promo__btn'>
                            SHOP NOW
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
     );
}
 
export default Banner;
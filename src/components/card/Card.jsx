import styles from "./card.module.css"
import cat01Img from "./../../img/categories/01.jpg"
import arrowImg from "./../../img/icons/arrow.svg"

const Card = ({item, width}) => {
    return ( 
        <div className={styles.card} style={{width: `${width}%`}}>
            <a href="#!" className={styles.card__link}></a>
            <img className={styles.card__img} src={item.src} alt="img"/>
            <div className={styles.card__body}>
                <div className={styles.card__text}>
                    <div className={styles.card__title}>{item.title}</div>
                    <div className={styles.card__muted}>Explore Now  </div>
                </div>
                <div className={styles.card__icon}>
                    <img src={arrowImg} alt="arrow" />
                </div>  
            </div>
        </div>
     );
}
 
export default Card;
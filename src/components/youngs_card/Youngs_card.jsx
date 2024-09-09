import Card from "../card/Card.jsx"

import cat02Img from "./../../img/categories/youngs_01.jpg"
import cat01Img from "./../../img/categories/youngs_02.jpg"

import "./../arrivals/arrivals.css"

const Youngs = () => {
    let content = [
        {
            src: cat01Img,
            title: 'Trending on instagram'
        },
        {
            src: cat02Img,
            title: 'All Under $40'
        }
    ]
    return ( 
        <section className="arrivals">
            <div className="container">
                <div className="arrivals__header">
                    <div className="title-2">Young’s Favourite</div>
                </div>
                <div className="arrivals__cards">
                    {content.map((item, index) => {
                        return <Card item={item} key={index} width={100 / content.length}/>
                    })}
                </div>
            </div>
        </section>
     );
}
 
export default Youngs;
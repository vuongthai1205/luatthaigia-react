import IMAGES from "../assets/images"
function Banner(){
    return (
        <section className="banner-container hide-on-mobile hide-on-tablet">
            <div className="banner grid wide" style={{display:"flex"}}>
                <img src={IMAGES.banner5} alt="" className="banner__img"/>
                <img src={IMAGES.banner6} alt="" className="banner__img"/>
                <img src={IMAGES.banner7} alt="" className="banner__img"/>
                <img src={IMAGES.banner8} alt="" className="banner__img"/>
            </div>
        </section>
    )
}
export default Banner
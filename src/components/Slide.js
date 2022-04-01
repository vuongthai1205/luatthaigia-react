
import IMAGES from '../assets/images';

function Slide(){
    // let slideIndex = 1
    // function handleSlide(n){
    //     if (n > slides.length){
    //         slideIndex = 1
    //     }
    //     if (n < 1) {
    //         slideIndex = slides.length
    //     }
    //     if (slideIndex > slides.length) {
    //         slideIndex = 1
    //     }
    //     slideIndex++;
    //     setTimeout(handleSlide, 1000)
    //     return slides[slideIndex-1]
    // }
    
    return (
        <section className="slide-show grid">
          <div className="slides fade">
              <img src={IMAGES.img_04} alt="Hình ảnh luật sư" className="slide__img" style={{width:"100%", height:"100%"}}/>
          </div>
      </section>
    )
}

export default Slide
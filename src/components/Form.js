
function Form(){
    
    return (
        <section className="form-container" id="form1">
            <div className="form grid wide">
                <div className="row">
                    <form action="" method="post" className="col l-8 c-12 m-12">
                        <div className="form__item">
                            <input type="text" name="name" required id="form__name" placeholder="Họ và tên..."/>
                            <span className="form__required"></span>
                        </div>
                        <div className="form__item">
                            <input type="email" name="email" required placeholder="Email của bạn..."/>
                            <span className="form__required"></span>
                        </div>
                        <div className="form__item">
                            <input type="tel" name="number" required placeholder="Số điện thoại..."/>
                            <span className="form__required"></span>
                        </div>
                        <div className="form__item">
                            <input type="tel" name="tittle" required placeholder="Tiêu đề..."/>
                            <span className="form__required"></span>
                        </div>
                        <div className="form__item">
                            <input type="text" name="description" required placeholder="Mô tả vấn đề của bạn..."/>
                            <span className="form__required"></span>
                        </div>
                        <div className="form__notify"></div>
                        <button className="btn" id="form__submit">
                                <i className="fa-solid fa-paper-plane"></i>
                        </button>
                    </form>
                    <div className="col l-4 c-12 m-12">
                        <div className="info-form">
                            <h2>Thông tin liên hệ</h2>
                            <span><i className="fa-solid fa-location-crosshairs"></i>602/51e Điện Biên Phủ, P.22, Q.Bình Thạnh</span>
                            <span><i className="fa-solid fa-mobile-screen-button"></i>0933 943 686</span>
                            <span><i className="fa-solid fa-envelope"></i>contact@luatthaigia.com</span>
                            <span><i className="fa-brands fa-facebook"></i>fb.com/luatthaigia</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Form
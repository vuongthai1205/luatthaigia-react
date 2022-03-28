import CSS from './assets/css';
import IMAGES from './assets/images';
function Header(){
  return (
      <div className="grid wide">
          <header className="header">
              <a className="logo" href="index.html">Luật THÁI GIA</a>
              <nav className="navbar hide-on-tablet hide-on-mobile">
                  <ul className="navbar__list">
                      <li className="navbar__item">
                          <a href="#">
                              Sở hữu trí tuệ
                          </a>
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
                          <a href="#">
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
                          <a href="#">
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
                      0933 943 686
                  </span>
                  <span className="contact__more"><i className="fa-solid fa-bars"></i></span>
              </div>
          </header>
      </div>
  )
}
function App() {
  return (
    <div className="App">
      <Header/>
      <section className="slide-show grid">
          <div className="slides fade">
              <img src={IMAGES.img_03}alt="Hình ảnh luật sư" className="slide__img" style={{width:"100%", height:"100%"}}/>
          </div>
          <div className="slides fade">
              <img src={IMAGES.img_04} alt="Hình ảnh luật sư" className="slide__img" style={{width:"100%", height:"100%"}}/>
          </div>
      </section>
      <section className="banner-container hide-on-mobile hide-on-tablet">
          <div className="banner grid wide" style={{display:"flex"}}>
              <img src={IMAGES.banner5} alt="" className="banner__img"/>
              <img src={IMAGES.banner6} alt="" className="banner__img"/>
              <img src={IMAGES.banner7} alt="" className="banner__img"/>
              <img src={IMAGES.banner8} alt="" className="banner__img"/>
          </div>
      </section>
      <section className="advert-container">
          <div className="advert grid wide" style={{display:"flex"}}>
              <div className="row">
                  <div className="advert__content c-12 m-3 l-4 col" style={{display:"flex"}}>
                      <img src={IMAGES.advert1} alt="" className="advert__icon"/>
                      <h3 className="advert__title">UY TÍN</h3>
                      <p className="advert__text">Luật Thái Gia chỉ nhận và thực hiện dịch vụ pháp lý cho Khách Hàng một khi đã tìm hiểu kỹ và trong khả năng của mình, đảm bảo cung cấp dịch vụ tốt nhất cho Khách Hàng.</p>
                  </div>
                  <div className="advert__content c-12 m-3 l-4 col" style={{display:"flex"}}>
                      <img src={IMAGES.advert2} alt="" className="advert__icon"/>
                      <h3 className="advert__title">CHUYÊN NGHIỆP</h3>
                      <p className="advert__text">Với đội ngũ nhân sự được tổ chức theo từng chuyên ngành, chúng tôi đã và đang hiện thực hóa mục tiêu "Luật sư của doanh nghiệp, luật sư riêng của gia đình và luật sư riêng của cá nhân".</p>
                  </div>
                  <div className="advert__content c-12 m-3 l-4 col" style={{display:"flex"}}>
                      <img src={IMAGES.advert3} alt="" className="advert__icon"/>
                      <h3 className="advert__title">TRÁCH NHIỆM</h3>
                      <p className="advert__text">Khách Hàng sử dụng dịch vụ của Luật Thái Gia sẽ thật sự an tâm để phát triển cộng việc của mình, toàn bộ các vấn đề pháp lý, sự an toàn pháp lý là trách nhiệm của luật sư chúng tôi.</p>
                  </div>
              </div>
          </div>
      </section>
      <section className="service-container">
          <div className="grid wide">
              <div className="service">
                  <h1 className="row service__tittle">
                      Dịch vụ của chúng tôi
                  </h1>
                  <div className="row service__content">
                      <div className="col l-4 m-6 c-12">
                          <div className="service__item">
                              <div className="service__top">
                                  <span className="service__icon">
                                      <i className="fa-regular fa-clock"></i>
                                  </span>
                              </div>
                              <div className="service__bottom">
                                  <h2 className="service__text">Tư vấn đầu tư</h2>
                                  <p className="service__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium beatae, architecto, ipsum ducimus nesciunt blanditiis fugiat voluptates nostrum natus, dicta sit cum mollitia perspiciatis consequuntur facilis consequatur tempore fugit assumenda.</p>
                                  <a className="service__btn btn" href="#form1">Đặt ngay</a>
                              </div>
                          </div>
                      </div>
                      <div className="col l-4 m-6 c-12">
                          <div className="service__item">
                              <div className="service__top">
                                  <span className="service__icon">
                                      <i className="fa-regular fa-clock"></i>
                                  </span>
                              </div>
                              <div className="service__bottom">
                                  <h2 className="service__text">Sở hữu trí tuệ</h2>
                                  <p className="service__paragraph">ur tempore fugit assumenda.</p>
                                  <a className="service__btn btn" href="#form1">Đặt ngay</a>
                              </div>
                          </div>
                      </div>
                      <div className="col l-4 m-6 c-12">
                          <div className="service__item">
                              <div className="service__top">
                                  <span className="service__icon">
                                      <i className="fa-regular fa-clock"></i>
                                  </span>
                              </div>
                              <div className="service__bottom">
                                  <h2 className="service__text">Tranh tụng tại tòa án</h2>
                                  <p className="service__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium beatae, architecto, ipsum ducimus nesciunt blanditiis fugiat voluptates nostrum natus, dicta sit cum mollitia perspiciatis consequuntur facilis consequatur tempore fugit assumenda.</p>
                                  <a className="service__btn btn" href="#form1">Đặt ngay</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="working-process-container">
          <div className="working-process grid wide">
              <div className="row working-process__top">
                  <h2 className="working-process__tittle">Quy trình làm việc của chúng tôi</h2>
              </div>
              <div className="row working-process__bottom">
                  <div className="col l-4 m-4 c-12 working-process__content"  style={{display:"flex"}}>
                      <div>

                          <span className="working-process__icon">
                              <i className="fa-regular fa-clock"></i>
                          </span>
                      </div>
                      <span className="working-process__text">Chọn thời gian và địa điểm</span>
                  </div>
                  <div className="col l-4 m-4 c-12 working-process__content"  style={{display:"flex"}}>
                      <div>

                          <span className="working-process__icon">
                              <i className="fa-regular fa-clock"></i>
                          </span>
                      </div>
                      <span className="working-process__text">Chọn thời gian và địa điểm</span>
                  </div>
                  <div className="col l-4 m-4 c-12 working-process__content"  style={{display:"flex"}}>
                      <div>

                          <span className="working-process__icon">
                              <i className="fa-regular fa-clock"></i>
                          </span>
                      </div>
                      <span className="working-process__text">Chọn thời gian và địa điểm</span>
                  </div>
              </div>
          </div>
      </section>
      <section className="location-container">
          <div className="location grid wide">
              <div className="row">
                  <h2 className="location__tittle col l-12 c-12 m-12">Công ty TNHH Luật Thái Gia</h2>
              </div>
              <div className="row">
                  <div className="col l-12 c-12 m-12 location__address">
                      {/* <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d967.6598919629552!2d109.03474282918175!3d14.039366599385113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f3af22400a983%3A0xb891c972542b77e4!2zQ8O0bmcgVHkgVE5ISCBDxqEgS2jDrSBUaMawxqFuZyBN4bqhaSBYw6J5IEThu7FuZyBU4bqlbiDEkOG6oXQ!5e0!3m2!1svi!2s!4v1645954973950!5m2!1svi!2s" width="100%" height="500px" style={{display:"flex"}}d var(--main-color); border-radius: 5px;" allowfullscreen="" loading="lazy"></iframe> --> */}
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.5955560104978!2d106.71560865801617!3d10.796670098076948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528af2665b6d5%3A0x9207f24f26ed913e!2zNjAyLzUxQSDEkGnhu4duIEJpw6puIFBo4bunLCBQaMaw4budbmcgMjIsIELDrG5oIFRo4bqhbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1646576807062!5m2!1svi!2s" width="100%" height="500px" style={{border:"1px solid var(--main-color)", borderRadius:"5px"}} allowFullScreen="" loading="lazy"></iframe>
                  </div>
              </div>
          </div>
      </section>
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
      <footer className="footer">
                            {/* <!-- nút call --> */}

          <div className="hotline-phone-ring-wrap">
              <div className="hotline-phone-ring">
                  <div className="hotline-phone-ring-circle"></div>
                  <div className="hotline-phone-ring-circle-fill"></div>
                  <div className="hotline-phone-ring-img-circle">
                      <a href="tel:0903319478" className="pps-btn-img">
                          <img src={IMAGES.callbutton} alt="Gọi điện thoại" width="50"/>
                      </a>
                  </div>
              </div>
              <div className="hotline-bar">
                  <a href="tel:0933943686">
                      <span className="text-hotline" style={{fontFamily: "Arial"}}>0933 943 686</span>
                  </a>
              </div>
          </div>
          {/* <!-- kết thúc nút call --> */}
      </footer>
    </div>
  );
}

export default App;

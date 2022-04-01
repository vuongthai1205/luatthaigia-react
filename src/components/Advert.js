import IMAGES from "../assets/images"
function Advert(){
    return (
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
    )
}
export default Advert
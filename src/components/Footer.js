import IMAGES from "../assets/images"
function Footer(){
    return (
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
    )
}

export default Footer
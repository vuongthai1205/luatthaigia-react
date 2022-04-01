function WorkingProcess(){
    return (
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
    )
}
export default WorkingProcess
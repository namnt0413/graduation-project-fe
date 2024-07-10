import Slider from "react-slick";
import "../../styles/containers/HomeRightContent/HomeRightContent.css"

const HomeRightContent = () => {
  const settings = {
    dots: false,
    infinite: true,
    initialSlide: 0,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [],
  };

  return (
    <>
      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
        <div className="jp_first_right_sidebar_main_wrapper">
          <div className="row">
            {/* add resume */}
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="jp_add_resume_wrapper">
                <div className="jp_add_resume_img_overlay"></div>
                <div className="jp_add_resume_cont">
                  <img src="images/content/resume_logo.png" alt="logo" />
                  <h4>Kết nối nhà tuyển dụng với ứng viên một cách dễ dàng!</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-plus-circle"></i> &nbsp;ĐĂNG KÝ NGAY
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* job spotlight */}
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="jp_spotlight_main_wrapper">
                <div className="spotlight_header_wrapper">
                  <h4>Công việc nổi bật 24h</h4>
                </div>
                <div className="jp_spotlight_slider_wrapper">
                  <Slider {...settings}>
                    <div className="item">
                      <div className="jp_spotlight_slider_img_Wrapper">
                        <img
                          src="images/content/spotlight_img.jpg"
                          alt="spotlight_img"
                        />
                      </div>
                      <div className="jp_spotlight_slider_cont_Wrapper">
                        <h4>Tuyển dụng kỹ sư bán dẫn</h4>
                        <p>SoICT .Inc</p>
                        <ul>
                          <li>
                            <i className="fa fa-cc-paypal"></i>&nbsp; 50.000.000đ
                          </li>
                          <li>
                            <i className="fa fa-map-marker"></i>&nbsp;
                            Hà Nội
                          </li>
                        </ul>
                      </div>
                      <div className="jp_spotlight_slider_btn_wrapper">
                        <div className="jp_spotlight_slider_btn">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-plus-circle"></i> &nbsp;ỨNG TUYỂN
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="jp_spotlight_slider_img_Wrapper">
                        <img
                          src="images/content/spotlight_img.jpg"
                          alt="spotlight_img"
                        />
                      </div>
                      <div className="jp_spotlight_slider_cont_Wrapper">
                        <h4>Tuyển dụng kỹ sư bán dẫn</h4>
                        <p>SoICT .Inc</p>
                        <ul>
                          <li>
                            <i className="fa fa-cc-paypal"></i>&nbsp; 50.000.000đ
                          </li>
                          <li>
                            <i className="fa fa-map-marker"></i>&nbsp;
                            Hà Nội
                          </li>
                        </ul>
                      </div>
                      <div className="jp_spotlight_slider_btn_wrapper">
                        <div className="jp_spotlight_slider_btn">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-plus-circle"></i> &nbsp;ỨNG TUYỂN
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="jp_spotlight_slider_img_Wrapper">
                        <img
                          src="images/content/spotlight_img.jpg"
                          alt="spotlight_img"
                        />
                      </div>
                      <div className="jp_spotlight_slider_cont_Wrapper">
                        <h4>Tuyển dụng kỹ sư bán dẫn</h4>
                        <p>SoICT .Inc</p>
                        <ul>
                          <li>
                            <i className="fa fa-cc-paypal"></i>&nbsp; 50.000.000đ
                          </li>
                          <li>
                            <i className="fa fa-map-marker"></i>&nbsp;
                            Hà Nội
                          </li>
                        </ul>
                      </div>
                      <div className="jp_spotlight_slider_btn_wrapper">
                        <div className="jp_spotlight_slider_btn">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-plus-circle"></i> &nbsp;ỨNG TUYỂN
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
            {/* job by category */}
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="jp_rightside_job_categories_wrapper">
                <div className="jp_rightside_job_categories_heading">
                  <h4>Công việc theo lĩnh vực</h4>
                </div>
                <div className="jp_rightside_job_categories_content">
                  <ul>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Thiết kế đồ họa <span>(114)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        IT, phần mềm <span>(114)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Kế toán <span>(254)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Hành chính, công vụ <span>(157)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Y tế <span>(154)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Kinh doanh <span>(154)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Tài chính, ngân hàng <span>(150)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Nhân viên bán hàng <span>(221)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-plus-circle"></i>{" "}
                      <a href="#">View All Categories</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* job by location */}
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="jp_rightside_job_categories_wrapper">
                <div className="jp_rightside_job_categories_heading">
                  <h4>Công việc theo địa điểm</h4>
                </div>
                <div className="jp_rightside_job_categories_content">
                  <ul>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Hà Nội <span>(214)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        TPHCM <span>(214)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Đà Nẵng <span>(154)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Hải Phòng <span>(157)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right"></i>{" "}
                      <a href="#">
                        Bình Dương <span>(154)</span>
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-plus-circle"></i>{" "}
                      <a href="#">Xem tất cả</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeRightContent;

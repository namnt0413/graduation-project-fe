import "../styles/components/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="jp_main_footer_img_wrapper">
        <div className="jp_newsletter_img_overlay_wrapper"></div>
        {/* get notification */}
        <div className="jp_newsletter_wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="jp_newsletter_text">
                  <img
                    src="images/content/news_logo.png"
                    className="img-responsive"
                    alt="news_logo"
                  />
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div className="jp_newsletter_field">
                  <i className="fa fa-envelope-o"></i>
                  <input type="text" placeholder="Enter Your Email" />
                  <button type="submit">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="jp_footer_main_wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="jp_bottom_footer_Wrapper">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div className="jp_footer_logo">
                        <a href="#">
                          <img
                            src="images/content/resume_logo.png"
                            alt="footer_logo"
                          />
                        </a>
                      </div>
                      <div className="jp_bottom_top_scrollbar_wrapper">
                        <a href="javascript:" id="return-to-top">
                          <i className="fa fa-angle-up"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div className="jp_bottom_footer_right_cont">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-pinterest-p"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-linkedin"></i>
                            </a>
                          </li>
                          <li className="hidden-xs">
                            <a href="#">
                              <i className="fa fa-google-plus"></i>
                            </a>
                          </li>
                          <li className="hidden-xs">
                            <a href="#">
                              <i className="fa fa-vimeo"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

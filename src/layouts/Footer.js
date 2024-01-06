import "../styles/components/Footer.css";

const Footer = () => {
  return (
    <>
      <div class="jp_main_footer_img_wrapper">
        <div class="jp_newsletter_img_overlay_wrapper"></div>
        {/* get notification */}
        <div class="jp_newsletter_wrapper">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="jp_newsletter_text">
                  <img
                    src="images/content/news_logo.png"
                    class="img-responsive"
                    alt="news_logo"
                  />
                </div>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div class="jp_newsletter_field">
                  <i class="fa fa-envelope-o"></i>
                  <input type="text" placeholder="Enter Your Email" />
                  <button type="submit">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <div class="jp_footer_main_wrapper">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="jp_bottom_footer_Wrapper">
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div class="jp_footer_logo">
                        <a href="#">
                          <img
                            src="images/content/resume_logo.png"
                            alt="footer_logo"
                          />
                        </a>
                      </div>
                      <div class="jp_bottom_top_scrollbar_wrapper">
                        <a href="javascript:" id="return-to-top">
                          <i class="fa fa-angle-up"></i>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div class="jp_bottom_footer_right_cont">
                        <ul>
                          <li>
                            <a href="#">
                              <i class="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-pinterest-p"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-linkedin"></i>
                            </a>
                          </li>
                          <li class="hidden-xs">
                            <a href="#">
                              <i class="fa fa-google-plus"></i>
                            </a>
                          </li>
                          <li class="hidden-xs">
                            <a href="#">
                              <i class="fa fa-vimeo"></i>
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

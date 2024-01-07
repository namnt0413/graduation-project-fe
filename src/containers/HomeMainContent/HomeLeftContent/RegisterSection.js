const RegisterSection = () => {
  return (
    <>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="jp_register_section_main_wrapper">
          <div className="jp_regis_left_side_box_wrapper">
            <div className="jp_regis_left_side_box">
              <img src="images/content/regis_icon.png" alt="icon" />
              <h4>I’m an COMPANY</h4>
              <p>
                Signed in companies are able to post new
                <br /> job offers, searching for candidate...
              </p>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-plus-circle"></i> &nbsp;REGISTER AS
                    COMPANY
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="jp_regis_right_side_box_wrapper">
            <div className="jp_regis_right_img_overlay"></div>
            <div className="jp_regis_right_side_box">
              <img src="images/content/regis_icon2.png" alt="icon" />
              <h4>I’m an candidate</h4>
              <p>
                Signed in companies are able to post new
                <br /> job offers, searching for candidate...
              </p>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-plus-circle"></i> &nbsp;REGISTER AS
                    CANDIDATE
                  </a>
                </li>
              </ul>
            </div>
            <div className="jp_regis_center_tag_wrapper">
              <p>OR</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterSection;

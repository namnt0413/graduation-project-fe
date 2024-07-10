import "../../../styles/containers/HomeLeftContent/RegisterSection.css"
import { Link, useNavigate } from "react-router-dom";

const RegisterSection = () => {
  return (
    <>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="jp_register_section_main_wrapper">
          <div className="jp_regis_left_side_box_wrapper">
            <div className="jp_regis_left_side_box">
              <img src="images/content/regis_icon.png" alt="icon" />
              <h4>TÔI LÀ NHÀ TUYỂN DỤNG</h4>
              <p>
                Đăng ký để có thể đăng công việc
                <br /> và tìm kiếm ứng viên
              </p>
              <ul>
                <li>
                  <Link className="nav-link" to="/register">
                  <i className="fa fa-plus-circle"></i> &nbsp;ĐĂNG KÝ
                    TÀI KHOẢN CÔNG TY
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="jp_regis_right_side_box_wrapper">
            <div className="jp_regis_right_img_overlay"></div>
            <div className="jp_regis_right_side_box">
              <img src="images/content/regis_icon2.png" alt="icon" />
              <h4>Tôi là ứng viên</h4>
              <p>
                Đăng ký để ứng tuyển công việc
                <br /> và tự tạo những bản CV thu hút
              </p>
              <ul>
                <li>
                  <Link className="nav-link" to="/register">
                    <i className="fa fa-plus-circle"></i> &nbsp;ĐĂNG KÝ
                    TÀI KHOẢN ỨNG VIÊN
                  </Link>
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

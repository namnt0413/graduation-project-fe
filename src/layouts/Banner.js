import "../styles/components/Banner.css"

const Banner = () => {
  return (
    <>
      {/* Head Banner + Search */}
      <div className="jp_banner_heading_cont_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="jp_job_heading_wrapper">
                <div className="jp_job_heading">
                  <h1>
                    <span>1,000+</span> Việc làm hot
                  </h1>
                  <p>Tìm kiếm công việc & Phát triển sự nghiệp</p>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="jp_banner_main_jobs_wrapper">
                <div className="jp_banner_main_jobs">
                  <ul>
                    <li>
                      <i className="fa fa-tags"></i> Từ khóa hot :
                    </li>
                    <li>
                      <a href="#">ui designer,</a>
                    </li>
                    <li>
                      <a href="#">developer,</a>
                    </li>
                    <li>
                      <a href="#">senior</a>
                    </li>
                    <li>
                      <a href="#">it company,</a>
                    </li>
                    <li>
                      <a href="#">design,</a>
                    </li>
                    <li>
                      <a href="#">call center</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job category banner */}
      <div className="jp_banner_jobs_categories_wrapper">
        <div className="container">
          <div className="jp_top_jobs_category_wrapper jp_job_cate_left_border jp_job_cate_left_border_bottom">
            <div className="jp_top_jobs_category">
              <i className="fa fa-code"></i>
              <h3>
                <a href="#">Lập trình viên</a>
              </h3>
              <p>(240 công việc)</p>
            </div>
          </div>
          <div className="jp_top_jobs_category_wrapper jp_job_cate_left_border_bottom">
            <div className="jp_top_jobs_category">
              <i className="fa fa-laptop"></i>
              <h3>
                <a href="#">Tin học văn phòng</a>
              </h3>
              <p>(204 công việc)</p>
            </div>
          </div>
          <div className="jp_top_jobs_category_wrapper jp_job_cate_left_border_bottom">
            <div className="jp_top_jobs_category">
              <i className="fa fa-bar-chart"></i>
              <h3>
                <a href="#">Kế toán</a>
              </h3>
              <p>(250 công việc)</p>
            </div>
          </div>
          <div className="jp_top_jobs_category_wrapper jp_job_cate_left_border_res">
            <div className="jp_top_jobs_category">
              <i className="fa fa-medkit"></i>
              <h3>
                <a href="#">Y tế</a>
              </h3>
              <p>(202 công việc)</p>
            </div>
          </div>
          <div className="jp_top_jobs_category_wrapper">
            <div className="jp_top_jobs_category">
              <i className="fa fa-university"></i>
              <h3>
                <a href="#">Hành chính, công vụ</a>
              </h3>
              <p>(157 công việc)</p>
            </div>
          </div>
          <div className="jp_top_jobs_category_wrapper">
            <div className="jp_top_jobs_category">
              <i className="fa fa-th-large"></i>
              <h3>
                <a href="#">Tất cả công việc</a>
              </h3>
              <p>(1000+ công việc)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

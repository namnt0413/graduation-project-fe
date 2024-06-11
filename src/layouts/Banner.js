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
                    <span>3,000+</span> Browse Jobs
                  </h1>
                  <p>Find Jobs, Employment & Career Opportunities</p>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="jp_banner_main_jobs_wrapper">
                <div className="jp_banner_main_jobs">
                  <ul>
                    <li>
                      <i className="fa fa-tags"></i> Trending Keywords :
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
                <a href="#">Developer</a>
              </h3>
              <p>(240 công việc)</p>
            </div>
          </div>
          <div className="jp_top_jobs_category_wrapper jp_job_cate_left_border_bottom">
            <div className="jp_top_jobs_category">
              <i className="fa fa-laptop"></i>
              <h3>
                <a href="#">Technology</a>
              </h3>
              <p>(504 công việc)</p>
            </div>
          </div>
          <div className="jp_top_jobs_category_wrapper jp_job_cate_left_border_bottom">
            <div className="jp_top_jobs_category">
              <i className="fa fa-bar-chart"></i>
              <h3>
                <a href="#">Accounting</a>
              </h3>
              <p>(2250 công việc)</p>
            </div>
          </div>
          <div className="jp_top_jobs_category_wrapper jp_job_cate_left_border_res">
            <div className="jp_top_jobs_category">
              <i className="fa fa-medkit"></i>
              <h3>
                <a href="#">Medical</a>
              </h3>
              <p>(202 công việc)</p>
            </div>
          </div>
          <div className="jp_top_jobs_category_wrapper">
            <div className="jp_top_jobs_category">
              <i className="fa fa-university"></i>
              <h3>
                <a href="#">Government</a>
              </h3>
              <p>(1457 công việc)</p>
            </div>
          </div>
          <div className="jp_top_jobs_category_wrapper">
            <div className="jp_top_jobs_category">
              <i className="fa fa-th-large"></i>
              <h3>
                <a href="#">All Jobs</a>
              </h3>
              <p>(2000+ công việc)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

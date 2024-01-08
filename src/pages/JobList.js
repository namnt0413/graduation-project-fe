import Layout from "../layouts/Layout";
import "../styles/pages/JobList.css";

const JobList = () => {
  const JobListContent = (
    <>
      <div className="jp_listing_sidebar_main_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="jp_listing_heading_wrapper">
                <h2>
                  We found <span>357</span> Matches for you.
                </h2>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 hidden-sm hidden-xs">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="jp_rightside_job_categories_wrapper">
                    <div className="jp_rightside_job_categories_heading">
                      <h4>Jobs by Category</h4>
                    </div>
                    <div className="jp_rightside_job_categories_content">
                      <div className="handyman_sec1_wrapper">
                        <div className="content">
                          <div className="box">
                            <p>
                              <input type="checkbox" id="c1" name="cb" />
                              <label for="c1">
                                Graphic Designer <span>(214)</span>
                              </label>
                            </p>
                            <p>
                              <input type="checkbox" id="c2" name="cb" />
                              <label for="c2">
                                Engineering Jobs <span>(514)</span>
                              </label>
                            </p>
                            <p>
                              <input type="checkbox" id="c3" name="cb" />
                              <label for="c3">
                                Mainframe Jobs <span>(554)</span>
                              </label>
                            </p>
                            <p>
                              <input type="checkbox" id="c4" name="cb" />
                              <label for="c4">
                                Legal Jobs <span>(457)</span>
                              </label>
                            </p>
                            <p>
                              <input type="checkbox" id="c5" name="cb" />
                              <label for="c5">
                                IT Jobs <span>(1254)</span>
                              </label>
                            </p>
                            <p>
                              <input type="checkbox" id="c6" name="cb" />
                              <label for="c6">
                                R&D Jobs <span>(554)</span>
                              </label>
                            </p>
                            <p>
                              <input type="checkbox" id="c7" name="cb" />
                              <label for="c7">
                                Government Jobs <span>(350)</span>
                              </label>
                            </p>
                            <p>
                              <input type="checkbox" id="c8" name="cb" />
                              <label for="c8">
                                PSU Jobs <span>(221)</span>
                              </label>
                            </p>
                          </div>
                        </div>
                        <ul>
                          <li>
                            <i className="fa fa-plus-circle"></i>{" "}
                            <a href="#">SHOW MORE</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="jp_rightside_job_categories_wrapper jp_job_location_wrapper">
                    <div className="jp_rightside_job_categories_heading">
                      <h4>Jobs by Location</h4>
                    </div>
                    <div className="jp_rightside_job_categories_content">
                      <div className="handyman_sec1_wrapper">
                        <div className="content">
                          <div className="box">
                            <p>
                              <input type="checkbox" id="c9" name="cb" />{" "}
                              <label for="c9">
                                Jobs in Delhi <span>(214)</span>
                              </label>
                            </p>

                            <p>
                              <input type="checkbox" id="c10" name="cb" />
                              <label for="c10">
                                Jobs in Mumbai <span>(514)</span>
                              </label>
                            </p>
                            <p>
                              <input type="checkbox" id="c11" name="cb" />
                              <label for="c11">
                                Jobs in Chennai <span>(554)</span>
                              </label>
                            </p>
                            <p>
                              <input type="checkbox" id="c12" name="cb" />
                              <label for="c12">
                                Jobs in Gurgaon <span>(457)</span>
                              </label>
                            </p>
                            <p>
                              <input type="checkbox" id="c13" name="cb" />
                              <label for="c13">
                                Jobs in Noida <span>(1254)</span>
                              </label>
                            </p>
                            <p>
                              <input type="checkbox" id="c14" name="cb" />
                              <label for="c14">
                                Jobs in Kolkata <span>(554)</span>
                              </label>
                            </p>
                            <p>
                              <input type="checkbox" id="c15" name="cb" />
                              <label for="c15">
                                Jobs in Hyderabad <span>(350)</span>
                              </label>
                            </p>
                            <p>
                              <input type="checkbox" id="c16" name="cb" />
                              <label for="c16">
                                Jobs in Pune <span>(221)</span>
                              </label>
                            </p>
                          </div>
                        </div>
                        <ul>
                          <li>
                            <i className="fa fa-plus-circle"></i>{" "}
                            <a href="#">SHOW MORE</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="jp_rightside_job_categories_wrapper jp_job_location_wrapper">
                    <div className="jp_rightside_job_categories_heading">
                      <h4>Your Skill’s</h4>
                    </div>
                    <div className="jp_rightside_job_categories_content">
                      <div className="handyman_sec1_wrapper">
                        <div className="content">
                          <div className="box">
                            <p>
                              <input type="checkbox" id="c17" name="cb" />
                              <label for="c17">
                                Javascript <span>(214)</span>
                              </label>
                            </p>

                            <p>
                              <input type="checkbox" id="c18" name="cb" />
                              <label for="c18">
                                HTML5 <span>(514)</span>
                              </label>
                            </p>
                            <p>
                              <input type="checkbox" id="c19" name="cb" />
                              <label for="c19">
                                CSS3 <span>(554)</span>
                              </label>
                            </p>
                            <p>
                              <input type="checkbox" id="c20" name="cb" />
                              <label for="c20">
                                PHP <span>(457)</span>
                              </label>
                            </p>
                            <p>
                              <input type="checkbox" id="c21" name="cb" />
                              <label for="c21">
                                Sales <span>(1254)</span>
                              </label>
                            </p>
                            <p>
                              <input type="checkbox" id="c22" name="cb" />
                              <label for="c22">
                                Marketing <span>(554)</span>
                              </label>
                            </p>
                            <p>
                              <input type="checkbox" id="c23" name="cb" />
                              <label for="c23">
                                Social Media <span>(350)</span>
                              </label>
                            </p>
                            <p>
                              <input type="checkbox" id="c24" name="cb" />
                              <label for="c24">
                                Web Design <span>(221)</span>
                              </label>
                            </p>
                          </div>
                        </div>
                        <ul>
                          <li>
                            <i className="fa fa-plus-circle"></i>{" "}
                            <a href="#">SHOW MORE</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="jp_rightside_job_categories_wrapper jp_job_location_wrapper">
                    <div className="jp_rightside_job_categories_heading">
                      <h4>Salary</h4>
                    </div>
                    <div className="jp_rightside_job_categories_content">
                      <div className="handyman_sec1_wrapper">
                        <div className="content">
                          <div className="box">
                            <p>
                              <input type="checkbox" id="c25" name="cb" />
                              <label for="c25">
                                $1k - 2k <span>(214)</span>
                              </label>
                            </p>

                            <p>
                              <input type="checkbox" id="c26" name="cb" />
                              <label for="c26">
                                $3k - 5k <span>(514)</span>
                              </label>
                            </p>
                            <p>
                              <input type="checkbox" id="c27" name="cb" />
                              <label for="c27">
                                $5k - 8k <span>(554)</span>
                              </label>
                            </p>
                            <p>
                              <input type="checkbox" id="c28" name="cb" />
                              <label for="c28">
                                $5k - 10k <span>(457)</span>
                              </label>
                            </p>
                            <p>
                              <input type="checkbox" id="c29" name="cb" />
                              <label for="c29">
                                $10k - 20k <span>(1254)</span>
                              </label>
                            </p>
                            <p>
                              <input type="checkbox" id="c30" name="cb" />
                              <label for="c30">
                                $20k - 30k <span>(554)</span>
                              </label>
                            </p>
                            <p>
                              <input type="checkbox" id="c31" name="cb" />
                              <label for="c31">
                                $30k - 50k <span>(350)</span>
                              </label>
                            </p>
                            <p>
                              <input type="checkbox" id="c32" name="cb" />
                              <label for="c32">
                                $50k - 80k <span>(221)</span>
                              </label>
                            </p>
                          </div>
                        </div>
                        <ul>
                          <li>
                            <i className="fa fa-plus-circle"></i>{" "}
                            <a href="#">SHOW MORE</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="jp_rightside_job_categories_wrapper jp_job_location_wrapper">
                    <div className="jp_rightside_job_categories_heading">
                      <h4>Types</h4>
                    </div>
                    <div className="jp_rightside_job_categories_content">
                      <div className="handyman_sec1_wrapper">
                        <div className="content">
                          <div className="box">
                            <p>
                              <input type="checkbox" id="c33" name="cb" />
                              <label for="c33">
                                Types <span>(214)</span>
                              </label>
                            </p>

                            <p>
                              <input type="checkbox" id="c34" name="cb" />
                              <label for="c34">
                                Part-time <span>(514)</span>
                              </label>
                            </p>
                            <p>
                              <input type="checkbox" id="c35" name="cb" />
                              <label for="c35">
                                Contract <span>(554)</span>
                              </label>
                            </p>
                            <p>
                              <input type="checkbox" id="c36" name="cb" />
                              <label for="c36">
                                Remotely <span>(457)</span>
                              </label>
                            </p>
                            <p>
                              <input type="checkbox" id="c37" name="cb" />
                              <label for="c37">
                                Temporary <span>(1254)</span>
                              </label>
                            </p>
                          </div>
                        </div>
                        <ul>
                          <li>
                            <i className="fa fa-plus-circle"></i>{" "}
                            <a href="#">SHOW MORE</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="jp_add_resume_wrapper jp_job_location_wrapper">
                    <div className="jp_add_resume_img_overlay"></div>
                    <div className="jp_add_resume_cont">
                      <img src="images/content/resume_logo.png" alt="logo" />
                      <h4>
                        Get Best Matched Jobs On your Email. Add Resume NOW!
                      </h4>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-plus-circle"></i> &nbsp;ADD
                            RESUME
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="jp_listing_tabs_wrapper">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                      <div className="gc_causes_select_box_wrapper">
                        <div className="gc_causes_select_box">
                          <select>
                            <option>Sort Default</option>
                            <option>Sort Default</option>
                            <option>Sort Default</option>
                          </select>
                          <i className="fa fa-angle-down"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                      <div className="gc_causes_view_tabs_wrapper">
                        <div className="gc_causes_view_tabs">
                          <ul className="nav nav-pills">
                            <li className="active">
                              <a data-toggle="pill" href="#grid">
                                <i className="fa fa-th-large"></i>
                              </a>
                            </li>
                            <li>
                              <a data-toggle="pill" href="#list">
                                <i className="fa fa-list"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                      <div className="gc_causes_search_box_wrapper gc_causes_search_box_wrapper2">
                        <div className="gc_causes_search_box">
                          <p>
                            You're Watching &nbsp;<span>01 to 20</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="tab-content">
                    <div id="grid" className="tab-pane fade in active">
                      <div className="row">
                        {/* grid jobs */}
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                            <div className="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                              <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="jp_job_post_side_img">
                                    <img
                                      src="images/content/job_post_img1.jpg"
                                      alt="post_img"
                                    />
                                  </div>
                                  <div className="jp_job_post_right_cont jp_job_post_grid_right_cont">
                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                    <p>Webstrot Technology Pvt. Ltd.</p>
                                    <ul>
                                      <li>
                                        <i className="fa fa-cc-paypal"></i>
                                        &nbsp; $12K - 15k P.A.
                                      </li>
                                      <li>
                                        <i className="fa fa-map-marker"></i>
                                        &nbsp; Caliphonia, PO 455001
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">
                                    <ul>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-heart-o"></i>
                                        </a>
                                      </li>

                                      <li>
                                        <a href="#">Apply</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                            <div className="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                              <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="jp_job_post_side_img">
                                    <img
                                      src="images/content/job_post_img2.jpg"
                                      alt="post_img"
                                    />
                                  </div>
                                  <div className="jp_job_post_right_cont jp_job_post_grid_right_cont">
                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                    <p>Webstrot Technology Pvt. Ltd.</p>
                                    <ul>
                                      <li>
                                        <i className="fa fa-cc-paypal"></i>
                                        &nbsp; $12K - 15k P.A.
                                      </li>
                                      <li>
                                        <i className="fa fa-map-marker"></i>
                                        &nbsp; Caliphonia, PO 455001
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">
                                    <ul>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-heart-o"></i>
                                        </a>
                                      </li>

                                      <li>
                                        <a href="#">Apply</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                            <div className="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                              <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="jp_job_post_side_img">
                                    <img
                                      src="images/content/job_post_img3.jpg"
                                      alt="post_img"
                                    />
                                  </div>
                                  <div className="jp_job_post_right_cont jp_job_post_grid_right_cont">
                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                    <p>Webstrot Technology Pvt. Ltd.</p>
                                    <ul>
                                      <li>
                                        <i className="fa fa-cc-paypal"></i>
                                        &nbsp; $12K - 15k P.A.
                                      </li>
                                      <li>
                                        <i className="fa fa-map-marker"></i>
                                        &nbsp; Caliphonia, PO 455001
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">
                                    <ul>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-heart-o"></i>
                                        </a>
                                      </li>

                                      <li>
                                        <a href="#">Apply</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                            <div className="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                              <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="jp_job_post_side_img">
                                    <img
                                      src="images/content/job_post_img4.jpg"
                                      alt="post_img"
                                    />
                                  </div>
                                  <div className="jp_job_post_right_cont jp_job_post_grid_right_cont">
                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                    <p>Webstrot Technology Pvt. Ltd.</p>
                                    <ul>
                                      <li>
                                        <i className="fa fa-cc-paypal"></i>
                                        &nbsp; $12K - 15k P.A.
                                      </li>
                                      <li>
                                        <i className="fa fa-map-marker"></i>
                                        &nbsp; Caliphonia, PO 455001
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">
                                    <ul>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-heart-o"></i>
                                        </a>
                                      </li>

                                      <li>
                                        <a href="#">Apply</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                            <div className="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                              <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="jp_job_post_side_img">
                                    <img
                                      src="images/content/job_post_img5.jpg"
                                      alt="post_img"
                                    />
                                  </div>
                                  <div className="jp_job_post_right_cont jp_job_post_grid_right_cont">
                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                    <p>Webstrot Technology Pvt. Ltd.</p>
                                    <ul>
                                      <li>
                                        <i className="fa fa-cc-paypal"></i>
                                        &nbsp; $12K - 15k P.A.
                                      </li>
                                      <li>
                                        <i className="fa fa-map-marker"></i>
                                        &nbsp; Caliphonia, PO 455001
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">
                                    <ul>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-heart-o"></i>
                                        </a>
                                      </li>

                                      <li>
                                        <a href="#">Apply</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                            <div className="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                              <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="jp_job_post_side_img">
                                    <img
                                      src="images/content/job_post_img1.jpg"
                                      alt="post_img"
                                    />
                                  </div>
                                  <div className="jp_job_post_right_cont jp_job_post_grid_right_cont">
                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                    <p>Webstrot Technology Pvt. Ltd.</p>
                                    <ul>
                                      <li>
                                        <i className="fa fa-cc-paypal"></i>
                                        &nbsp; $12K - 15k P.A.
                                      </li>
                                      <li>
                                        <i className="fa fa-map-marker"></i>
                                        &nbsp; Caliphonia, PO 455001
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">
                                    <ul>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-heart-o"></i>
                                        </a>
                                      </li>

                                      <li>
                                        <a href="#">Apply</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                            <div className="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                              <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="jp_job_post_side_img">
                                    <img
                                      src="images/content/job_post_img2.jpg"
                                      alt="post_img"
                                    />
                                  </div>
                                  <div className="jp_job_post_right_cont jp_job_post_grid_right_cont">
                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                    <p>Webstrot Technology Pvt. Ltd.</p>
                                    <ul>
                                      <li>
                                        <i className="fa fa-cc-paypal"></i>
                                        &nbsp; $12K - 15k P.A.
                                      </li>
                                      <li>
                                        <i className="fa fa-map-marker"></i>
                                        &nbsp; Caliphonia, PO 455001
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">
                                    <ul>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-heart-o"></i>
                                        </a>
                                      </li>

                                      <li>
                                        <a href="#">Apply</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                            <div className="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                              <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="jp_job_post_side_img">
                                    <img
                                      src="images/content/job_post_img3.jpg"
                                      alt="post_img"
                                    />
                                  </div>
                                  <div className="jp_job_post_right_cont jp_job_post_grid_right_cont">
                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                    <p>Webstrot Technology Pvt. Ltd.</p>
                                    <ul>
                                      <li>
                                        <i className="fa fa-cc-paypal"></i>
                                        &nbsp; $12K - 15k P.A.
                                      </li>
                                      <li>
                                        <i className="fa fa-map-marker"></i>
                                        &nbsp; Caliphonia, PO 455001
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">
                                    <ul>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-heart-o"></i>
                                        </a>
                                      </li>

                                      <li>
                                        <a href="#">Apply</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* pagination */}
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hidden-sm hidden-xs">
                          <div className="pager_wrapper gc_blog_pagination">
                            <ul className="pagination">
                              <li>
                                <a href="#">Priv.</a>
                              </li>
                              <li>
                                <a href="#">1</a>
                              </li>
                              <li>
                                <a href="#">2</a>
                              </li>
                              <li>
                                <a href="#">3</a>
                              </li>
                              <li className="hidden-xs">
                                <a href="#">4</a>
                              </li>
                              <li>
                                <a href="#">Next</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="list" className="tab-pane fade">
                      <div className="row">
                        {/* row jobs */}
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                            <div className="jp_job_post_main_wrapper">
                              <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                  <div className="jp_job_post_side_img">
                                    <img
                                      src="images/content/job_post_img5.jpg"
                                      alt="post_img"
                                    />
                                  </div>
                                  <div className="jp_job_post_right_cont">
                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                    <p>Webstrot Technology Pvt. Ltd.</p>
                                    <ul>
                                      <li>
                                        <i className="fa fa-cc-paypal"></i>
                                        &nbsp; $12K - 15k P.A.
                                      </li>
                                      <li>
                                        <i className="fa fa-map-marker"></i>
                                        &nbsp; Caliphonia, PO 455001
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                  <div className="jp_job_post_right_btn_wrapper">
                                    <ul>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-heart-o"></i>
                                        </a>
                                      </li>

                                      <li>
                                        <a href="#">Apply</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                            <div className="jp_job_post_main_wrapper">
                              <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                  <div className="jp_job_post_side_img">
                                    <img
                                      src="images/content/job_post_img2.jpg"
                                      alt="post_img"
                                    />
                                  </div>
                                  <div className="jp_job_post_right_cont">
                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                    <p>Webstrot Technology Pvt. Ltd.</p>
                                    <ul>
                                      <li>
                                        <i className="fa fa-cc-paypal"></i>
                                        &nbsp; $12K - 15k P.A.
                                      </li>
                                      <li>
                                        <i className="fa fa-map-marker"></i>
                                        &nbsp; Caliphonia, PO 455001
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                  <div className="jp_job_post_right_btn_wrapper">
                                    <ul>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-heart-o"></i>
                                        </a>
                                      </li>

                                      <li>
                                        <a href="#">Apply</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                            <div className="jp_job_post_main_wrapper">
                              <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                  <div className="jp_job_post_side_img">
                                    <img
                                      src="images/content/job_post_img3.jpg"
                                      alt="post_img"
                                    />
                                  </div>
                                  <div className="jp_job_post_right_cont">
                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                    <p>Webstrot Technology Pvt. Ltd.</p>
                                    <ul>
                                      <li>
                                        <i className="fa fa-cc-paypal"></i>
                                        &nbsp; $12K - 15k P.A.
                                      </li>
                                      <li>
                                        <i className="fa fa-map-marker"></i>
                                        &nbsp; Caliphonia, PO 455001
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                  <div className="jp_job_post_right_btn_wrapper">
                                    <ul>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-heart-o"></i>
                                        </a>
                                      </li>

                                      <li>
                                        <a href="#">Apply</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                            <div className="jp_job_post_main_wrapper">
                              <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                  <div className="jp_job_post_side_img">
                                    <img
                                      src="images/content/job_post_img4.jpg"
                                      alt="post_img"
                                    />
                                  </div>
                                  <div className="jp_job_post_right_cont">
                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                    <p>Webstrot Technology Pvt. Ltd.</p>
                                    <ul>
                                      <li>
                                        <i className="fa fa-cc-paypal"></i>
                                        &nbsp; $12K - 15k P.A.
                                      </li>
                                      <li>
                                        <i className="fa fa-map-marker"></i>
                                        &nbsp; Caliphonia, PO 455001
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                  <div className="jp_job_post_right_btn_wrapper">
                                    <ul>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-heart-o"></i>
                                        </a>
                                      </li>

                                      <li>
                                        <a href="#">Apply</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                            <div className="jp_job_post_main_wrapper">
                              <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                  <div className="jp_job_post_side_img">
                                    <img
                                      src="images/content/job_post_img5.jpg"
                                      alt="post_img"
                                    />
                                  </div>
                                  <div className="jp_job_post_right_cont">
                                    <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                    <p>Webstrot Technology Pvt. Ltd.</p>
                                    <ul>
                                      <li>
                                        <i className="fa fa-cc-paypal"></i>
                                        &nbsp; $12K - 15k P.A.
                                      </li>
                                      <li>
                                        <i className="fa fa-map-marker"></i>
                                        &nbsp; Caliphonia, PO 455001
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                  <div className="jp_job_post_right_btn_wrapper">
                                    <ul>
                                      <li>
                                        <a href="#">
                                          <i className="fa fa-heart-o"></i>
                                        </a>
                                      </li>

                                      <li>
                                        <a href="#">Apply</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* pagination */}
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hidden-sm hidden-xs">
                          <div className="pager_wrapper gc_blog_pagination">
                            <ul className="pagination">
                              <li>
                                <a href="#">Priv.</a>
                              </li>
                              <li>
                                <a href="#">1</a>
                              </li>
                              <li>
                                <a href="#">2</a>
                              </li>
                              <li>
                                <a href="#">3</a>
                              </li>
                              <li className="hidden-xs">
                                <a href="#">4</a>
                              </li>
                              <li>
                                <a href="#">Next</a>
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
        </div>
      </div>
    </>
  );

  return <Layout page={JobListContent} isShowBanner={false} />;
};

export default JobList;

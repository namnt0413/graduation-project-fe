import Layout from "../layouts/Layout";
import "../styles/pages/JobList.css";

const CompanyList = () => {
  const CompanyListContent = (
    <>
      <div class="jp_listing_sidebar_main_wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="jp_listing_heading_wrapper">
                <h2>
                  We found <span>357</span> Matches for you.
                </h2>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 hidden-sm hidden-xs">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="jp_rightside_job_categories_wrapper jp_job_location_wrapper">
                    <div class="jp_rightside_job_categories_heading">
                      <h4>Cpmpanies by Location</h4>
                    </div>
                    <div class="jp_rightside_job_categories_content">
                      <div class="handyman_sec1_wrapper">
                        <div class="content">
                          <div class="box">
                            <p>
                              <input type="checkbox" id="c9" name="cb" />
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
                            <i class="fa fa-plus-circle"></i>{" "}
                            <a href="#">SHOW MORE</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="jp_rightside_job_categories_wrapper jp_job_location_wrapper">
                    <div class="jp_rightside_job_categories_heading">
                      <h4>Your Skill’s</h4>
                    </div>
                    <div class="jp_rightside_job_categories_content">
                      <div class="handyman_sec1_wrapper">
                        <div class="content">
                          <div class="box">
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
                            <i class="fa fa-plus-circle"></i>{" "}
                            <a href="#">SHOW MORE</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="jp_add_resume_wrapper jp_job_location_wrapper">
                    <div class="jp_add_resume_img_overlay"></div>
                    <div class="jp_add_resume_cont">
                      <img src="images/content/resume_logo.png" alt="logo" />
                      <h4>
                        Get Best Matched Jobs On your Email. Add Resume NOW!
                      </h4>
                      <ul>
                        <li>
                          <a href="#">
                            <i class="fa fa-plus-circle"></i> &nbsp;ADD RESUME
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="jp_listing_tabs_wrapper">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                      <div class="gc_causes_select_box_wrapper">
                        <div class="gc_causes_select_box">
                          <select>
                            <option>Sort Default</option>
                            <option>Sort Default</option>
                            <option>Sort Default</option>
                          </select>
                          <i class="fa fa-angle-down"></i>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                      <div class="gc_causes_view_tabs_wrapper">
                        <div class="gc_causes_view_tabs">
                          <ul class="nav nav-pills">
                            <li class="active">
                              <a data-toggle="pill" href="#grid">
                                <i class="fa fa-th-large"></i>
                              </a>
                            </li>
                            <li>
                              <a data-toggle="pill" href="#list">
                                <i class="fa fa-list"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                      <div class="gc_causes_search_box_wrapper gc_causes_search_box_wrapper2">
                        <div class="gc_causes_search_box">
                          <p>
                            You're Watching &nbsp;<span>01 to 20</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="tab-content">
                    <div id="grid" class="tab-pane fade in active">
                      <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <div class="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                            <div class="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                              <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div class="jp_job_post_side_img">
                                    <img
                                      src="images/content/job_post_img1.jpg"
                                      alt="post_img"
                                    />
                                  </div>
                                  <div class="jp_job_post_right_cont jp_job_post_grid_right_cont jp_cl_job_cont">
                                    <h4>COMERA JOB PORT</h4>
                                    <p>MARKETING JOB</p>
                                    <ul>
                                      <li>
                                        <i class="fa fa-map-marker"></i>&nbsp;
                                        Caliphonia, PO 455001
                                      </li>
                                    </ul>
                                    <div class="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper jp_cl_aply_btn">
                                      <ul>
                                        <li>
                                          <a href="#">145 ACTIVE JOBS</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <div class="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                            <div class="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                              <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div class="jp_job_post_side_img">
                                    <img
                                      src="images/content/job_post_img2.jpg"
                                      alt="post_img"
                                    />
                                  </div>
                                  <div class="jp_job_post_right_cont jp_job_post_grid_right_cont jp_cl_job_cont">
                                    <h4>COMERA JOB PORT</h4>
                                    <p>MARKETING JOB</p>
                                    <ul>
                                      <li>
                                        <i class="fa fa-map-marker"></i>&nbsp;
                                        Caliphonia, PO 455001
                                      </li>
                                    </ul>
                                    <div class="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper jp_cl_aply_btn">
                                      <ul>
                                        <li>
                                          <a href="#">145 ACTIVE JOBS</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <div class="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                            <div class="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                              <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div class="jp_job_post_side_img">
                                    <img
                                      src="images/content/job_post_img3.jpg"
                                      alt="post_img"
                                    />
                                  </div>
                                  <div class="jp_job_post_right_cont jp_job_post_grid_right_cont jp_cl_job_cont">
                                    <h4>COMERA JOB PORT</h4>
                                    <p>MARKETING JOB</p>
                                    <ul>
                                      <li>
                                        <i class="fa fa-map-marker"></i>&nbsp;
                                        Caliphonia, PO 455001
                                      </li>
                                    </ul>
                                    <div class="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper jp_cl_aply_btn">
                                      <ul>
                                        <li>
                                          <a href="#">145 ACTIVE JOBS</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <div class="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                            <div class="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                              <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div class="jp_job_post_side_img">
                                    <img
                                      src="images/content/job_post_img4.jpg"
                                      alt="post_img"
                                    />
                                  </div>
                                  <div class="jp_job_post_right_cont jp_job_post_grid_right_cont jp_cl_job_cont">
                                    <h4>COMERA JOB PORT</h4>
                                    <p>MARKETING JOB</p>
                                    <ul>
                                      <li>
                                        <i class="fa fa-map-marker"></i>&nbsp;
                                        Caliphonia, PO 455001
                                      </li>
                                    </ul>
                                    <div class="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper jp_cl_aply_btn">
                                      <ul>
                                        <li>
                                          <a href="#">145 ACTIVE JOBS</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <div class="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                            <div class="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                              <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div class="jp_job_post_side_img">
                                    <img
                                      src="images/content/job_post_img5.jpg"
                                      alt="post_img"
                                    />
                                  </div>
                                  <div class="jp_job_post_right_cont jp_job_post_grid_right_cont jp_cl_job_cont">
                                    <h4>COMERA JOB PORT</h4>
                                    <p>MARKETING JOB</p>
                                    <ul>
                                      <li>
                                        <i class="fa fa-map-marker"></i>&nbsp;
                                        Caliphonia, PO 455001
                                      </li>
                                    </ul>
                                    <div class="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper jp_cl_aply_btn">
                                      <ul>
                                        <li>
                                          <a href="#">145 ACTIVE JOBS</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <div class="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                            <div class="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                              <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div class="jp_job_post_side_img">
                                    <img
                                      src="images/content/job_post_img1.jpg"
                                      alt="post_img"
                                    />
                                  </div>
                                  <div class="jp_job_post_right_cont jp_job_post_grid_right_cont jp_cl_job_cont">
                                    <h4>COMERA JOB PORT</h4>
                                    <p>MARKETING JOB</p>
                                    <ul>
                                      <li>
                                        <i class="fa fa-map-marker"></i>&nbsp;
                                        Caliphonia, PO 455001
                                      </li>
                                    </ul>
                                    <div class="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper jp_cl_aply_btn">
                                      <ul>
                                        <li>
                                          <a href="#">145 ACTIVE JOBS</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <div class="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                            <div class="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                              <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div class="jp_job_post_side_img">
                                    <img
                                      src="images/content/job_post_img2.jpg"
                                      alt="post_img"
                                    />
                                  </div>
                                  <div class="jp_job_post_right_cont jp_job_post_grid_right_cont jp_cl_job_cont">
                                    <h4>COMERA JOB PORT</h4>
                                    <p>MARKETING JOB</p>
                                    <ul>
                                      <li>
                                        <i class="fa fa-map-marker"></i>&nbsp;
                                        Caliphonia, PO 455001
                                      </li>
                                    </ul>
                                    <div class="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper jp_cl_aply_btn">
                                      <ul>
                                        <li>
                                          <a href="#">145 ACTIVE JOBS</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <div class="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                            <div class="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">
                              <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div class="jp_job_post_side_img">
                                    <img
                                      src="images/content/job_post_img3.jpg"
                                      alt="post_img"
                                    />
                                  </div>
                                  <div class="jp_job_post_right_cont jp_job_post_grid_right_cont jp_cl_job_cont">
                                    <h4>COMERA JOB PORT</h4>
                                    <p>MARKETING JOB</p>
                                    <ul>
                                      <li>
                                        <i class="fa fa-map-marker"></i>&nbsp;
                                        Caliphonia, PO 455001
                                      </li>
                                    </ul>
                                    <div class="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper jp_cl_aply_btn">
                                      <ul>
                                        <li>
                                          <a href="#">145 ACTIVE JOBS</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* pagination */}
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 hidden-sm hidden-xs">
                          <div class="pager_wrapper gc_blog_pagination">
                            <ul class="pagination">
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
                              <li class="hidden-xs">
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
                    <div id="list" class="tab-pane fade">
                      <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div class="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                            <div class="jp_job_post_main_wrapper">
                              <div class="row">
                                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                  <div class="jp_job_post_side_img">
                                    <img
                                      src="images/content/job_post_img2.jpg"
                                      alt="post_img"
                                    />
                                  </div>
                                  <div class="jp_job_post_right_cont jp_cl_job_cont">
                                    <h4>COMERA JOB PORT</h4>
                                    <p>MARKETING JOB</p>
                                    <ul>
                                      <li>
                                        <i class="fa fa-map-marker"></i>&nbsp;
                                        Caliphonia, PO 455001
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                  <div class="jp_job_post_right_btn_wrapper">
                                    <ul>
                                      <li>
                                        <a href="#">145 ACTIVE JOBS</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div class="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                            <div class="jp_job_post_main_wrapper">
                              <div class="row">
                                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                  <div class="jp_job_post_side_img">
                                    <img
                                      src="images/content/job_post_img3.jpg"
                                      alt="post_img"
                                    />
                                  </div>
                                  <div class="jp_job_post_right_cont jp_cl_job_cont">
                                    <h4>COMERA JOB PORT</h4>
                                    <p>MARKETING JOB</p>
                                    <ul>
                                      <li>
                                        <i class="fa fa-map-marker"></i>&nbsp;
                                        Caliphonia, PO 455001
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                  <div class="jp_job_post_right_btn_wrapper">
                                    <ul>
                                      <li>
                                        <a href="#">145 ACTIVE JOBS</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div class="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                            <div class="jp_job_post_main_wrapper">
                              <div class="row">
                                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                  <div class="jp_job_post_side_img">
                                    <img
                                      src="images/content/job_post_img4.jpg"
                                      alt="post_img"
                                    />
                                  </div>
                                  <div class="jp_job_post_right_cont jp_cl_job_cont">
                                    <h4>COMERA JOB PORT</h4>
                                    <p>MARKETING JOB</p>
                                    <ul>
                                      <li>
                                        <i class="fa fa-map-marker"></i>&nbsp;
                                        Caliphonia, PO 455001
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                  <div class="jp_job_post_right_btn_wrapper">
                                    <ul>
                                      <li>
                                        <a href="#">145 ACTIVE JOBS</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div class="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                            <div class="jp_job_post_main_wrapper">
                              <div class="row">
                                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                  <div class="jp_job_post_side_img">
                                    <img
                                      src="images/content/job_post_img5.jpg"
                                      alt="post_img"
                                    />
                                  </div>
                                  <div class="jp_job_post_right_cont jp_cl_job_cont">
                                    <h4>COMERA JOB PORT</h4>
                                    <p>MARKETING JOB</p>
                                    <ul>
                                      <li>
                                        <i class="fa fa-map-marker"></i>&nbsp;
                                        Caliphonia, PO 455001
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                  <div class="jp_job_post_right_btn_wrapper">
                                    <ul>
                                      <li>
                                        <a href="#">145 ACTIVE JOBS</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div class="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                            <div class="jp_job_post_main_wrapper">
                              <div class="row">
                                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                  <div class="jp_job_post_side_img">
                                    <img
                                      src="images/content/job_post_img1.jpg"
                                      alt="post_img"
                                    />
                                  </div>
                                  <div class="jp_job_post_right_cont jp_cl_job_cont">
                                    <h4>COMERA JOB PORT</h4>
                                    <p>MARKETING JOB</p>
                                    <ul>
                                      <li>
                                        <i class="fa fa-map-marker"></i>&nbsp;
                                        Caliphonia, PO 455001
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                  <div class="jp_job_post_right_btn_wrapper">
                                    <ul>
                                      <li>
                                        <a href="#">145 ACTIVE JOBS</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* pagination */}
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 hidden-sm hidden-xs">
                          <div class="pager_wrapper gc_blog_pagination">
                            <ul class="pagination">
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
                              <li class="hidden-xs">
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

  return <Layout page={CompanyListContent} isShowBanner={false} />;
};

export default CompanyList;

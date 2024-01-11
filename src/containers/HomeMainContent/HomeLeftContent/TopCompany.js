import Slider from "react-slick";
import "../../../styles/containers/HomeLeftContent/TopCompany.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../../lib/axios";

const TopCompany = () => {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const getCompanies = async () => {
      const res = await axios.get("/api/company/get-all-companies");
      setCompanies(res.data.data);
    };
    getCompanies();
  }, []);
  console.log(companies);

  const settings = {
    dots: false,
    infinite: true,
    initialSlide: 0,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [],
  };

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="jp_hiring_slider_main_wrapper">
          <div className="jp_hiring_heading_wrapper top-company-title">
            <h2>Top Hiring Companies</h2>
          </div>
          <div className="jp_hiring_slider_wrapper top-campany-list">
            <Slider {...settings}>
              <div className="company-item">
                <div className="jp_hiring_content_main_wrapper">
                  <div className="jp_hiring_content_wrapper">
                    <img
                      src="images/content/hiring_img1.png"
                      alt="hiring_img"
                    />
                    <h4>Akshay INC.</h4>
                    <p>(NewYork)</p>
                    <ul>
                      <li>
                        <a href="#">4 Opening</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="company-item">
                <div className="jp_hiring_content_main_wrapper">
                  <div className="jp_hiring_content_wrapper">
                    <img
                      src="images/content/hiring_img2.png"
                      alt="hiring_img"
                    />
                    <h4>Akshay INC.</h4>
                    <p>(NewYork)</p>
                    <ul>
                      <li>
                        <a href="#">4 Opening</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="company-item">
                <div className="jp_hiring_content_main_wrapper">
                  <div className="jp_hiring_content_wrapper">
                    <img
                      src="images/content/hiring_img3.png"
                      alt="hiring_img"
                    />
                    <h4>Akshay INC.</h4>
                    <p>(NewYork)</p>
                    <ul>
                      <li>
                        <a href="#">4 Opening</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="company-item">
                <div className="jp_hiring_content_main_wrapper">
                  <div className="jp_hiring_content_wrapper">
                    <img
                      src="images/content/hiring_img4.png"
                      alt="hiring_img"
                    />
                    <h4>Akshay INC.</h4>
                    <p>(NewYork)</p>
                    <ul>
                      <li>
                        <a href="#">4 Opening</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {companies.map((company, index) => (
                <div className="company-item">
                  <div
                    className="jp_hiring_content_main_wrapper"
                    // onClick={() => {
                    //   navigate(`/company/${company.id}`);
                    // }}
                    onClick={() => openInNewTab(`/company/${company.id}`)}
                  >
                    <div className="jp_hiring_content_wrapper">
                      <img
                        src={company.avatar_url}
                        alt="hiring_img"
                        className="company-avatar"
                      />
                      <h4>{company.name}</h4>
                      <p>{company.address}</p>
                      <ul>
                        <li>
                          <a href="#">4 Jobs Opening</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCompany;

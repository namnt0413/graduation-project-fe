import "../../styles/containers/Home/TrendingJob.css";
import Slider from "react-slick";

const TrendingJob = () => {
  const settings = {
    dots: false,
    infinite: true,
    initialSlide: 0,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [],
  };

  return (
    <>
      <div className="jp_tittle_slider_main_wrapper trending-category">
        <div className="container">
          <div className="jp_tittle_name_wrapper">
            <div className="jp_tittle_name">
              <h3>Trending</h3>
              <h4>Job Categories</h4>
            </div>
          </div>
          <div className="jp_tittle_slider_wrapper">
            <div className="jp_tittle_slider_content_wrapper trending-category">
              <Slider {...settings}>
                <div className="jp_tittle_slides_one">
                  <div className="jp_tittle_side_img_wrapper">
                    <img
                      src="images/content/tittle_img1.png"
                      alt="tittle_img"
                    />
                  </div>
                  <div className="jp_tittle_side_cont_wrapper">
                    <h4>Graphic Designer (UI / UX)</h4>
                    <p>Webstrot Pvt. Ltd.</p>
                  </div>
                </div>
                <div className="jp_tittle_slides_one jp_tittle_slides_two">
                  <div className="jp_tittle_side_img_wrapper">
                    <img
                      src="images/content/tittle_img2.png"
                      alt="tittle_img"
                    />
                  </div>
                  <div className="jp_tittle_side_cont_wrapper">
                    <h4>IT Engineer</h4>
                    <p>Webstrot Pvt. Ltd.</p>
                  </div>
                </div>
                <div className="jp_tittle_slides_one jp_tittle_slides_third">
                  <div className="jp_tittle_side_img_wrapper">
                    <img
                      src="images/content/tittle_img3.png"
                      alt="tittle_img"
                    />
                  </div>
                  <div className="jp_tittle_side_cont_wrapper">
                    <h4>Accountant</h4>
                    <p>Webstrot Pvt. Ltd.</p>
                  </div>
                </div>
                <div className="jp_tittle_slides_one">
                  <div className="jp_tittle_side_img_wrapper">
                    <img
                      src="images/content/tittle_img2.png"
                      alt="tittle_img"
                    />
                  </div>
                  <div className="jp_tittle_side_cont_wrapper">
                    <h4>Graphic Designer (UI / UX)</h4>
                    <p>Webstrot Pvt. Ltd.</p>
                  </div>
                </div>
                <div className="jp_tittle_slides_one jp_tittle_slides_two">
                  <div className="jp_tittle_side_img_wrapper">
                    <img
                      src="images/content/tittle_img3.png"
                      alt="tittle_img"
                    />
                  </div>
                  <div className="jp_tittle_side_cont_wrapper">
                    <h4>Bussiness Analyst</h4>
                    <p>Webstrot Pvt. Ltd.</p>
                  </div>
                </div>
                <div className="jp_tittle_slides_one jp_tittle_slides_third">
                  <div className="jp_tittle_side_img_wrapper">
                    <img
                      src="images/content/tittle_img1.png"
                      alt="tittle_img"
                    />
                  </div>
                  <div className="jp_tittle_side_cont_wrapper">
                    <h4>Graphic Designer (UI / UX)</h4>
                    <p>Webstrot Pvt. Ltd.</p>
                  </div>
                </div>
                <div className="jp_tittle_slides_one">
                  <div className="jp_tittle_side_img_wrapper">
                    <img
                      src="images/content/tittle_img3.png"
                      alt="tittle_img"
                    />
                  </div>
                  <div className="jp_tittle_side_cont_wrapper">
                    <h4>Graphic Designer (UI / UX)</h4>
                    <p>Webstrot Pvt. Ltd.</p>
                  </div>
                </div>
                <div className="jp_tittle_slides_one jp_tittle_slides_two">
                  <div className="jp_tittle_side_img_wrapper">
                    <img
                      src="images/content/tittle_img1.png"
                      alt="tittle_img"
                    />
                  </div>
                  <div className="jp_tittle_side_cont_wrapper">
                    <h4>Graphic Designer (UI / UX)</h4>
                    <p>Webstrot Pvt. Ltd.</p>
                  </div>
                </div>
                <div className="jp_tittle_slides_one jp_tittle_slides_third">
                  <div className="jp_tittle_side_img_wrapper">
                    <img
                      src="images/content/tittle_img2.png"
                      alt="tittle_img"
                    />
                  </div>
                  <div className="jp_tittle_side_cont_wrapper">
                    <h4>Graphic Designer (UI / UX)</h4>
                    <p>Webstrot Pvt. Ltd.</p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingJob;

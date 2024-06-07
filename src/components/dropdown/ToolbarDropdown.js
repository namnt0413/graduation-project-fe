import React, { useRef, useEffect } from "react";
import "../../styles/components/dropdown/ToolbarDropdown.css";
import Slider from "react-slick";

const ToolbarDropdown = ({ isOpen, onClose, dropdownType }) => {
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose(); // Gọi hàm onClose từ props để đóng dropdown khi click ra ngoài dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const settings = {
    dots: false,
    infinite: true,
    initialSlide: 0,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 6000,
    responsive: [],
  };

  return (
    <div ref={dropdownRef} className="toolbar-dropdown">
      {isOpen && (
        <div className="toolbar-dropdown-content">
          {dropdownType !== undefined && dropdownType === 1 ? (
            <div className="dropdown-font">Dropdown Font</div>
          ) : dropdownType === 2 ? (
            <div className="dropdown-color">
              <div className="theme-color-title">Màu sắc chủ đề</div>
              <div className="list-theme-color">
                <div className="list-theme-color-row">
                  <button
                    className="theme-color-button selected"
                    style={{ backgroundColor: "red" }}
                    // style={{borderColor: BORDER_COLOR[pastdueTask.priority]}}
                    // onClick={() =>
                    //   test(test)
                    // }
                  ></button>
                  <button
                    className="theme-color-button"
                    style={{ backgroundColor: "blue" }}
                  ></button>
                  <button
                    className="theme-color-button"
                    style={{ backgroundColor: "yellow" }}
                  ></button>
                  <button
                    className="theme-color-button"
                    style={{ backgroundColor: "green" }}
                  ></button>
                </div>
                <div className="list-theme-color-row">
                  <button
                    className="theme-color-button"
                    style={{ backgroundColor: "violet" }}
                  ></button>
                  <button
                    className="theme-color-button"
                    style={{ backgroundColor: "orange" }}
                  ></button>
                  <button
                    className="theme-color-button"
                    style={{ backgroundColor: "black" }}
                  ></button>
                  <button
                    className="theme-color-button"
                    style={{ backgroundColor: "grey" }}
                  ></button>
                </div>
              </div>
            </div>
          ) : (
            <div className="dropdown-template">
              <div className="dropdown-template-container">
                <div className="dropdown-template-title">Mẫu CV</div>
                <Slider {...settings}>
                  <div className="template-preview">
                    <div className="jp_hiring_content_main_wrapper">
                      <div className="jp_hiring_content_wrapper">
                        <img
                          className="selected"
                          src="https://firebasestorage.googleapis.com/v0/b/crowdsourcing-9c7fd.appspot.com/o/Image%2FScreenshot%202024-06-07%20222803.png?alt=media&token=430b71e7-2a30-4c11-803c-1b2252823115"
                        />
                        <h4 className="template-preview-title">Template 1</h4>
                      </div>
                    </div>
                  </div>
                  <div className="template-preview">
                    <div className="jp_hiring_content_main_wrapper">
                      <div className="jp_hiring_content_wrapper">
                        <img src="https://firebasestorage.googleapis.com/v0/b/crowdsourcing-9c7fd.appspot.com/o/Image%2FScreenshot%202024-06-07%20222803.png?alt=media&token=430b71e7-2a30-4c11-803c-1b2252823115" />
                        <h4 className="template-preview-title">Template 2</h4>
                      </div>
                    </div>
                  </div>
                  <div className="template-preview">
                    <div className="jp_hiring_content_main_wrapper">
                      <div className="jp_hiring_content_wrapper">
                        <img src="https://firebasestorage.googleapis.com/v0/b/crowdsourcing-9c7fd.appspot.com/o/Image%2FScreenshot%202024-06-07%20222803.png?alt=media&token=430b71e7-2a30-4c11-803c-1b2252823115" />
                        <h4 className="template-preview-title">Template 3</h4>
                      </div>
                    </div>
                  </div>
                  <div className="template-preview">
                    <div className="jp_hiring_content_main_wrapper">
                      <div className="jp_hiring_content_wrapper">
                        <img src="https://firebasestorage.googleapis.com/v0/b/crowdsourcing-9c7fd.appspot.com/o/Image%2FScreenshot%202024-06-07%20222803.png?alt=media&token=430b71e7-2a30-4c11-803c-1b2252823115" />
                        <h4 className="template-preview-title">Template 4</h4>
                      </div>
                    </div>
                  </div>
                  <div className="template-preview">
                    <div className="jp_hiring_content_main_wrapper">
                      <div className="jp_hiring_content_wrapper">
                        <img src="https://firebasestorage.googleapis.com/v0/b/crowdsourcing-9c7fd.appspot.com/o/Image%2FScreenshot%202024-06-07%20222803.png?alt=media&token=430b71e7-2a30-4c11-803c-1b2252823115" />
                        <h4 className="template-preview-title">Template 5</h4>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ToolbarDropdown;

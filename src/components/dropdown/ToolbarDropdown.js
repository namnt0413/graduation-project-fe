import React, { useRef, useEffect } from "react";
import "../../styles/components/dropdown/ToolbarDropdown.css";
import Slider from "react-slick";
import { Color } from "../../const/color";
import { TextFont } from "../../const/TextFont";

const ToolbarDropdown = ({
  isOpen,
  onClose,
  dropdownType,
  onChangeColor,
  selectedColor,
  onChangeTemplate,
  selectedTemplate,
  onChangeTextFont,
  selectedTextFont
}) => {
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
            <div className="dropdown-font">
              <div className="text-font" onClick={() => onChangeTextFont(1)}>
                {TextFont[1]} {selectedTextFont===1?"[x]":""}
              </div>
              <div className="text-font" onClick={() => onChangeTextFont(2)}>
                {TextFont[2]} {selectedTextFont===2?"[x]":""}
              </div>
              <div className="text-font" onClick={() => onChangeTextFont(3)}>
                {TextFont[3]} {selectedTextFont===3?"[x]":""}
              </div>
            </div>
          ) : dropdownType === 2 ? (
            <div className="dropdown-color">
              <div className="theme-color-title">Màu sắc chủ đề</div>
              <div className="list-theme-color">
                <div className="list-theme-color-row">
                  {selectedColor === 1 ? (
                    <button
                      className="theme-color-button selected"
                      style={{ backgroundColor: Color[1] }}
                      onClick={() => onChangeColor(1)}
                    ></button>
                  ) : (
                    <button
                      className="theme-color-button"
                      style={{ backgroundColor: Color[1] }}
                      onClick={() => onChangeColor(1)}
                    ></button>
                  )}
                  {selectedColor === 2 ? (
                    <button
                      className="theme-color-button selected"
                      style={{ backgroundColor: Color[2] }}
                      onClick={() => onChangeColor(2)}
                    ></button>
                  ) : (
                    <button
                      className="theme-color-button"
                      style={{ backgroundColor: Color[2] }}
                      onClick={() => onChangeColor(2)}
                    ></button>
                  )}
                  {selectedColor === 3 ? (
                    <button
                      className="theme-color-button selected"
                      style={{ backgroundColor: Color[3] }}
                      onClick={() => onChangeColor(3)}
                    ></button>
                  ) : (
                    <button
                      className="theme-color-button"
                      style={{ backgroundColor: Color[3] }}
                      onClick={() => onChangeColor(3)}
                    ></button>
                  )}
                  {selectedColor === 4 ? (
                    <button
                      className="theme-color-button selected"
                      style={{ backgroundColor: Color[4] }}
                      onClick={() => onChangeColor(4)}
                    ></button>
                  ) : (
                    <button
                      className="theme-color-button"
                      style={{ backgroundColor: Color[4] }}
                      onClick={() => onChangeColor(4)}
                    ></button>
                  )}
                </div>
                <div className="list-theme-color-row">
                  {selectedColor === 5 ? (
                    <button
                      className="theme-color-button selected"
                      style={{ backgroundColor: Color[5] }}
                      onClick={() => onChangeColor(5)}
                    ></button>
                  ) : (
                    <button
                      className="theme-color-button"
                      style={{ backgroundColor: Color[5] }}
                      onClick={() => onChangeColor(5)}
                    ></button>
                  )}
                  {selectedColor === 6 ? (
                    <button
                      className="theme-color-button selected"
                      style={{ backgroundColor: Color[6] }}
                      onClick={() => onChangeColor(6)}
                    ></button>
                  ) : (
                    <button
                      className="theme-color-button"
                      style={{ backgroundColor: Color[6] }}
                      onClick={() => onChangeColor(6)}
                    ></button>
                  )}
                  {selectedColor === 7 ? (
                    <button
                      className="theme-color-button selected"
                      style={{ backgroundColor: Color[7] }}
                      onClick={() => onChangeColor(7)}
                    ></button>
                  ) : (
                    <button
                      className="theme-color-button"
                      style={{ backgroundColor: Color[7] }}
                      onClick={() => onChangeColor(7)}
                    ></button>
                  )}
                  {selectedColor === 8 ? (
                    <button
                      className="theme-color-button selected"
                      style={{ backgroundColor: Color[8] }}
                      onClick={() => onChangeColor(8)}
                    ></button>
                  ) : (
                    <button
                      className="theme-color-button"
                      style={{ backgroundColor: Color[8] }}
                      onClick={() => onChangeColor(8)}
                    ></button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="dropdown-template">
              <div className="dropdown-template-container">
                <div className="dropdown-template-title">Mẫu CV</div>
                <Slider {...settings}>
                  {selectedTemplate === 1 ? (
                    <div className="template-preview"
                      onClick={() => onChangeTemplate(1)}
                    >
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
                  ) : (
                    <div className="template-preview"
                      onClick={() => onChangeTemplate(1)}
                    >
                      <div className="jp_hiring_content_main_wrapper">
                        <div className="jp_hiring_content_wrapper">
                          <img
                            className=""
                            src="https://firebasestorage.googleapis.com/v0/b/crowdsourcing-9c7fd.appspot.com/o/Image%2FScreenshot%202024-06-07%20222803.png?alt=media&token=430b71e7-2a30-4c11-803c-1b2252823115"
                          />
                          <h4 className="template-preview-title">Template 1</h4>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedTemplate === 2 ? (
                    <div className="template-preview"
                      onClick={() => onChangeTemplate(2)}
                    >
                      <div className="jp_hiring_content_main_wrapper">
                        <div className="jp_hiring_content_wrapper">
                          <img
                            className="selected"
                            src="https://firebasestorage.googleapis.com/v0/b/crowdsourcing-9c7fd.appspot.com/o/Image%2Ft2s.png?alt=media&token=8d0b3c9c-afeb-4bec-8462-2132346ec20b"

                          />
                          <h4 className="template-preview-title">Template 2</h4>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="template-preview"
                      onClick={() => onChangeTemplate(2)}
                    >
                      <div className="jp_hiring_content_main_wrapper">
                        <div className="jp_hiring_content_wrapper">
                          <img
                            className=""
                            src="https://firebasestorage.googleapis.com/v0/b/crowdsourcing-9c7fd.appspot.com/o/Image%2Ft2s.png?alt=media&token=8d0b3c9c-afeb-4bec-8462-2132346ec20b"
                          />
                          <h4 className="template-preview-title">Template 2</h4>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedTemplate === 3 ? (
                    <div className="template-preview"
                      onClick={() => onChangeTemplate(3)}
                    >
                      <div className="jp_hiring_content_main_wrapper">
                        <div className="jp_hiring_content_wrapper">
                          <img
                            className="selected"
                            src="https://firebasestorage.googleapis.com/v0/b/crowdsourcing-9c7fd.appspot.com/o/Image%2Ft3.png?alt=media&token=2943ab76-74fa-41d9-a6cf-9b480f96c8d9"
                          />
                          <h4 className="template-preview-title">Template 3</h4>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="template-preview"
                      onClick={() => onChangeTemplate(3)}
                    >
                      <div className="jp_hiring_content_main_wrapper">
                        <div className="jp_hiring_content_wrapper">
                          <img
                            className=""
                            src="https://firebasestorage.googleapis.com/v0/b/crowdsourcing-9c7fd.appspot.com/o/Image%2Ft3.png?alt=media&token=2943ab76-74fa-41d9-a6cf-9b480f96c8d9"
                          />
                          <h4 className="template-preview-title">Template 3</h4>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedTemplate === 4 ? (
                    <div className="template-preview"
                      onClick={() => onChangeTemplate(4)}
                    >
                      <div className="jp_hiring_content_main_wrapper">
                        <div className="jp_hiring_content_wrapper">
                          <img
                            className="selected"
                            src="https://firebasestorage.googleapis.com/v0/b/crowdsourcing-9c7fd.appspot.com/o/Image%2Ft4.png?alt=media&token=dadabf8e-40d3-4ebc-9060-e425129dafa7"
                          />
                          <h4 className="template-preview-title">Template 4</h4>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="template-preview"
                      onClick={() => onChangeTemplate(4)}
                    >
                      <div className="jp_hiring_content_main_wrapper">
                        <div className="jp_hiring_content_wrapper">
                          <img
                            className=""
                            src="https://firebasestorage.googleapis.com/v0/b/crowdsourcing-9c7fd.appspot.com/o/Image%2Ft4.png?alt=media&token=dadabf8e-40d3-4ebc-9060-e425129dafa7"
                          />
                          <h4 className="template-preview-title">Template 4</h4>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedTemplate === 5 ? (
                    <div className="template-preview"
                      onClick={() => onChangeTemplate(5)}
                    >
                      <div className="jp_hiring_content_main_wrapper">
                        <div className="jp_hiring_content_wrapper">
                          <img
                            className="selected"
                            src="https://firebasestorage.googleapis.com/v0/b/crowdsourcing-9c7fd.appspot.com/o/Image%2Ft5.png?alt=media&token=30b103db-cfc9-4eaf-bdd0-a6c46a26f4a5" 
                          />
                          <h4 className="template-preview-title">Template 5</h4>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="template-preview"
                      onClick={() => onChangeTemplate(5)}
                    >
                      <div className="jp_hiring_content_main_wrapper">
                        <div className="jp_hiring_content_wrapper">
                          <img
                            className=""
                            src="https://firebasestorage.googleapis.com/v0/b/crowdsourcing-9c7fd.appspot.com/o/Image%2Ft5.png?alt=media&token=30b103db-cfc9-4eaf-bdd0-a6c46a26f4a5" 
                          />
                          <h4 className="template-preview-title">Template 5</h4>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* <div className="template-preview">
                    <div className="jp_hiring_content_main_wrapper">
                      <div className="jp_hiring_content_wrapper">
                        <img src="https://firebasestorage.googleapis.com/v0/b/crowdsourcing-9c7fd.appspot.com/o/Image%2Ft2s.png?alt=media&token=8d0b3c9c-afeb-4bec-8462-2132346ec20b" />
                        <h4 className="template-preview-title">Template 2</h4>
                      </div>
                    </div>
                  </div>
                  <div className="template-preview">
                    <div className="jp_hiring_content_main_wrapper">
                      <div className="jp_hiring_content_wrapper">
                        <img src="https://firebasestorage.googleapis.com/v0/b/crowdsourcing-9c7fd.appspot.com/o/Image%2Ft3.png?alt=media&token=2943ab76-74fa-41d9-a6cf-9b480f96c8d9" />
                        <h4 className="template-preview-title">Template 3</h4>
                      </div>
                    </div>
                  </div>
                  <div className="template-preview">
                    <div className="jp_hiring_content_main_wrapper">
                      <div className="jp_hiring_content_wrapper">
                        <img src="https://firebasestorage.googleapis.com/v0/b/crowdsourcing-9c7fd.appspot.com/o/Image%2Ft4.png?alt=media&token=dadabf8e-40d3-4ebc-9060-e425129dafa7" />
                        <h4 className="template-preview-title">Template 4</h4>
                      </div>
                    </div>
                  </div>
                  <div className="template-preview">
                    <div className="jp_hiring_content_main_wrapper">
                      <div className="jp_hiring_content_wrapper">
                        <img src="https://firebasestorage.googleapis.com/v0/b/crowdsourcing-9c7fd.appspot.com/o/Image%2Ft5.png?alt=media&token=30b103db-cfc9-4eaf-bdd0-a6c46a26f4a5" />
                        <h4 className="template-preview-title">Template 5</h4>
                      </div>
                    </div>
                  </div> */}
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

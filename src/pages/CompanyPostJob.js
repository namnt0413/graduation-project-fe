import CompanyLayout from "../layouts/CompanyLayout";
import "../styles/pages/CompanyPostJob.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../api/axios";
import AuthCompany from "../components/AuthCompany";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatetimePicker from "../components/times/DatetimePicker";
import DatetimeHandle from "../components/times/DatetimeHandle";
import { EXP } from "../const/exp";
import Select from 'react-select'

const CompanyPostJob = () => {
  const { getCompany } = AuthCompany();
  const navigate = useNavigate();
  const [company, setCompany] = useState(getCompany());
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);
  const [positions, setPositions] = useState([]);
  const [position, setPosition] = useState([]);
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState([]);
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [requirement, setRequirement] = useState([]);
  const [right, setRight] = useState([]);
  const [exp, setExp] = useState([]);
  const [salary, setSalary] = useState([]);
  const [maxSalary, setMaxSalary] = useState("");
  const [address, setAddress] = useState([company.address ?? company.address]);
  const [selectedDate, setSelectedDate] = useState(null);

  function convertCategories(categories) {  
    return categories.map(category => ({
        label: category.name,
        value: category.id,
    }));
  }

  const notify = () => toast("Created new job success!");

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get("/category/all");
      setCategories(res.data.data);
    };
    getCategories();
    const getPositions = async () => {
      const res = await axios.get("/position/all");
      setPositions(res.data.data);
    };
    getPositions();
    const getCities = async () => {
      const res = await axios.get("/city/all");
      setCities(res.data.data);
    };
    getCities();
  }, []);

  const convertedCategories  = convertCategories(categories)

  const handleJob = async (e) => {
    e.preventDefault();
    const categoryList = category.map(item => item.value).join(',');
    const job = await axios
      .post("/job/create", {
        title: title,
        description: description,
        salary: salary,
        requirement: requirement,
        company_id: company.id,
        category_id: categoryList,
        position_id: position,
        city_id: city,
        deadline: selectedDate,
        exp_id: exp,
        right: right,
        address: address[0],
        max_salary: maxSalary ? maxSalary : ""
      })
      .then((res) => {
        notify();
      })
  };

  const handleDateChange = (date) => {
    setSelectedDate(DatetimeHandle(date));
  };

  const CompanyPostJobContent = (
    <>
      <div className="jp_tittle_main_wrapper post-job">
        <div className="jp_tittle_img_overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="jp_tittle_heading_wrapper">
                <div className="jp_tittle_heading">
                  <h2>Đăng công việc mới</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="jp_adp_main_section_wrapper">
        <div className="container">
          <form onSubmit={handleJob} className="p-5 bg-white">
            <div className="row">
              <div className="jp_adp_form_heading_wrapper">
                <h2>Thông tin công việc</h2>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="jp_adp_form_wrapper">
                  <input
                    placeholder="Tiêu đề công việc"
                    type="text"
                    id="title"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="jp_adp_form_wrapper">
                  <select
                    required
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  >
                    <option value="">Địa điểm</option>
                    {cities.map((city, index) => (
                      <option key={index} value={city.id || ""}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-md-6 col-xs-12">
                    <div className="jp_adp_form_wrapper">
                      <input
                        placeholder="Mức lương từ"
                        type="number"
                        id="salary"
                        className="form-control"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-md-6 col-xs-12">
                    <div className="jp_adp_form_wrapper">
                      <input
                        placeholder="đến"
                        type="number"
                        id="maxSalary"
                        className="form-control"
                        value={maxSalary}
                        onChange={(e) => setMaxSalary(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="jp_adp_form_wrapper category_multiple">
                  <Select 
                    isMulti
                    options={convertedCategories} 
                    value={category}
                    onChange={setCategory}  
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 bottom_line_Wrapper">
                <div className="jp_adp_form_heading_wrapper">
                  <p></p>
                </div>
                <div className="jp_adp_form_wrapper">
                  <select
                    required
                    onChange={(e) => {
                      setExp(e.target.value);
                    }}
                  >
                    <option value="">Yêu cầu kinh nghiệm</option>
                    {EXP.map((exp, index) => (
                      <option key={index + 1} value={index + 1 || ""}>
                        {exp}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="jp_adp_form_wrapper">
                  <input
                    placeholder="Địa chỉ"
                    type="text"
                    id="address"
                    className="form-control"
                    value={address[0]}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                <div className="jp_adp_form_wrapper">
                  <DatetimePicker onChange={handleDateChange} />
                </div>
                <div className="jp_adp_form_wrapper">
                  <select
                    required
                    onChange={(e) => {
                      setPosition(e.target.value);
                    }}
                  >
                    <option value="">Vị trí</option>
                    {positions.map((position, index) => (
                      <option key={index} value={position.id || ""}>
                        {position.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="jp_adp_textarea_main_wrapper">
                  <textarea
                    rows="5"
                    placeholder="Mô tả công việc"
                    id="description"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="jp_adp_textarea_main_wrapper">
                  <textarea
                    rows="5"
                    placeholder="Yêu cầu công việc"
                    id="requirement"
                    className="form-control"
                    value={requirement}
                    onChange={(e) => setRequirement(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="jp_adp_textarea_main_wrapper">
                  <textarea
                    rows="5"
                    placeholder="Quyền lợi"
                    id="right"
                    className="form-control"
                    value={right}
                    onChange={(e) => setRight(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="jp_adp_choose_resume_bottom_btn_post">
                  <ul>
                    <li>
                      <input
                        type="submit"
                        value="Đăng công việc"
                        className="post-button"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer  className="toast-position" />
    </>
  );

  return <CompanyLayout page={CompanyPostJobContent} />;
};

export default CompanyPostJob;

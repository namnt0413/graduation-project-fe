import React, { useRef, useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import "../../styles/pages/CV/MyListCv.css";
import { Link } from "react-router-dom";
import axios from "../../lib/axios";
import { ToastContainer, toast } from "react-toastify";
import AuthUser from "../../components/AuthUser";
import moment from "moment";
import { redirect } from "react-router-dom";
import NewDefaultCv from "../../components/cv/NewDefaultCv";
import LoadingOverlay from 'react-loading-overlay';

const MyListCv = () => {
  const [deleteCvs, setDeleteCvs] = useState([]);
  const [listCvs, setListCvs] = useState([]);
  const { getToken, getUser } = AuthUser();
  const [user, setUser] = useState(getUser());
  const notify = () => toast("Xoa cv thanh cong!");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const getListCvs = async () => {
      const res = await axios.get(`api/cv/get-list-cvs/${user.id}`);
      setListCvs(res.data.data);
    };
    getListCvs();
  }, []);

  const handleNewDefaultCv = async (event) => {
    setIsActive(true)
    NewDefaultCv(user.id)
  };

  const handleCheckboxChange = (cvId) => {
    if (deleteCvs.includes(cvId)) {
      setDeleteCvs(deleteCvs.filter((id) => id !== cvId));
    } else {
      setDeleteCvs([...deleteCvs, cvId]);
    }
  };

  const handleDeleteSelected = async () => {
    try {
      const response = await axios.delete("/api/cv/delete-cvs", {
        data: { cvIds: deleteCvs },
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      if (response.status === 200) {
        notify();
        setListCvs(listCvs.filter((cv) => !deleteCvs.includes(cv.id)));
        setDeleteCvs([]);
      } else {
        console.error("Error deleting cv:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting cv:", error);
    }
  };

  const openInNewTab = (url) => {
    window.open(url, "_self", "noopener,noreferrer");
  };

  const MyListCvContent = (
    <>
      <LoadingOverlay
        active={isActive}
        spinner
      >
      <div className="jp_tittle_main_wrapper">
        <div className="jp_tittle_img_overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="jp_tittle_heading_wrapper">
                <div className="jp_tittle_heading">
                  <h2>Danh sách CV đã tạo</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="jp_listing_single_main_wrapper">
        <div className="container">
          <button className="nav-link newJobBtn" onClick={handleNewDefaultCv}>
            Tạo CV mới
          </button>
          <button onClick={handleDeleteSelected} className="deleteBtn">
            Xóa CV
          </button>
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">CV</th>
                <th scope="col">Ngày tạo</th>
                <th scope="col">Trạng thái tìm việc</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {listCvs.map((cv, index) => (
                <tr>
                  <td
                    className="cv-item"
                    onClick={() =>
                      openInNewTab(`/cv/${cv.id}`)
                    }
                  >
                    {cv.title}
                  </td>
                  <td>{moment(cv.created_at).format("DD MMM, YYYY")}</td>
                  <td>active</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={deleteCvs.includes(cv.id)}
                      onChange={() => handleCheckboxChange(cv.id)}
                      className="delete-cv-checkbox"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer className="toast-position" />
</LoadingOverlay>
    </>
  );

  return <Layout page={MyListCvContent} isShowBanner={false} />;
};

export default MyListCv;

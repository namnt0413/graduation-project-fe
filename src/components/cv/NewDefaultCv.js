import React, { useRef, useEffect, useState } from "react";
import axios from "../../lib/axios";

export default function NewDefaultCv(userId) {
  const openInNewTab = (url) => {
    window.open(url, "_self", "noopener,noreferrer");
  };
  axios.post("/api/cv/create", {
    title: "Nguyen Van A - Fullstack Developer",
    user_id: userId,
    template_id: 1,
    theme_color: 1,
    name: "Nguyen Van A",
    email: "nguyenvana@gmail.com",
    position: "Fullstack developer",
    phone: "+84 0987654321",
    address: "Ha Noi, Viet Nam",
    birthday: "01/01/2000",
    avatar: "https://firebasestorage.googleapis.com/v0/b/crowdsourcing-9c7fd.appspot.com/o/Image%2Fdefault-avatar.jpg?alt=media&token=cf2f2000-e600-4d60-81c8-83643967f640",
  })
    .then(async (response) => {
      const newCv = response.data.cv;
      const subjectOffset = [];

      // subject 1
      await axios.post("/api/subject/create", {
        title: "Tổng quan",
        c_v_id: newCv.id,
      })
        .then(async (response2) => {
          const newSubjectId = response2.data.subject.id;
          subjectOffset.push(newSubjectId)

          // tao ra item moi
          const itemOffset1 = []
          await axios.post("/api/item/create", {
            content:
              "<p>- Kỹ sư phần mềm với hơn 4 năm kinh nghiệm trong lĩnh vực phát triển phần mềm và ứng dụng thương mại. Tôi mong muốn được gia nhập vào công ty để xây dựng các giải pháp kinh doanh tiên tiến và sáng tạo giúp tăng doanh thu cho công ty.&nbsp;</p>",
            c_v_id: newCv.id,
            subject_id: newSubjectId,
            type: 2
          })
            .then(async (response3) => {
              const newItemId = response3.data.item.id;
              itemOffset1.push(newItemId)
            })
            .catch((error) => {
              console.error("Error adding new item:", error);
            });
          // cap nhat offset cac item
          const itemOffset1String = itemOffset1.join(",");
          await axios.put(`/api/subject/update-offset/${newSubjectId}`, { offset: itemOffset1String })
            .then((response4) => {
              console.log(response4.data.message);
            })
            .catch((error) => {
              console.error("Error updating offset:", error);
            });
        })
        .catch((error) => {
          console.error("Error add new subject:", error);
        });

      // subject 2
      await axios.post("/api/subject/create", {
        title: "Kinh nghiệm làm việc",
        c_v_id: newCv.id,
      })
        .then(async (response2) => {
          const newSubjectId = response2.data.subject.id;
          subjectOffset.push(newSubjectId)

          // tao ra item moi
          const itemOffset2 = []
          await axios.post("/api/item/create", {
            title: "<p><b>07/2015 - 03/2018</b><br></p>",
            content:
              "<p><b>Công ty ABC&nbsp;</b><br></p><p><i>Kỹ Sư Phần Mềm</i></p><p><ol><li>Xây dựng và Review Proposal, Quotation</li><li>Xây dựng kế hoạch triển khai, kế hoạch migrate, timeline</li></ol></p>",
            c_v_id: newCv.id,
            subject_id: newSubjectId,
          })
            .then(async (response3) => {
              const newItemId = response3.data.item.id;
              itemOffset2.push(newItemId)
            })
            .catch((error) => {
              console.error("Error adding new item:", error);
            });
          await axios.post("/api/item/create", {
            title: "<p><b>2013/05 – 2013/09</b><br></p>",
            content:
              "<p><b>Công ty XYZ</b><br></p><p><i>Project Manager</i></p><p><ol><li>Lập trình phần mềm theo kế hoạch của công ty</li><li>Sửa đổi, cập nhật, cấu trúc lại và gỡ lỗi mã</li><li>Tìm kiếm và sửa lỗi (debugging) phần mềm</li></ol></p>",
            c_v_id: newCv.id,
            subject_id: newSubjectId,
          })
            .then(async (response3) => {
              const newItemId = response3.data.item.id;
              itemOffset2.push(newItemId)
            })
            .catch((error) => {
              console.error("Error adding new item:", error);
            });
          // cap nhat offset cac item
          const itemOffset2String = itemOffset2.join(",");
          await axios.put(`/api/subject/update-offset/${newSubjectId}`, { offset: itemOffset2String })
            .then((response4) => {
              console.log(response4.data.message);
            })
            .catch((error) => {
              console.error("Error updating offset:", error);
            });

        })
        .catch((error) => {
          console.error("Error add new subject:", error);
        });

      // subject 3
      await axios.post("/api/subject/create", {
        title: "Kỹ năng",
        c_v_id: newCv.id,
      })
        .then(async (response2) => {
          const newSubjectId = response2.data.subject.id;
          subjectOffset.push(newSubjectId)

          // tao ra item moi
          const itemOffset3 = []
          await axios.post("/api/item/create", {
            title: "<p><b>Main</b><br></p>",
            content:
              "<div><ol><li>HTML, CSS, JavaScript (ReactJS, React-Native, Lit)</li><li>PHP (Laravel, Symfony, Codeigniter, Yii)</li><li>Node (ExpressJS)</li><li>RESTful API, GraphQL</li><li>MySQL, PostgreSQL, NoSQL (MongoDB)</li><li>Server (Apache, Nginx, Redis, Memcached, Queue, Log, Crontjob...), Rancher, K8S, Docker</li><li>AWS (Load balancing, EC2, ECS, Router 53, RDS, S3)</li></ol></div><p></p><p></p><div></div><div></div>",
            c_v_id: newCv.id,
            subject_id: newSubjectId,
          })
            .then(async (response3) => {
              const newItemId = response3.data.item.id;
              itemOffset3.push(newItemId)
            })
            .catch((error) => {
              console.error("Error adding new item:", error);
            });
          await axios.post("/api/item/create", {
            title: "<p><b>Other</b><br></p>",
            content:
              "<p><ol><li>Ruby (Ruby on Rails)</li><li>SVN, GIT</li><li>Python (selenium automation test, crawler)</li><li>Elasticsearch</li><li>Tensorflow</li></ol></p>",
            c_v_id: newCv.id,
            subject_id: newSubjectId,
          })
            .then(async (response3) => {
              const newItemId = response3.data.item.id;
              itemOffset3.push(newItemId)
            })
            .catch((error) => {
              console.error("Error adding new item:", error);
            });
          // cap nhat offset cac item
          const itemOffset3String = itemOffset3.join(",");
          await axios.put(`/api/subject/update-offset/${newSubjectId}`, { offset: itemOffset3String })
            .then((response4) => {
              console.log(response4.data.message);
            })
            .catch((error) => {
              console.error("Error updating offset:", error);
            });

        })
        .catch((error) => {
          console.error("Error add new subject:", error);
        });

      // subject 4
      await axios.post("/api/subject/create", {
        title: "Chứng chỉ",
        c_v_id: newCv.id,
      })
        .then(async (response2) => {
          const newSubjectId = response2.data.subject.id;
          subjectOffset.push(newSubjectId)

          // tao ra item moi
          const itemOffset4 = []
          await axios.post("/api/item/create", {
            title: "<p><b>08/2016</b><br></p>",
            content:
              "<p>Chứng chỉ Tin học<br></p>",
            c_v_id: newCv.id,
            subject_id: newSubjectId,
          })
            .then(async (response3) => {
              const newItemId = response3.data.item.id;
              itemOffset4.push(newItemId)
            })
            .catch((error) => {
              console.error("Error adding new item:", error);
            });
          await axios.post("/api/item/create", {
            title: "<p><b>01/2017</b><br></p>",
            content:
              "<p>Chứng chỉ IELTS 7.0</p>",
            c_v_id: newCv.id,
            subject_id: newSubjectId,
          })
            .then(async (response3) => {
              const newItemId = response3.data.item.id;
              itemOffset4.push(newItemId)
            })
            .catch((error) => {
              console.error("Error adding new item:", error);
            });
          // cap nhat offset cac item
          const itemOffset4String = itemOffset4.join(",");
          await axios.put(`/api/subject/update-offset/${newSubjectId}`, { offset: itemOffset4String })
            .then((response4) => {
              console.log(response4.data.message);
            })
            .catch((error) => {
              console.error("Error updating offset:", error);
            });

        })
        .catch((error) => {
          console.error("Error add new subject:", error);
        });

      // cap nhat offset cac subject
      const subjectOffsetString = subjectOffset.join(",");
      await axios.put(`/api/cv/update-offset/${newCv.id}`, { offset: subjectOffsetString })
        .then((response5) => {
          console.log(response5.data.message);
        })
        .catch((error) => {
          console.error("Error updating offset:", error);
        });

      const url = "cv/" + newCv.id;
      openInNewTab(url);
    })
    .catch((error) => {
      console.error("Error adding new cv:", error);
    });
}

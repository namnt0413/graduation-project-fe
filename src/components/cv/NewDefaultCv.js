import React, { useRef, useEffect, useState } from "react";
import axios from "../../lib/axios";

export default function NewDefaultCv(userId) {
    const openInNewTab = (url) => {
        window.open(url, "_self", "noopener,noreferrer");
      };

    axios.post("/api/cv/create", {
        title: "NguyenVanA_Fullstack_developer",
        user_id: userId,
        template_id: 1,
        theme_color: "",
        name: "<p>Nguyen Van A</p>",
        email: "nguyenvana@gmail.com",
        position: "Fullstack developer",
        phone: "+84 0987654321",
        address: "Ha Noi, Viet Nam",
        birthday: "01/01/2000",
        })
        .then( async (response) => {
          const newCv = response.data.cv;
          await axios.post("/api/subject/create", {
            title: "Lorem ipsum",
            c_v_id: newCv.id,
          })
          .then( async (response2) => {
            const newSubject = response2.data.subject;
            await axios.put(`/api/cv/update-offset/${newCv.id}`, { offset: newSubject.id })
            .then((response5) => {
              console.log(response5.data.message);
            })
            .catch((error) => {
              console.error("Error updating offset:", error);
            });
            await axios.post("/api/item/create", {
              title: "<p><b>Lorem ipsum</b><br></p>",
              content:
                "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
              c_v_id: newCv.id,
              subject_id: newSubject.id,
            })
            .then( async (response3) => {
              const newItem = response3.data.item;
              await axios.put(`/api/subject/update-offset/${newSubject.id}`, { offset: newItem.id })
              .then((response4) => {
                console.log(response4.data.message);
              })
              .catch((error) => {
                console.error("Error updating offset:", error);
              });
            })
            .catch((error) => {
              console.error("Error adding new item:", error);
            });

          })
          .catch((error) => {
            console.error("Error add new subject:", error);
          });
          
          const url = "cv" + newCv.template_id + "/" + newCv.id;
          openInNewTab(url);

        })
        .catch((error) => {
          console.error("Error adding new cv:", error);
        });
}

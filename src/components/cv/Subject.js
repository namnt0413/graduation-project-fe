import React, { useEffect, useState, useRef } from "react";
import axios from "../../lib/axios";
import TextEditor from "../TextEditor";
import Item from "./Item";

const Subject = ({ id }) => {
  const [title, setTitle] = useState();
  const [cvId, setCvId] = useState();
  const [offsets, setOffsets] = useState([]);
  console.log(offsets)

  const handleChange = (event) => {
    setTitle(event.target.value)
  }
  const handleBlur = async (field, value) => {
    await axios.put(`/api/subject/update-${field}/${id}`, {
      title: value,
    });
  };

  useEffect(() => {
    const getSubject = async () => {
      const res = await axios.get(`/api/subject/detail/${id}`);
      const subject = res.data.data;
      setTitle(subject.title);
      setCvId(subject.cvId);

      // Convert the offfset string to an array
      if (subject.offset !== null) {
        const fetchedOffsets = subject.offset.split(",");
        setOffsets(fetchedOffsets);
      }
    };
    getSubject();
  }, []);

  return (
    <div className="subject">
      <div className="subject-title-container">
        <input
          type="text"
          id="subject-title"
          className="subject-title"
          style={{ color: "rgb(63, 89, 168)" }}
          value={title}
          onChange={handleChange}
          onBlur={() =>
            handleBlur("title", title)
          }
        />
      </div>

      {offsets.map((offset) => {
        return (
          <Item
            key={offset}
            id={offset}
            // moveOffset={moveOffset}
          />
        );
      })}
    </div>
  );
};

export default Subject;

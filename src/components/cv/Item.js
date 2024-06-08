import React, { useEffect, useState, useRef } from "react";
import axios from "../../lib/axios";
import TextEditor from "../TextEditor";

const Item = ({ id }) => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [type, setType] = useState();
  const [cvId, setCvId] = useState();
  const [subjectId, setSubjectId] = useState();

  useEffect(() => {
    const getItem = async () => {
      const res = await axios.get(`/api/item/detail/${id}`);
      const item = res.data.data;
      setTitle(item.title);
      setContent(item.content);
      setType(item.type);
      setCvId(item.cvId);
      setSubjectId(item.subjectId);
    };
    getItem();
  }, []);

  console.log(type)
    if (type === 1) {
    return (
      <div className="item">
        <div className="item-title-container">
          {title && (
            <TextEditor data={title} id="item-title" className="item-title" />
          )}
        </div>

        <div className="item-content-container">
          {content && (
            <TextEditor
              data={content}
              id="item-content"
              className="item-content"
            />
          )}
        </div>
      </div>
    );
} else {
    return (
      <div className="item">
        <div className="item-content-container">
          {content && (
            <TextEditor
              data={content}
              id="item-content"
              className="item-content"
            />
          )}
        </div>
      </div>
    );
  }
};

export default Item;

import React, { useEffect, useState, useRef } from "react";
import axios from "../../lib/axios";
import TextEditor from "../TextEditor";

const Item = ({ id }) => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [type, setType] = useState();
  const [cvId, setCvId] = useState();
  const [subjectId, setSubjectId] = useState();

  const handleOnChangeTitle = (data) => {
    setTitle(data)
  }
  const handleBlurTitle = async (data) => {
    await axios.put(`/api/item/update-title/${id}`, {
      title: data,
    });
  }
  const handleOnChangeContent = (data) => {
    setContent(data)
  }
  const handleBlurContent = async (data) => {
    await axios.put(`/api/item/update-content/${id}`, {
      content: data,
    });
  }


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

    if (type === 1) {
    return (
      <div className="item">
        <div className="item-title-container">
          {title && (
            <TextEditor data={title} id="item-title" className="item-title" 
              handleOnChangeTitle={handleOnChangeTitle}
              handleBlurTitle={handleBlurTitle}
            />
          )}
        </div>

        <div className="item-content-container">
          {content && (
            <TextEditor
              data={content}
              id="item-content"
              className="item-content"
              handleOnChangeContent={handleOnChangeContent}
              handleBlurContent={handleBlurContent}
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
              handleOnChangeContent={handleOnChangeContent}
              handleBlurContent={handleBlurContent}
            />
          )}
        </div>
      </div>
    );
  }
};

export default Item;

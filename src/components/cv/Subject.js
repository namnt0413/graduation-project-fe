import React, { useEffect, useState, useRef } from "react";
import axios from "../../lib/axios";
import TextEditor from "../TextEditor";
import Item from "./Item";
import { Color } from "../../const/color";

const Subject = ({ id, moveOffsetSubject, addSubject, deleteSubject, themeColor, template }) => {
  const [title, setTitle] = useState();
  const [cvId, setCvId] = useState();
  const [offsets, setOffsets] = useState([]);
  const [items, setItems] = useState([]);
  const [showButtonsSubject, setShowButtonsSubject] = useState(false);
  const divRefSubject = useRef(null);

  useEffect(() => {
    const getSubject = async () => {
      const res = await axios.get(`/api/subject/detail/${id}`);
      const subject = res.data.data;
      setTitle(subject.title);
      setCvId(subject.c_v_id);
      setItems(subject.item);

      // Convert the offfset string to an array
      if (subject.offset !== null) {
        const fetchedOffsets = subject.offset.split(",");
        setOffsets(fetchedOffsets);
      }
    };
    getSubject();
  }, []);

  const handleOnClickSubject = (event) => {
    if (event.target.id === "subject-title") {
      setShowButtonsSubject(true)
    } else {
      setShowButtonsSubject(false)
    }
  }
  const handleClickOutside = (event) => {
    if (divRefSubject.current && !divRefSubject.current.contains(event.target)) {
      setShowButtonsSubject(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleBlur = async (field, value) => {
    await axios.put(`/api/subject/update-${field}/${id}`, {
      title: value,
    });
  };

  // handle move offset
  const moveOffset = (itemId, direction) => {
    const currentIndex = offsets.indexOf(itemId.toString());
    const targetIndex =
      direction === "up" ? currentIndex - 1 : currentIndex + 1;

    if (targetIndex >= 0 && targetIndex < offsets.length) {
      const newOffsets = [...offsets];
      [newOffsets[currentIndex], newOffsets[targetIndex]] = [
        newOffsets[targetIndex],
        newOffsets[currentIndex],
      ];
      setOffsets(newOffsets);

      // Send request to update offset on the backend
      const offsetString = newOffsets.join(",");
      axios
        .put(`/api/subject/update-offset/${id}`, { offset: offsetString })
        .then((response) => {
          console.log(response.data.message);
        })
        .catch((error) => {
          console.error("Error updating offset:", error);
        });
    }
  };
  //hnadle add item
  const addItem = (itemId) => {
    axios
      .post("/api/item/create", {
        title: "<p><b>Lorem ipsum</b><br></p>",
        content:
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
        c_v_id: cvId,
        subject_id: id,
      })
      .then((response) => {
        const newItem = response.data.item;
        // Tìm vị trí hiện tại của div có id đang được nhấn nút Add
        const currentIndex = offsets.indexOf(itemId.toString());
        // Tạo một mảng offsets mới với div mới được thêm vào ngay sau div hiện tại
        const newOffsets = [
          ...offsets.slice(0, currentIndex + 1),
          newItem.id.toString(),
          ...offsets.slice(currentIndex + 1),
        ];
        setItems([...items, newItem]);
        setOffsets(newOffsets);

        // Send request to update offset on the backend
        const offsetString = newOffsets.join(",");
        axios
          .put(`/api/subject/update-offset/${id}`, { offset: offsetString })
          .then((response) => {
            console.log(response.data.message);
          })
          .catch((error) => {
            console.error("Error updating offset:", error);
          });
      })
      .catch((error) => {
        console.error("Error adding new div:", error);
      });
  };
  //handle delete item
  const deleteItem = (itemId) => {
    axios
      .delete(`/api/item/delete/${itemId}`)
      .then((response) => {
        // Xóa div khỏi state 'divs' bằng cách lọc ra các div có id khác với id cần xóa
        setItems(items.filter((item) => item.id !== itemId));

        // Cập nhật lại offsets bằng cách lọc ra các offset có giá trị khác với id cần xóa
        const newOffsets = offsets.filter(
          (offset) => offset !== itemId.toString()
        );
        setOffsets(newOffsets);

        // Chuyển đổi mảng offsets thành chuỗi và gửi yêu cầu cập nhật offsets tới backend
        const offsetString = newOffsets.join(",");
        axios
          .put(`/api/subject/update-offset/${id}`, { offset: offsetString })
          .then((response) => {
            console.log(response.data.message);
          })
          .catch((error) => {
            console.error("Error updating offset:", error);
          });
      })
      .catch((error) => {
        console.error("Error deleting div:", error);
      });
  };

  const fileInputRef = useRef(null);
  const getTextWidth = (text, font) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
  };
  useEffect(() => {
    if (fileInputRef.current) {
      const textWidth = getTextWidth(title, '24px Arial'); // Use the actual font
      fileInputRef.current.style.width = `${textWidth + 25}px`; // 25px for padding
    }
  }, [title]);

  return (
    <div className="subject"
      ref={divRefSubject}
      onClick={handleOnClickSubject}
    >
      <div className="subject-title-container"
        style={{ borderBottomColor: Color[themeColor] }}
      >
        {template === 4 ?
          <input
            type="text"
            id="subject-title"
            className="subject-title"
            style={{ backgroundColor: Color[themeColor], width: title ? `${getTextWidth(title, '24px Arial') + 25}px` : 'auto' }}
            value={title}
            onChange={handleChange}
            onBlur={() => handleBlur("title", title)}
            ref={fileInputRef}
          />
          :
          <input
            type="text"
            id="subject-title"
            className="subject-title"
            style={{ color: Color[themeColor] }}
            value={title}
            onChange={handleChange}
            onBlur={() => handleBlur("title", title)}
          />
        }

        {showButtonsSubject && (
          <>
            <div className="move-add-bar">
              <button className="offset-button" onClick={() => moveOffsetSubject(id, 'up')}><i class="fa-solid fa-arrow-up"></i></button>
              <button className="offset-button" onClick={() => addSubject(id)}><i class="fa-solid fa-plus"></i></button>
              <button className="offset-button" onClick={() => moveOffsetSubject(id, 'down')}><i class="fa-solid fa-arrow-down"></i></button>
            </div>
            <div className="delete-bar">
              <button className="delete-button" onClick={() => deleteSubject(id)}><i class="fa-solid fa-trash"></i></button>
            </div>
          </>
        )}
      </div>

      {offsets.map((offset) => {
        return (
          <Item
            key={offset}
            id={offset}
            moveOffset={moveOffset}
            addItem={addItem}
            deleteItem={deleteItem}
          />
        );
      })}
    </div>
  );
};

export default Subject;

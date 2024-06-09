  import React, { useEffect, useState, useRef } from "react";
  import axios from "../../lib/axios";
  import TextEditor from "../TextEditor";
  import Item from "./Item";

  const Subject = ({ id }) => {
    const [title, setTitle] = useState();
    const [cvId, setCvId] = useState();
    const [offsets, setOffsets] = useState([]);
    const [items, setItems] = useState([]);

    const handleChange = (event) => {
      setTitle(event.target.value);
    };
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
            onBlur={() => handleBlur("title", title)}
          />
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

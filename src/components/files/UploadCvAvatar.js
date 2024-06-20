import React, { useState, useRef } from 'react';
import { storage } from '../../firebase';
import axios from '../../lib/axios';
import { Input } from 'antd'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import "../../styles/components/files/UploadCvAvatar.css"

const UploadCVAvatar = ({ avatar, setAvatar, cvId, toggleAvatarVisibility, isShowingAvatar }) => {
    const [image, setImage] = useState(null);
    const [showUploadOptions, setShowUploadOptions] = useState(false);
    const [downloadURL, setDownloadURL] = useState('')
    const [isUploading, setIsUploading] = useState(false)
    const [progressUpload, setProgressUpload] = useState(0)
    const inputRef = useRef(null);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            // set lai avatar
            setImage(image);
            // xu ly upload firebase , luu vao db
            handleUpload(image)
        }
    };

    const handleUpload = (image) => {
        const name = image.name
        const storageRef = ref(storage, `Image/${name}`)
        const uploadTask = uploadBytesResumable(storageRef, image)
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100

                setProgressUpload(progress) // to show progress upload

                switch (snapshot.state) {
                    case "paused":
                        console.log('Upload is paused')
                        break
                    case "running":
                        console.log('Upload is running')
                        break
                }
            },
            (error) => {
                console.log(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((avatar) => {
                    setAvatar(avatar);
                    saveToDatabase(avatar);
                    setShowUploadOptions(false); // Ẩn tùy chọn sau khi upload xong
                })
            },
        )
    }

    const saveToDatabase = async (avatar) => {
        await axios.put(`/api/cv/update-avatar/${cvId}`, {
            avatar: avatar,
        });
    };

    const handleMouseEnter = () => {
        setShowUploadOptions(true);
      };
    
      const handleMouseLeave = () => {
          setShowUploadOptions(false);
      };
    
    return (
        <div
            tabIndex="0"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ position: 'relative', display: 'inline-block' }}
            ref={inputRef}
        >
            {avatar && isShowingAvatar && <img src={avatar} alt="Avatar" />}
            {!isShowingAvatar && <div className="blank-avatar"></div>}
            {showUploadOptions && (
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(255, 255, 255, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Input
                        id={"CV" + cvId}
                        type="file"
                        placeholder="Select file to upload"
                        onChange={handleChange}
                        style={{ display: "none" }}
                    />
                    <label htmlFor={"CV" + cvId} className="upload-avatar-btn">
                        <i class="fa-solid fa-cloud-arrow-up"></i> Tải ảnh lên
                    </label>
                    <label className="toggle-avatar-víibility" onClick={toggleAvatarVisibility}>
                        <i class="fa fa-eye"></i> Hiển thị avatar
                    </label>
                </div>
            )}
        </div>
    );
};

export default UploadCVAvatar;

import { Button, Card, Input, List, message, Image, Progress } from 'antd'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import React, { useState } from 'react'
import { storage } from '../../firebase'

const UploadFile = () => {
  const [file, setFile] = useState()
  const [downloadURL, setDownloadURL] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const [progressUpload, setProgressUpload] = useState(0)

  const handleSelectedFile = (files) => {
    if (files && files[0].size < 10000000) {
      setFile(files[0])

      console.log(files[0])
    } else {
      message.error('File size to large')
    }
  }

  const handleUploadFile = () => {
    if (file) {
      const name = file.name
      const storageRef = ref(storage, `Image/${name}`)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100

          setProgressUpload(progress) // to show progress upload

          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
          }
        },
        (error) => {
          message.error(error.message)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            //url is download url of file
            setDownloadURL(url)
          })
        },
      )
    } else {
      message.error('File not found')
    }
  }

  const handleRemoveFile = () => setFile(undefined)

  return (
    <div className="container mt-5">
      <div className="col-lg-8 offset-lg-2">
        <Input
          type="file"
          placeholder="Select file to upload"
          onChange={(files) => handleSelectedFile(files.target.files)}
        />

        <div className="mt-5">
          <Card>
            {file && (
              <>
                <List.Item
                  extra={[
                    <Button
                      key="btnRemoveFile"
                      onClick={handleRemoveFile}
                      type="text"
                      icon={<i className="fas fa-times"></i>}
                    />,
                  ]}
                >
                  <List.Item.Meta
                    title={file.name}
                    description={`Size: ${file.size}`}
                  />
                </List.Item>

                <div className="text-right mt-3">
                  <Button
                    loading={isUploading}
                    type="primary"
                    onClick={handleUploadFile}
                  >
                    Upload CV
                  </Button>

                  <Progress percent={progressUpload} />
                </div>
              </>
            )}

            {downloadURL && (
              <>
                <Image
                  src={downloadURL}
                  alt={downloadURL}
                  style={{ width: 200, height: 200, objectFit: 'cover' }}
                />
                <p>{downloadURL}</p>
              </>
            )}
            <p></p>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default UploadFile

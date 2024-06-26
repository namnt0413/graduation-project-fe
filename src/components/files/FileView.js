import React, { useState, useEffect } from 'react'
import { Button } from "./Button";
import { ModalPdf } from "./ModalPdf";
import {getDownloadURL, ref} from 'firebase/storage'
import { storage } from '../../firebase';

const  FileView = (props) => {

  const [modal, setModal]=useState(false);
  const [resume, setResume]=useState(null);
  const [fileName, setFileName]=useState(props.fileName);

  useEffect(()=>{
    getDownloadURL(ref(storage,`CV/${fileName}`)).then((url)=>{
      setResume(url);
    })
  },[])

  return (
    <div className="view-cv">
      <Button setModal={setModal}/>
      {modal===true&&(
        <ModalPdf setModal={setModal} resume={resume}/>
      )}
    </div>
  );
}

export default FileView;

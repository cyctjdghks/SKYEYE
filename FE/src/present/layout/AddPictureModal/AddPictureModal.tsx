import * as style from "@layout/AddPictureModal/AddPictureModal.style";
import React, { useState } from "react";

const AddPictureModal = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const getImages = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...Array.from(files)]);
  };

  const sendImages = () => {
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("files", selectedFiles[i]);
    }
    console.log(formData);
  };

  return (
    <style.Wrapper>
      <style.SelectedImages>
        <style.ImageWrapper></style.ImageWrapper>
      </style.SelectedImages>
    </style.Wrapper>
  );
};

export default AddPictureModal;

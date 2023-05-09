import * as style from "@layout/AddPicture/AddPicture.style";
import React, { memo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { toastListState } from "@src/store/toast";
import PrimaryButton from "@src/present/common/Button/PrimaryButton";


const AddPicture = () => {
  const navigate = useNavigate();
  
  const [toastList, setToastList] = useRecoilState(toastListState);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const getImages = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...Array.from(files)]);
    const successAdminToast = {
      type: "Success",
      sentence: "이미지가 정상적으로 저장되었습니다.",
    };
    setToastList({ list: [...toastList.list, successAdminToast] });
  };

  const sendImages = () => {
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("files", selectedFiles[i]);
    }
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
  };

  const deleteImage = (index: number) => {
    const newFiles = selectedFiles.filter((file, idx) => idx !== index);
    setSelectedFiles(newFiles);
    const successAdminToast = {
      type: "Info",
      sentence: "사진이 삭제되었습니다.",
    };
    setToastList({ list: [...toastList.list, successAdminToast] });
  };

  // Prevent Go back
  const preventGoBack = () => {
    history.pushState(null, "", location.href);
    alert("종료하기 버튼을 눌러주세요");
  };

  // Prevent Reload
  const preventClose = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = "";
  };

  useEffect(() => {
    (() => {
      history.pushState(null, "", location.href);
      window.addEventListener("popstate", preventGoBack);

      window.addEventListener("beforeunload", preventClose);
    })();

    return () => {
      window.removeEventListener("popstate", preventGoBack);

      window.removeEventListener("beforeunload", preventClose);
    };
  }, []);

  return (
    <style.Wrapper>
      <style.SelectedImages>
        {selectedFiles.map((file, idx) => (
          <style.ImageWrapper key={idx} onClick={() => deleteImage(idx)}>
            <img src={URL.createObjectURL(file)} alt={file.name} />
            <p>{file.name}</p>
          </style.ImageWrapper>
        ))}
      </style.SelectedImages>
      <style.BottomBox>
        <style.SaveLabel htmlFor="file">사진 추가</style.SaveLabel>
        <style.SaveInput
          type="file"
          id="file"
          name="files"
          accept="image/png, image/jpg, image/jpeg"
          onChange={getImages}
          multiple
        />
        <PrimaryButton
          content={"업로드 하기"}
          handler={() => {
            sendImages();
          }}
        />
      </style.BottomBox>
    </style.Wrapper>
  );
};

export default memo(AddPicture);

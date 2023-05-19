import React, { memo, useEffect, useState } from "react";
import * as style from "./ModalPictureDetail.style";
import { useRecoilState } from "recoil";
import { toastListState } from "@src/store/toast";
import axios from "axios";
import { UpdateCrack, DeleteCrack } from "@src/action/hooks/Crack";

import { urls } from "@src/constant/values";
import PrimeTitle from "@src/present/common/PrimeTitle/PrimeTitle";
import { Picture } from "@src/types/FlightInfo";
import Download from "@assets/button/download.png";
import Input from "@present/Input/Input";
import AdminDeleteBtn from "@src/present/component/Adminpage/AdminDeleteButton";
import AdminPrimaryButton from "@src/present/component/Adminpage/AdminPrimaryButton";

type ModalPictureDetailProps = {
  pictureInfo: Picture;
  onClose: () => void;
};

const ModalPictureDetail = ({
  pictureInfo,
  onClose,
}: ModalPictureDetailProps) => {
  const [aboutPicture, setAboutPicture] = useState<Picture>({
    originalFileName: "",
    storedFileName: "",
    fileSize: 0,
    createTime: "",
    updateTime: "",
    crackType: pictureInfo.crackType,
    crackId: pictureInfo.crackId,
  });

  // download
  const [toastList, setToastList] = useRecoilState(toastListState);

  const downloadPicture = (img: string) => {
    axios({
      url: `https://k8d202.p.ssafy.io/be/${img}`,
      method: "GET",
      responseType: "blob", // important
    })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${img.slice(7)}.jpg`); // or any other extension
        document.body.appendChild(link);
        link.click();

        const downloadImageToast = {
          type: "Success",
          sentence: "사진이 다운로드 되었습니다.",
        };
        setToastList({ list: [...toastList.list, downloadImageToast] });
      })
      .catch((error) => {
        console.error("Download error: ", error);
        const failDownLoadIToast = {
          type: "Error",
          sentence: "다운로드에 실패했습니다.",
        };
        setToastList({ list: [...toastList.list, failDownLoadIToast] });
      });
  };

  useEffect(() => {
    setAboutPicture({ ...pictureInfo });
  }, [pictureInfo]);

  // ImageUrl
  const imgUrl = `${urls.API}/${pictureInfo.storedFileName}`;

  //   Error
  const nullError = !!aboutPicture.crackType;
  const submitError = nullError;

  //   Handler
  const changePicture = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    setAboutPicture(() => {
      return { ...aboutPicture, [type]: e.target.value };
    });
  };

  const modifyHandler = () => {
    UpdateCrack(aboutPicture.crackId, aboutPicture.crackType).then((res) => {
      if (res.isSuccess) {
        onClose();
        const editCrackToast = {
          type: "Success",
          sentence: "수정을 성공했습니다.",
        };
        setToastList({ list: [...toastList.list, editCrackToast] });
      } else {
        const failEditCrackToast = {
          type: "Error",
          sentence: "수정에 실패했습니다.",
        };
        setToastList({ list: [...toastList.list, failEditCrackToast] });
      }
    });
  };

  const deleteHandler = () => {
    DeleteCrack(aboutPicture.crackId).then((res) => {
      if (res.isSuccess) {
        onClose();
        const deleteCrackToast = {
          type: "Success",
          sentence: "삭제를 성공했습니다.",
        };
        setToastList({ list: [...toastList.list, deleteCrackToast] });
      } else {
        const failDeleteCrackToast = {
          type: "Error",
          sentence: "삭제를 실패했습니다.",
        };
        setToastList({ list: [...toastList.list, failDeleteCrackToast] });
      }
    });
  };

  return (
    <style.Container>
      <PrimeTitle content="상세정보" />
      <style.Layout>
        <img src={imgUrl} alt="" />
        <div>
          <style.InfoCompo>
            <style.SubCompo>
              <div>파일ID</div>
              <Input
                value={aboutPicture.crackId}
                handler={(e) => changePicture(e, "crackId")}
                readonly={true}
              />
            </style.SubCompo>
            <style.SubCompo>
              <div>균열 유형</div>
              <Input
                value={aboutPicture.crackType}
                handler={(e) => changePicture(e, "crackType")}
              />
            </style.SubCompo>
            <style.SubCompo>
              <div>업로드 일자</div>
              <div>{pictureInfo.createTime}</div>
            </style.SubCompo>
            <style.SubCompo>
              <div>다운로드</div>
              <button
                onClick={() => downloadPicture(pictureInfo.storedFileName)}
              >
                <div>저장하기</div>
                <img src={Download} alt="download" />
              </button>
            </style.SubCompo>
          </style.InfoCompo>

          <style.ModiCompo>
            <AdminDeleteBtn content={"삭제 하기"} handler={deleteHandler} />
            <AdminPrimaryButton
              content={"수정 하기"}
              isArrow={true}
              handler={modifyHandler}
              disabled={!submitError}
            />
          </style.ModiCompo>
        </div>
      </style.Layout>
    </style.Container>
  );
};

export default memo(ModalPictureDetail);

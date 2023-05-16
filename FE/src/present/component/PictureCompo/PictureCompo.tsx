import React, { memo } from "react";
import * as Style from "./PictureCompo.style";
import { DownLoadCrackImage } from "@src/action/hooks/Crack";
import { useRecoilState } from "recoil";
import { toastListState } from "@src/store/toast";
import axios from "axios";

import { Picture } from "@src/types/FlightInfo";

type PictureCompoProps = {
  item: Picture;
};

const PictureCompo = ({ item }: PictureCompoProps) => {
  const [toastList, setToastList] = useRecoilState(toastListState);

  const downloadPicture = (img: string) => {
    axios({
      url: `https://k8d202.p.ssafy.io/be/${img}`,
      method: 'GET',
      responseType: 'blob', // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'image.jpg'); // or any other extension
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

  return (
    <Style.ImgContainer
      img={item.storedFileName as string}
      onClick={() => downloadPicture(item.storedFileName as string)}
    >
      <Style.InfoContainer>
        <div>{item.createTime}</div>
        <div>{item.originalFileName}</div>
      </Style.InfoContainer>
    </Style.ImgContainer>
  );
};

export default memo(PictureCompo);

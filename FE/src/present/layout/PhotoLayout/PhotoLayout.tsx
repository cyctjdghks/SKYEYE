import React, { memo, useState, useEffect } from "react";
import * as Style from "./PhotoLayout.style";
import SubTitle from "@src/present/common/SubTitle/SubTitle";
import { Picture } from "@src/types/FlightInfo";
import PictureCompo from "@src/present/component/PictureCompo/PictureCompo";
import Modal from "@common/Modal/Modal";
import ModalPictureDetail from "@layout/ModalPictureDetail/ModalPictureDetail";
import { useRecoilState, useRecoilValue } from "recoil";
import { authState } from "@src/store/auth";
import { getPhotoList } from "@src/action/api/Pictures";
import { photoListState } from "@src/store/crack";

type PhotoLayoutProps = {
  folder: any;
  crack: any;
};

const PhotoLayout = ({ folder, crack }: PhotoLayoutProps) => {
  //Modal
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [pictureInfo, setPictureInfo] = useState<Picture>({
    originalFileName: "",
    storedFileName: "",
    fileSize: 0,
    createTime: "",
    updateTime: "",
    crackType: "",
    crackId: "",
  });
  const [photoList, setPhotoList] = useRecoilState(photoListState);

  const userId = useRecoilValue(authState).user.userId;

  const contentLength = photoList.length === 0 ? true : false;
  const guidence = <SubTitle content="분류된 사진이 없습니다" />;

  const modalHandler = (item: Picture) => {
    setIsOpen(true);
    setPictureInfo({ ...item });
  };

  useEffect(() => {
    if (crack !== null) {
      getPhotoList(userId, folder, crack).then((res) => {
        if (res.isSuccess) {
          setPhotoList([...res.result]);
        }
      });
    }
  }, [isOpen]);

  const Images = photoList.map((elem, idx) => {
    return <PictureCompo item={elem} key={idx} handler={modalHandler} />;
  });

  return (
    <Style.Container contentLength={contentLength}>
      {contentLength ? guidence : <>{Images}</>}
      {isOpen && (
        <Modal
          onClose={() => {
            setIsOpen(false);
          }}
          width="50vw"
          height="75vh"
          title="상세보기"
          content={
            <ModalPictureDetail
              pictureInfo={pictureInfo}
              onClose={() => {
                setIsOpen(false);
              }}
            />
          }
        />
      )}
    </Style.Container>
  );
};

export default memo(PhotoLayout);

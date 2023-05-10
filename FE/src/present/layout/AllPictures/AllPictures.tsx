import React, { useState, useEffect, memo } from "react";
import * as Style from "./Pictures.style";
import ButtonLayout from "@src/present/layout/ButtonLayout/ButtonLayout";
import SubTitle from "@src/present/common/SubTitle/SubTitle";
import { getCrackList } from "@src/action/api/Crack";
import { useLocation } from "react-router-dom";
import { getFolders, getPhotoList } from "@src/action/api/Pictures";
import PhotoLayout from "../PhotoLayout/PhotoLayout";
import { Folder } from "@src/types/FlightInfo";

const AllPictures = () => {
  const location = useLocation().state;
  const [folder, setFolder] = useState<number | null>(null);
  const [crack, setCrack] = useState<string | null>(null);
  
  // List
  const [folderList, setFolderList] = useState<Array<Folder>>([]);
  const [crackList, setCrackList] = useState([]);
  const [photoList, setPhotoList] = useState([]);

  useEffect(() => {
    if (location !== null) {
      const dayOfWeek = {
        Jan: "01",
        Feb: "02",
        Mar: "03",
        Apr: "04",
        May: "05",
        Jun: "06",
        Jul: "07",
        Aug: "08",
        Sep: "09",
        Oct: "10",
        Nov: "11",
        Dec: "12",
      };
      getFolders(
        "jhp1276",
        [location[3], dayOfWeek[location[1]], location[2]].join("-")
      ).then((res) => {
        if (res.isSuccess) {
          setFolderList([...res.result]);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (folder !== null) {
      getCrackList(folder).then((res) => {
        if (res.isSuccess) {
          const keys = Object.keys(res.result).map((elem) => {
            return { crackType: elem, cnt: res.result[elem] };
          });

          setCrackList([...keys]);
        }
      });
    }
  }, [folder, crack]);

  useEffect(()=>{
    if (crack !== null) {
      getPhotoList("jhp1276", folder, 'concrete').then((res) => {
        if (res.isSuccess) {
          setPhotoList([...res.result])
        }
      })
    }
  }, [crack])

  // Handler
  const folderHandler = (idx: number) => {
    setFolder(folderList[idx].folderId);
  };

  const crackHandler = (type: string) => {
    setCrack(type);
  };

  // Sentence
  const guidence = () => {
    if (folder === null) {
      return (
        <>
          폴더를
          <br />
          선택해주세요
        </>
      );
    } else if (crack === null) {
      return (
        <>
          손상 유형을
          <br />
          선택해주세요
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <Style.Layout>
      <div>
        <SubTitle content="폴더명" />
        <ButtonLayout
          list={folderList}
          type={"folder"}
          selected={folder}
          handler={folderHandler}
        />
      </div>
      {folder !== null && (
        <div>
          <SubTitle content="균열 유형" />
          <ButtonLayout
            list={crackList}
            type={"crack"}
            selected={crack}
            handler={crackHandler}
          />
        </div>
      )}

      {crack !== null && (
        <div>
          <SubTitle content="사진" />
          <PhotoLayout photoList={photoList}/>
        </div>
      )}

      <Style.Guidence>{guidence()}</Style.Guidence>
    </Style.Layout>
  );
};

export default memo(AllPictures);

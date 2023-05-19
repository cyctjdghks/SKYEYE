import React, { memo, useEffect, useState } from "react";
import { FolderBtn } from "./Button.style";
import Arrow from "@assets/button/arrow.png";
import { Folder } from "@src/types/FlightInfo";
import { getUserInfo } from "@src/action/api/User";

type FolderButtonProps = {
  content: Folder;
  handler: any;
  isSelected: boolean;
};

const FolderButton = ({
  content,
  handler,
  isSelected,
}: FolderButtonProps) => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    getUserInfo(content.userId).then((res) => {
      if (res.isSuccess) setUserName(res.result.userName);
    });
  }, [content]);

  const subContent = (
    <div>
      <div>
        <span>사진 수</span>
        <span>{content.countImage}장</span>
      </div>
      <div>
        <span>마지막 업로드</span>
        <span>{content.updateTime}</span>
      </div>
      <div>
        <span>설명</span>
        <span>{content.folderMemo}</span>
      </div>
    </div>
  );

  return (
    <FolderBtn className={isSelected && "Main"} onClick={handler}>
      <div>
        {content.folderName}
        {isSelected && <img src={Arrow} alt={"select Crack type"} />}
      </div>
      {isSelected && subContent}
    </FolderBtn>
  );
};

export default memo(FolderButton);

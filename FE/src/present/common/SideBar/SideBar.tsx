import * as style from "@common/SideBar/SideBar.style";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ReactComponent as ProfileIcon } from "@assets/sidebar/profile.svg";
import { ReactComponent as VideoIcon } from "@assets/sidebar/video.svg";
import { ReactComponent as ImageIcon } from "@assets/sidebar/image.svg";
import { ReactComponent as MapIcon } from "@assets/sidebar/map.svg";
import { useRecoilValue } from "recoil";
import { authState } from "@src/store/auth";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: Function;
};

const SideBar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const userName = useRecoilValue(authState).user;
  const [selected, setSelected] = useState<number>(0);
  const location = useLocation();
  // selected 판별
  const changeOpen = () => {
    setIsOpen(!isOpen);
  };

  const changeSelect = (idx: number) => {
    setSelected(idx);
  };

  // menuitem 설정
  const menu = [
    {
      image: <VideoIcon />,
      barText: "사진 업로드 하기",
    },
    {
      image: <ImageIcon />,
      barText: "저장된 사진 보기",
    },
    {
      image: <MapIcon />,
      barText: "비행 가능 구역 보기",
    },
  ];

  const menuItem = menu.map((elem, idx) => {
    const isSelected = idx === selected ? true : false;

    return (
      <style.MenuItem
        selected={isSelected}
        isOpen={isOpen}
        key={elem.barText}
        onClick={() => changeSelect(idx)}
      >
        {elem.image}
        <style.SideBarText isOpen={isOpen} selected={isSelected}>{elem.barText}</style.SideBarText>
      </style.MenuItem>
    );
  });

  return (
    <style.Wrapper isOpen={isOpen}>
      {/* Open Button */}
      <style.OpenButton onClick={changeOpen} isOpen={isOpen}></style.OpenButton>

      {/* Profile */}
      <style.ProfileBox>
        <ProfileIcon />
        <style.ProfileText1 isOpen={isOpen}>
          {userName.userName}
        </style.ProfileText1>
        <style.ProfileText2 isOpen={isOpen}>
          {userName.userPosition}
        </style.ProfileText2>
      </style.ProfileBox>
      <style.hrLine />
      {/* MenuItem */}
      <style.Body>{menuItem}</style.Body>
    </style.Wrapper>
  );
};

export default SideBar;

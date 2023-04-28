import * as style from "@common/SideBar/SideBar.style";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import { ReactComponent as ProfileIcon } from "@assets/sidebar/profile.svg";
import { ReactComponent as VideoIcon } from "@assets/sidebar/video.svg";
import { ReactComponent as ImageIcon } from "@assets/sidebar/image.svg";
import { ReactComponent as MapIcon } from "@assets/sidebar/map.svg";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
  const menuItemByPathname =
    location.pathname === "/drone"
      ? {
          image: <VideoIcon />,
          barText: "드론 영상 보기",
        }
      : {
          image: <ImageIcon />,
          barText: "저장된 사진 보기",
        };

  const menu = [
    menuItemByPathname,
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
        <style.SideBarText isOpen={isOpen}>{elem.barText}</style.SideBarText>
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
        <style.ProfileText1 isOpen={isOpen}>박재현</style.ProfileText1>
        <style.ProfileText2 isOpen={isOpen}>구조기술자</style.ProfileText2>
      </style.ProfileBox>

      {/* MenuItem */}
      <style.Body>{menuItem}</style.Body>
    </style.Wrapper>
  );
};

export default SideBar;

import * as style from "@common/SideBar/SideBar.style";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { ReactComponent as ProfileIcon } from "@assets/sidebar/profile.svg";
import { ReactComponent as UploadIcon } from "@assets/sidebar/upload.svg";
import { ReactComponent as ImageIcon } from "@assets/sidebar/image.svg";
import { ReactComponent as MapIcon } from "@assets/sidebar/map.svg";
import { ReactComponent as LogoutIcon } from "@assets/sidebar/logout.svg";
import { ReactComponent as LeftArrow } from "@assets/sidebar/leftArrow.svg";
import { ReactComponent as RightArrow } from "@assets/sidebar/rightArrow.svg";
import { useRecoilState, useRecoilValue } from "recoil";
import { authState } from "@src/store/auth";
import { toastListState } from "@src/store/toast";

import Weather from "@src/present/component/SideBar/Weather";
import { UserLogout } from "@src/action/hooks/User";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: Function;
};

const SideBar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const userName = useRecoilValue(authState).user;
  const [selected, setSelected] = useState<number>(
    location.pathname.includes("upload")
      ? 0
      : location.pathname.includes("picture")
      ? 1
      : 2
  );
  const [user, setUser] = useRecoilState(authState);
  const [toastList, setToastList] = useRecoilState(toastListState);

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
      image: <UploadIcon />,
      barText: "사진 업로드 하기",
      toNavigate: "/upload",
    },
    {
      image: <ImageIcon />,
      barText: "저장된 사진 보기",
      toNavigate: "/picture",
    },
    {
      image: <MapIcon />,
      barText: "비행 가능 구역 보기",
      toNavigate: "/flightinfo",
    },
  ];

  const menuItem = menu.map((elem, idx) => {
    const isSelected = idx === selected ? true : false;

    return (
      <style.MenuItem
        selected={isSelected}
        isOpen={isOpen}
        key={elem.barText}
        onClick={() => {
          navigate(elem.toNavigate);
          changeSelect(idx);
        }}
      >
        {elem.image}
        <style.SideBarText isOpen={isOpen} selected={isSelected}>
          {elem.barText}
        </style.SideBarText>
      </style.MenuItem>
    );
  });

  const logoutSignal = () => {
    UserLogout()
      .then((res) => {
        // console.log(res);
        if (res.isSuccess) {
          Cookies.remove("AuthorizationToken");
        }
        setUser({
          isAuthenticated: false,
          user: null,
          userType: 0,
        });
        navigate("/");
      })
      .catch((err) => {
        const errorLogoutToast = {
          type: "Error",
          sentence: "로그아웃에 실패했습니다.",
        };
        setToastList({ list: [...toastList.list, errorLogoutToast] });
      });
  };

  return (
    <style.Wrapper isOpen={isOpen}>
      {/* Open Button */}
      <style.OpenButton onClick={changeOpen} isOpen={isOpen}>
        {isOpen ? <LeftArrow /> : <RightArrow />}{" "}
      </style.OpenButton>
      {/* Profile */}
      <style.ProfileBox>
        <ProfileIcon />
        <style.ProfileText1 isOpen={isOpen}>
          {userName?.userName}
        </style.ProfileText1>
        <style.ProfileText2 isOpen={isOpen}>
          {userName?.userPosition}
        </style.ProfileText2>
      </style.ProfileBox>
      <style.hrLine />
      <style.Body>{menuItem}</style.Body>
      <Weather isOpen={isOpen} />
      <style.LogoutBox>
        <style.Logout
          isOpen={isOpen}
          onClick={() => {
            logoutSignal();
          }}
        >
          <LogoutIcon />
          <style.LogoutText isOpen={isOpen}>로그아웃</style.LogoutText>
        </style.Logout>
      </style.LogoutBox>
    </style.Wrapper>
  );
};

export default SideBar;

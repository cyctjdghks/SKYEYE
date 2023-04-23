import * as style from "@common/SideBar/SideBar.style"
import { useState } from "react";

const SideBar = () =>{
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const changeOpen = () =>{
    setIsOpen(!isOpen)
  }
  const [selected, setSelected] = useState<boolean>(false)
  

  return(
    <style.Wrapper isOpen={isOpen}>
      <style.OpenButton onClick={changeOpen} isOpen={isOpen}></style.OpenButton>
      <style.ProfileBox>
        <style.StyledProfileIcon></style.StyledProfileIcon>
        <style.ProfileText1 isOpen={isOpen}>박재현</style.ProfileText1>
        <style.ProfileText2 isOpen={isOpen}>구조기술자</style.ProfileText2>
      </style.ProfileBox>
      <style.Body>
        <style.BodyContent selected={selected} isOpen={isOpen}>
          <style.StyledImageIcon></style.StyledImageIcon>
          <style.SideBarText isOpen={isOpen}>저장된 사진 보기</style.SideBarText>
        </style.BodyContent>
        <style.BodyContent selected={selected} isOpen={isOpen}>
          <style.StyledMapIcon></style.StyledMapIcon>
          <style.SideBarText isOpen={isOpen}>비행 가능 구역 보기</style.SideBarText>
        </style.BodyContent>
      </style.Body>
    </style.Wrapper>
  )
}

export default SideBar;
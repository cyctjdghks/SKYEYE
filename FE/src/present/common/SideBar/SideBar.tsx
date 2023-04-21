import * as style from "@common/SideBar/SideBar.style"
import { useState } from "react";

const SideBar = () =>{
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const changeOpen = () =>{
    setIsOpen(!isOpen)
  }
  
  return(
    <style.Wrapper isOpen={isOpen}>
      <style.OpenButton onClick={changeOpen} isOpen={isOpen}></style.OpenButton>
      <style.ProfileBox>
        <style.StyledProfileIcon></style.StyledProfileIcon>
        <style.ProfileText1 isOpen={isOpen}>박재현</style.ProfileText1>
        <style.ProfileText2 isOpen={isOpen}>구조기술자</style.ProfileText2>
      </style.ProfileBox>
      <style.Drone>드론 영상 보기</style.Drone>
      <style.FlightInfo>비행 금지구역 보기</style.FlightInfo>
    </style.Wrapper>
  )
}

export default SideBar;
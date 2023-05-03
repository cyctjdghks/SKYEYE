import * as style from "@pages/NotFound/NotFound.style";
import { useNavigate } from "react-router-dom";
import logo from "@assets/main/logo.png"

const NotFound = () => {
  const navigate = useNavigate();
  const toHome = () => {
    navigate("/");
  };
  return (
    <style.Wrapper>
      <style.LogoImg src={logo}></style.LogoImg>
      <style.TextBox>
        <style.Text>404 Not Found</style.Text>
        <style.Text2>페이지가 없거나 주소가 이전했습니다.</style.Text2>
      </style.TextBox>
      <style.ToHomeBtn onClick={toHome}>홈으로</style.ToHomeBtn>
    </style.Wrapper>
  );
};

export default NotFound;

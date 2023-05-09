import styled from "@emotion/styled";
import { theme } from "@src/constant/theme";

export const Wrapper = styled.div`
  width: 100%;
`;

export const SelectedImages = styled.div`
  width: 80%;
  height: 70vh;
  background-color: ${theme.colors.greyscale.light2};
  border-radius: 8px;
`;

export const ImageWrapper = styled.div`
  width: 128px;
  height: 172px;
`;

export const CrackName = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 120%;
`;

export const CrackImage = styled.image`
  width: 128px;
  height: 128px;
  border-radius: 8px;

  &:hover: {
    background-color: ${theme.colors.greyscale.dark1};
  }
`;

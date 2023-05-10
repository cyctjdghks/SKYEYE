import styled from "@emotion/styled";
import { theme } from "@src/constant/theme";

export const Container = styled.div<{ contentLength: boolean }>`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 0.5rem;
  height: calc(100% - 6rem);
  align-items: ${(props) => (props.contentLength ? "center" : "flex-start")};
  justify-content: ${(props) =>
    props.contentLength ? "center" : "flex-start"};
  gap: 0.5rem;
  overflow: auto;

  ${theme.scroll}
`;

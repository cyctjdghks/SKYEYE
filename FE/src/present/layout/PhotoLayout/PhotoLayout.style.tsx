import styled from "@emotion/styled";

export const Container = styled.div<{ contentLength: boolean }>`
  display: flex;
  flex-wrap: wrap;
  width: 45vw;
  height: calc(100% - 6rem);
  align-items: ${(props) => (props.contentLength ? "center" : "flex-start")};
  justify-content: ${(props) =>
    props.contentLength ? "center" : "flex-start"};
`;

import styled from "@emotion/styled";

export const Container = styled.div`
  position: absolute;
  z-index: 9999;
  bottom: 1rem;
  right: 1rem;

  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
  align-items: flex-start;
  justify-content: flex-end;

  overflow: hidden;
`;

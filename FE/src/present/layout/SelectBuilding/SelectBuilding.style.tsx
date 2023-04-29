import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: calc(100% * 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & > *:nth-child(4) {
    margin-top: 1.5rem;
    width: 23rem;
    display: flex;
    justify-content: flex-end;
  }
`;

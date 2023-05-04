import styled from "@emotion/styled";

export const ModalContainer = styled.div`

  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & div:first-of-type {
    margin-bottom: 1.5rem;
  }

  & button {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
  }
`;

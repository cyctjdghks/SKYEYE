import styled from "@emotion/styled";

export const Button = styled.button`
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  background-color: #fa9f98;
  border-radius: 10px;
  color: white;
  font-style: italic;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    background-color: #fac2be;
  }
`;

export const AppWrap = styled.div`
  height: 1000px;
  text-align: center;
  margin: 50px auto;
`;

import styled from "@emotion/styled";
import { theme } from "@src/constant/theme";

type ContentBodyProps = {
  isOpen: boolean;
};

export const ContentBody = styled.div<ContentBodyProps>`
  --notOpenWidth: 100px;
  --openWidth: 400px;
  text-align: left;
  width: calc(
    100% - var(${(props) => (props.isOpen ? "--openWidth" : "--notOpenWidth")}) -
      3rem
  );
  height: calc(100vh - 3rem);
  position: relative;
  left: var(${(props) => (props.isOpen ? "--openWidth" : "--notOpenWidth")});
  padding: 1.5rem;
  transition: ${theme.trans};

  & > .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

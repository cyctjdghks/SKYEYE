import styled from "@emotion/styled";
import { theme } from "@src/constant/theme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    padding: 0 1.5rem 1rem 0;
    width: fit-content;
    height: calc(100% - 5rem);
    border-right: solid 2px ${theme.colors.greyscale.light1};
    overflow-y: auto;

    ${theme.scroll}

    & h2 {
        font-size: 1.2rem;
        color: ${theme.colors.greyscale.dark3};
        padding: 0;
        margin: 0;
    }
`
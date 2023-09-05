import styled from "@emotion/styled";

export const MainContainer = styled.main`
  ${({ theme }) => `
      width: 100%;
      ${theme.breakpoints.tabletS} {
        max-width: 600px;
      }
  `}
`;

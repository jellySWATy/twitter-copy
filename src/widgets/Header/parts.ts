import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  ${({ theme }) => `
      padding: 0 16px;
      width: 100%;
      ${theme.breakpoints.tabletS} {
        padding: 0 8px;
        width: 76px;
      }
      ${theme.breakpoints.tabletM} {
        width: 88px;
      }
      ${theme.breakpoints.tabletL} {
        width: 76px;
      }
      ${theme.breakpoints.desktopS} {
        width: 88px;
      }
      ${theme.breakpoints.desktopM} {
        width: 275px;
      }
  `}
`;

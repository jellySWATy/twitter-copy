import styled from "@emotion/styled";

export const SidebarContainer = styled.div`
  ${({ theme }) => `
    display: none;
    width: 100%;
    ${theme.breakpoints.tabletL} {
      display: block;
      max-width: 290px;
    }
    ${theme.breakpoints.desktopS} {
      max-width: 350px;
    }
`}
`;

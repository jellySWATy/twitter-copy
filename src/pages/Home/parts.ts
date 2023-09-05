import styled from "@emotion/styled";

export const PageContainer = styled.div`
  ${({ theme }) => `

    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    ${theme.breakpoints.tabletS} {
      flex-direction: row;
    }
    ${theme.breakpoints.tabletM} {
      max-width: 688px;
    }
    ${theme.breakpoints.tabletL} {
      max-width: 966px;
    }
    ${theme.breakpoints.desktopS} {
      max-width: 1038px;
    }
    ${theme.breakpoints.desktopM} {
      max-width: 1225px;
    }
`}
`;

import { Box, styled } from "@mui/material";

export const StyledContainer = styled(Box)(({ theme }) => {
  return {
    height: "calc(100vh - 126px)",
    [theme.breakpoints.up("md")]: {
      "& .ag-root-wrapper": {
        borderLeft: "none !important",
        borderRadius: "0 !important",
      },
    },
    "& .ag-root ::-webkit-scrollbar": {
      width: 12,
    },
    "& .ag-root ::-webkit-scrollbar-track": {
      backgroundColor: theme.palette.grey[300],
    },
    "& .ag-root ::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.primary.main,
      borderRadius: 6,
      border: `2px solid ${theme.palette.grey[500]}`,
    },
    "& .ag-root ::-webkit-scrollbar-thumb:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  };
});

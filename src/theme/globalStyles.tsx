// @mui
import { GlobalStyles as MUIGlobalStyles } from "@mui/material";
import palette from "./foundations/palette";

// ----------------------------------------------------------------------

const GlobalStyles = () => {
  const inputGlobalStyles = (
    <MUIGlobalStyles
      styles={{
        "*": {
          boxSizing: "border-box",
        },
        html: {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
          WebkitOverflowScrolling: "touch",
        },
        body: {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
          backgroundColor: palette.grey[200],
        },
        "#root": {
          width: "100%",
          height: "100%",
        },
        a: {
          textDecoration: "none",
          color: palette.common.black,
        },
        input: {
          "&[type=number]": {
            MozAppearance: "textfield",
            "&::-webkit-outer-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
            "&::-webkit-inner-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
          },
        },
        img: {
          display: "block",
          maxWidth: "100%",
        },
        ul: {
          margin: 0,
          padding: 0,
        },

        // --- SWIPER ---
        ".swiper-pagination-bullet": {
          backgroundColor: `${palette.primary.main} !important`,
        },
        ".swiper-pagination-bullet-active": {
          backgroundColor: `${palette.primary.main} !important`,
        },
      }}
    />
  );

  return inputGlobalStyles;
};

export default GlobalStyles;
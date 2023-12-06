// @mui
import { GlobalStyles as MUIGlobalStyles, alpha } from "@mui/material";
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
          backgroundColor: palette.common.white,
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

        // --- AG Grid ---
        ".ag-theme-quartz": {
          "--ag-background-color": palette.common.white + "!important",
          "--ag-header-foreground-color": palette.common.black + "!important",
          "--ag-quartz-primary-color": palette.primary.main + "!important",
          "--ag-header-background-color":
            alpha(palette.primary.light, 0.3) + "!important",
          "--ag-header-cell-hover-background-color":
            alpha(palette.primary.light, 0.2) + "!important",
          "--ag-header-cell-moving-background-color":
            alpha(palette.primary.light, 0.2) + "!important",
          "--ag-selected-row-background-color":
            alpha(palette.primary.light, 0.08) + "!important",
          "--ag-range-selection-border-color":
            palette.primary.main + "!important",
          "--ag-range-selection-border-style": "solid" + "!important",
          "--ag-range-selection-background-color":
            palette.primary.main + "!important",
          "--ag-control-panel-background-color":
            alpha(palette.primary.light, 0.3) + "!important",
          "--ag-side-bar-panel-width": "250px" + "!important",
          "--ag-side-button-selected-background-color":
            alpha(palette.primary.light, 0.3) + "!important",
          "--ag-selected-tab-underline-width": "2px" + "!important",
          "--ag-selected-tab-underline-color":
            palette.primary.main + "!important",
          "--ag-checkbox-background-color": "transparent" + "!important",
          "--ag-checkbox-checked-color": palette.primary.main + "!important",
          "--ag-checkbox-unchecked-color": palette.primary.main + "!important",
          "--ag-checkbox-indeterminate-color":
            palette.primary.main + "!important",
          "--ag-card-radius": "10px",

          "& .ag-filter-toolpanel-group-level-0": {
            borderTop: palette.primary.main + "!important",
          },
          "& .ag-group-title-bar": {
            backgroundColor: "transparent" + "!important",
          },
          "& .ag-column-select": {
            borderBottom: "1px solid" + palette.primary.main + "!important",
          },
          "& .ag-column-select-header": {
            borderBottom: "1px solid" + palette.primary.main + "!important",
          },
          "& .ag-column-drop-vertical": {
            borderBottom: "1px solid" + palette.primary.main + "!important",
          },
          "& .ag-column-drop-cell": {
            backgroundColor: palette.primary.main + "!important",
            span: {
              color: palette.common.white + "!important",
            },
          },
        },
      }}
    />
  );

  return inputGlobalStyles;
};

export default GlobalStyles;

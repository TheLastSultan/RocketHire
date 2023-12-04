import { alpha } from "@mui/material/styles";
// ----------------------------------------------------------------------

// SETUP COLORS
const GREY = {
  0: "#FFFFFF",
  50: "#F9F9F9",
  100: "#F9FAFB",
  200: "#F5F5F5",
  300: "#F4F6F8",
  400: "#DFE3E8",
  500: "#C4CDD5",
  600: "#919EAB",
  700: "#637381",
  800: "#454F5B",
  900: "#212B36",
  A100: "",
  A200: "",
  A400: "",
  A700: "",
};

const PRIMARY = {
  light: "#E6746E",
  main: "#B42719",
  dark: "#B80600",
  contrastText: "#fff",
};

const SECONDARY = {
  light: "#FA6800",
  main: "#CC5500",
  dark: "#9E4200",
  contrastText: "#fff",
};

const palette = {
  mode: "light",
  common: { black: "#000", white: "#fff" },
  primary: PRIMARY,
  secondary: SECONDARY,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: GREY[500],
  },
  background: {
    paper: "#fff",
    default: GREY[100],
  },
  action: {
    active: GREY[600],
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;

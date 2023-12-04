import React from "react";
import Link from "next/link";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" elevation={0} sx={{ px: 2 }}>
      <Toolbar disableGutters>
        <Link href="/">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1 }}
            color="common.white"
          >
            RocketHire
          </Typography>
        </Link>
        {/* You can add navigation links or buttons here */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

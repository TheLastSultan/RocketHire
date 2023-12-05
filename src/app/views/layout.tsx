import React from "react";
import { Grid } from "@mui/material";

import SidePanel from "@/components/global/SidePanel";

export default function ViewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Grid container>
      <Grid item xs={12} md={3} xl={1.5}>
        <SidePanel />
      </Grid>
      <Grid item xs={12} md={9} xl={10.5}>
        {children}
      </Grid>
    </Grid>
  );
}

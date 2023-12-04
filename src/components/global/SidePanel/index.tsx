"use client";

import React from "react";
import Link from "next/link";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  useTheme,
} from "@mui/material";

import GridViewIcon from "@mui/icons-material/GridView";

const SidePanel = () => {
  const theme = useTheme();

  return (
    <Box
      height="calc(100vh - 64px)"
      borderRight={{ xs: "none", md: `1px solid ${theme.palette.grey[600]}` }}
    >
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          pt: 1,
        }}
        component="nav"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            My Views
          </ListSubheader>
        }
      >
        <Link href="/views/1">
          <ListItemButton>
            <ListItemIcon>
              <GridViewIcon />
            </ListItemIcon>
            <ListItemText primary="Master view" />
          </ListItemButton>
        </Link>
      </List>
    </Box>
  );
};

export default SidePanel;

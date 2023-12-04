"use client";

import React from "react";
import { Stack } from "@mui/material";

import Spreadsheet from "@/components/global/Spreadsheet";
import developers from "@/common/mocks/developers";

const ViewContainer = () => {
  return (
    <Stack>
      <Spreadsheet rowData={developers} />
    </Stack>
  );
};

export default ViewContainer;

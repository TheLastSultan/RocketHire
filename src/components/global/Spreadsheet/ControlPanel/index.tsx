import React from "react";
import { Button, Stack } from "@mui/material";
import { GridApi } from "ag-grid-community";

import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import SelectAllIcon from "@mui/icons-material/SelectAll";
import DeselectIcon from "@mui/icons-material/Deselect";
import GetAppIcon from "@mui/icons-material/GetApp";
import AddIcon from "@mui/icons-material/Add";

interface ControlPanelProps {
  gridApi: GridApi | null;
  onAddRow: () => void;
  onAddColumn: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  gridApi,
  onAddRow,
  onAddColumn,
}) => (
  <Stack alignItems="center" direction="row" spacing={3} px={2}>
    <Button
      onClick={() => gridApi?.sizeColumnsToFit()}
      startIcon={<AspectRatioIcon />}
      size="small"
    >
      Fit Screen
    </Button>
    <Button
      onClick={() => gridApi?.selectAll()}
      startIcon={<SelectAllIcon />}
      size="small"
    >
      Select All
    </Button>
    <Button
      onClick={() => gridApi?.deselectAll()}
      startIcon={<DeselectIcon />}
      size="small"
    >
      Deselect All
    </Button>
    <Button
      onClick={() => gridApi?.exportDataAsCsv()}
      startIcon={<GetAppIcon />}
      size="small"
    >
      Download CSV
    </Button>
    <Button onClick={onAddRow} startIcon={<AddIcon />} size="small">
      Add Row
    </Button>
    <Button onClick={onAddColumn} startIcon={<AddIcon />} size="small">
      Add Column
    </Button>
  </Stack>
);

export default ControlPanel;

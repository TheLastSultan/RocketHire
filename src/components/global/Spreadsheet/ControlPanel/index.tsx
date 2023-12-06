import React from "react";
import { Button, Grid } from "@mui/material";
import { GridApi } from "ag-grid-community";

import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import SelectAllIcon from "@mui/icons-material/SelectAll";
import DeselectIcon from "@mui/icons-material/Deselect";
import GetAppIcon from "@mui/icons-material/GetApp";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

interface ControlPanelProps {
  gridApi: GridApi | null;
  onAddRow: () => void;
  onAddColumn: () => void;
  onRemoveSelected: () => void;
  onDeleteColumn: () => void;
}

interface ControlButtonProps {
  action: () => void | undefined;
  icon: React.JSX.Element;
  text: string;
}

const ControlButton = ({ action, icon, text }: ControlButtonProps) => (
  <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
    <Button onClick={action} startIcon={icon} size="small">
      {text}
    </Button>
  </Grid>
);

const ControlPanel: React.FC<ControlPanelProps> = ({
  gridApi,
  onAddRow,
  onAddColumn,
  onRemoveSelected,
  onDeleteColumn,
}) => {
  const buttonData = [
    {
      action: () => gridApi?.sizeColumnsToFit(),
      icon: <AspectRatioIcon />,
      text: "Fit Screen",
    },
    {
      action: () => gridApi?.selectAll(),
      icon: <SelectAllIcon />,
      text: "Select All",
    },
    {
      action: () => gridApi?.deselectAll(),
      icon: <DeselectIcon />,
      text: "Deselect All",
    },
    {
      action: () => gridApi?.exportDataAsCsv(),
      icon: <GetAppIcon />,
      text: "Get CSV",
    },
    { action: onAddRow, icon: <AddIcon />, text: "Add Row" },
    {
      action: onRemoveSelected,
      icon: <DeleteOutlineIcon />,
      text: "Delete Selected",
    },
    { action: onAddColumn, icon: <AddIcon />, text: "Add Column" },
    {
      action: onDeleteColumn,
      icon: <DeleteOutlineIcon />,
      text: "Delete Column",
    },
  ];

  return (
    <Grid container pl={2}>
      {buttonData.map((btn, index) => (
        <ControlButton
          key={index}
          action={btn.action}
          icon={btn.icon}
          text={btn.text}
        />
      ))}
    </Grid>
  );
};

export default ControlPanel;

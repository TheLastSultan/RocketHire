import React, { useState } from "react";
import { ColDef } from "ag-grid-community";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  MenuItem,
  TextField,
} from "@mui/material";

interface DeleteColumnDialogProps {
  open: boolean;
  onClose: () => void;
  columnDefs: ColDef<any, any>[];
  // eslint-disable-next-line no-unused-vars
  onDelete: (columnName: string) => void;
}

const DeleteColumnDialog = ({
  open,
  onClose,
  columnDefs,
  onDelete,
}: DeleteColumnDialogProps) => {
  const [selectedColumn, setSelectedColumn] = useState("");

  const handleDelete = () => {
    onDelete(selectedColumn);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete Column</DialogTitle>
      <DialogContent>
        <TextField
          select
          label="Column Name"
          value={selectedColumn}
          onChange={(e) => setSelectedColumn(e.target.value)}
          margin="normal"
          fullWidth
          sx={{ width: 270 }}
        >
          {columnDefs.map((colDef) => (
            <MenuItem key={colDef.field} value={colDef.field}>
              {colDef.field}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleDelete} color="primary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteColumnDialog;

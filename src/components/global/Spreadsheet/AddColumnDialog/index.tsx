import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";

interface AddColumnDialogProps {
  open: boolean;
  onClose: () => void;
  columnTypes: string[];
  newColumn: { name: string; type: string };
  setNewColumn: React.Dispatch<
    React.SetStateAction<{ name: string; type: string }>
  >;
  onAddColumn: () => void;
}

const AddColumnDialog: React.FC<AddColumnDialogProps> = ({
  open,
  onClose,
  columnTypes,
  newColumn,
  setNewColumn,
  onAddColumn,
}) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Add New Column</DialogTitle>
    <DialogContent>
      <Stack spacing={2}>
        <TextField
          autoFocus
          margin="dense"
          label="Column Name"
          fullWidth
          variant="outlined"
          value={newColumn.name}
          onChange={(e) => setNewColumn({ ...newColumn, name: e.target.value })}
          sx={{ width: 270 }}
        />
        <TextField
          select
          label="Column Type"
          value={newColumn.type}
          onChange={(e) => setNewColumn({ ...newColumn, type: e.target.value })}
          margin="normal"
          fullWidth
          sx={{ width: 270 }}
        >
          {columnTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>
      </Stack>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={onAddColumn}>Add</Button>
    </DialogActions>
  </Dialog>
);

export default AddColumnDialog;

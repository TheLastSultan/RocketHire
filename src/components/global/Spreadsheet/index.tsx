import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef, GridApi, GridReadyEvent } from "ag-grid-community";
import { Stack } from "@mui/material";
import { motion } from "framer-motion";

import { Developer } from "./interfaces";
import { StyledContainer } from "./styles";
import ControlPanel from "./ControlPanel";
import AddColumnDialog from "./AddColumnDialog";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.min.css";

interface SpreadsheetProps {
  rowData: Developer[];
}

const boxVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Spreadsheet: React.FC<SpreadsheetProps> = ({ rowData }) => {
  const [gridApi, setGridApi] = useState<GridApi | null>(null);
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    { field: "id", sortable: true, filter: true, editable: true },
    { field: "fullName", sortable: true, filter: true, editable: true },
    { field: "email", sortable: true, filter: true, editable: true },
    { field: "phoneNumber", sortable: true, filter: true, editable: true },
    { field: "expectedSalary", sortable: true, filter: true, editable: true },
    { field: "reviewed", sortable: true, filter: true, editable: true },
    { field: "resume", sortable: true, filter: true, editable: true },
    { field: "skills", sortable: true, filter: true, editable: true },
    {
      field: "status",
      sortable: true,
      filter: true,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["Hired", "Interviewing", "Applied", "Rejected"],
      },
      editable: true,
    },
  ]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newColumn, setNewColumn] = useState({ name: "", type: "" });
  const columnTypes = ["String", "Number", "List"];

  const onGridReady = (params: GridReadyEvent) => {
    setGridApi(params.api);
  };

  const addRow = () => {
    const maxId = rowData.reduce((max, row) => Math.max(max, row.id), 0);
    const newRow = {
      id: maxId + 1,
      fullName: "",
      email: "",
      phoneNumber: "",
      expectedSalary: "",
      reviewed: "",
      resume: "",
      skills: "",
      status: "",
    };
    gridApi?.applyTransaction({ add: [newRow] });
  };

  const addColumn = () => {
    setIsDialogOpen(true);
  };

  const handleAddColumn = () => {
    const newColumnDef = {
      field: newColumn.name,
      headerName: newColumn.name,
      sortable: true,
      filter: true,
      editable: true,
    };
    setColumnDefs([...columnDefs, newColumnDef]);
    setIsDialogOpen(false);
    setNewColumn({ name: "", type: "" });
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={boxVariants}>
      <Stack spacing={2} mt={2}>
        {gridApi && (
          <ControlPanel
            gridApi={gridApi}
            onAddRow={addRow}
            onAddColumn={addColumn}
          />
        )}

        <StyledContainer className="ag-theme-alpine">
          <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            onGridReady={onGridReady}
            animateRows={true}
            rowSelection="multiple"
          />
        </StyledContainer>

        <AddColumnDialog
          open={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          columnTypes={columnTypes}
          newColumn={newColumn}
          setNewColumn={setNewColumn}
          handleAddColumn={handleAddColumn}
        />
      </Stack>
    </motion.div>
  );
};

export default Spreadsheet;

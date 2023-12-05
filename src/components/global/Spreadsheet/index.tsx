import React, { useCallback, useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef, GridApi, GridReadyEvent, SideBarDef } from "ag-grid-community";
import { Stack } from "@mui/material";
import { motion } from "framer-motion";

import { IOlympicData } from "./interfaces";
import { StyledContainer } from "./styles";
import ControlPanel from "./ControlPanel";
import AddColumnDialog from "./AddColumnDialog";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.min.css";
import "ag-grid-enterprise";

const boxVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Spreadsheet: React.FC = () => {
  const [gridApi, setGridApi] = useState<GridApi | null>(null);
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    {
      field: "athlete",
      filter: "agTextColumnFilter",
      minWidth: 200,
      cellDataType: "text",
    },
    { field: "age", cellDataType: "number" },
    { field: "country", minWidth: 180, cellDataType: "text" },
    { field: "year", cellDataType: "number" },
    { field: "date", minWidth: 150, cellDataType: "text" },
    { field: "gold", cellDataType: "number" },
    { field: "silver", cellDataType: "number" },
    { field: "bronze", cellDataType: "number" },
    { field: "total", cellDataType: "number" },
  ]);
  const [rowData, setRowData] = useState<IOlympicData[]>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newColumn, setNewColumn] = useState({ name: "", type: "" });
  const columnTypes = ["String", "Number", "List"];

  const onGridReady = useCallback(
    (params: GridReadyEvent) => {
      setGridApi(params.api);

      try {
        gridApi?.showLoadingOverlay();
        fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
          .then((resp) => resp.json())
          .then((data: IOlympicData[]) => setRowData(data));
        gridApi?.hideOverlay();
      } catch (error) {
        console.log("Error getting view data.");
      }
    },
    [gridApi]
  );

  const addRow = () => {
    const newRow = {
      athlete: "New Field",
      age: 0,
      country: "",
      year: 0,
      date: "",
      gold: 0,
      silver: 0,
      bronze: 0,
      total: 0,
    };
    gridApi?.applyTransaction({ add: [newRow] });
  };

  const addColumn = () => {
    setIsDialogOpen(true);
  };

  const handleAddColumn = () => {
    if (!newColumn.name) {
      setIsDialogOpen(false);
      return;
    }

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

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      flex: 1,
      minWidth: 100,
      enableValue: true,
      enableRowGroup: true,
      enablePivot: true,
      filter: true,
    };
  }, []);

  const autoGroupColumnDef = useMemo<ColDef>(() => {
    return {
      minWidth: 200,
    };
  }, []);

  const sideBar = useMemo<
    SideBarDef | string | string[] | boolean | null
  >(() => {
    return {
      toolPanels: [
        {
          id: "columns",
          labelDefault: "Columns",
          labelKey: "columns",
          iconKey: "columns",
          toolPanel: "agColumnsToolPanel",
        },
        {
          id: "filters",
          labelDefault: "Filters",
          labelKey: "filters",
          iconKey: "filter",
          toolPanel: "agFiltersToolPanel",
        },
      ],
      defaultToolPanel: "customStats",
    };
  }, []);

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
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            autoGroupColumnDef={autoGroupColumnDef}
            sideBar={sideBar}
            onGridReady={onGridReady}
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

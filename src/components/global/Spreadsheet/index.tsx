import React, { useCallback, useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef, GridApi, GridReadyEvent, SideBarDef } from "ag-grid-community";
import { Stack } from "@mui/material";
import { motion } from "framer-motion";

import { IOlympicData } from "./interfaces";
import { StyledContainer } from "./styles";
import ControlPanel from "./ControlPanel";
import AddColumnDialog from "./AddColumnDialog";
import DeleteColumnDialog from "./DeleteColumnDialog";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.min.css";
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
  const [isAddColDialogOpen, setIsAddColDialogOpen] = useState(false);
  const [isDeleteColDialogOpen, setIsDeleteColDialogOpen] = useState(false);
  const [newColumn, setNewColumn] = useState({ name: "", type: "" });
  const gridRef = useRef<AgGridReact>(null);
  const columnTypes = [
    "text",
    "number",
    "boolean",
    "date",
    "dateString",
    "object",
  ];

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
    gridApi?.applyTransaction({ add: [newRow], addIndex: 0 });
  };

  const onAddColumn = () => {
    if (!newColumn.name) {
      setIsAddColDialogOpen(false);
      return;
    }

    const newColumnDef: ColDef = {
      field: newColumn.name,
      headerName: newColumn.name,
      cellDataType: newColumn.type,
    };
    setColumnDefs([...columnDefs, newColumnDef]);
    setIsAddColDialogOpen(false);
    setNewColumn({ name: "", type: "" });
  };

  const onRemoveSelected = useCallback(() => {
    const selectedData = gridRef.current!.api.getSelectedRows();
    gridRef.current!.api.applyTransaction({
      remove: selectedData,
    })!;
  }, []);

  const onDeleteColumn = useCallback((columnName: string) => {
    setColumnDefs((currentDefs) =>
      currentDefs.filter((colDef) => colDef.field !== columnName)
    );
    setIsDeleteColDialogOpen(false);
  }, []);

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      flex: 1,
      minWidth: 100,
      enableValue: true,
      enableRowGroup: true,
      enablePivot: true,
      filter: true,
      editable: true,
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
            onAddColumn={() => setIsAddColDialogOpen(true)}
            onDeleteColumn={() => setIsDeleteColDialogOpen(true)}
            onRemoveSelected={onRemoveSelected}
          />
        )}

        <StyledContainer className="ag-theme-quartz">
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            autoGroupColumnDef={autoGroupColumnDef}
            sideBar={sideBar}
            onGridReady={onGridReady}
            rowSelection="multiple"
            pagination={true}
            paginationPageSizeSelector={[20, 50, 100, 200, 500, 1000]}
          />
        </StyledContainer>

        <AddColumnDialog
          open={isAddColDialogOpen}
          onClose={() => setIsAddColDialogOpen(false)}
          columnTypes={columnTypes}
          newColumn={newColumn}
          setNewColumn={setNewColumn}
          onAddColumn={onAddColumn}
        />

        <DeleteColumnDialog
          open={isDeleteColDialogOpen}
          onClose={() => setIsDeleteColDialogOpen(false)}
          columnDefs={columnDefs}
          onDelete={onDeleteColumn}
        />
      </Stack>
    </motion.div>
  );
};

export default Spreadsheet;

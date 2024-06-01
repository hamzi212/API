import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";

interface ColumnDefinition {
    key: string;
    label: string;
    displayField?: (row: any) => JSX.Element;
}

interface BAGridProps {
    loading: boolean;
    datasource: any[];
    gridCols: ColumnDefinition[];
}

const BAGrid: React.FC<BAGridProps> = ({ loading, datasource, gridCols }) => {
    return (
        <TableContainer>
            {loading && <CircularProgress />}
            {!loading && (
                <Table>
                    <TableHead>
                        <TableRow>
                            {gridCols.map(col => (
                                <TableCell key={col.key}>{col.label}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {datasource.map((row, index) => (
                            <TableRow key={index}>
                                {gridCols.map(col => (
                                    <TableCell key={col.key}>
                                        {col.displayField ? col.displayField(row) : row[col.key]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </TableContainer>
    );
};

export default BAGrid;

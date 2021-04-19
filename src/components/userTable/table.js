import React from "react";
import './style.css'
import { useTable } from 'react-table';
import { Table } from "react-bootstrap";



 const ReactTable = ({ columns, data }) => {
    // you can get the react table functions by using the hook useTable
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow
    } = useTable({
      columns,
      data
    });
    
    return (
      <Table variant="dark" striped='true' bordered {...getTableProps()} className="tablebg">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => {
                const {render, getHeaderProps} = column
                return (
                  <th {...getHeaderProps()}>{render("Header")}</th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  };
  
  export default ReactTable;
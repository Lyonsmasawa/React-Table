import React, { useMemo } from 'react'
import { useRowSelect, useTable } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { GROUPED_COLUMNS } from './columns'
// import { COLUMNS } from './columns'

const RowSelectionTable = () => {
  const columns = useMemo(() => GROUPED_COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  // RECOMMENDS YOU TO MEMOIZE THE DATA AND COLUMNS TO PREVENNT UNNECESSARY RERENDERING
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
    selectedFlatRows,
  } = useTable({
    columns,
    data
  }, useRowSelect)

  const firstPageRows = rows.slice(0, 10)

  return (
    <div>
      <table {...getTableProps}>
        <thead>
          {
            headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        <tbody {...getTableBodyProps}>
          {
            firstPageRows.map((row) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {
                    row.cells.map((cell) => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
        <tfoot>
          {
            footerGroups.map((footerGroup) => (
              <tr {...footerGroup.getFooterGroupProps()}>
                {
                  footerGroup.headers.map((column) => (
                    <td {...column.getFooterProps()}>
                      {column.render('Footer')}
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tfoot>
      </table>
    </div>
  )
}

export default RowSelectionTable

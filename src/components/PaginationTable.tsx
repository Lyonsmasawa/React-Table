import React, { useMemo } from 'react'
import { usePagination, useTable } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { GROUPED_COLUMNS } from './columns'
// import { COLUMNS } from './columns'

const PaginationTable = () => {
    const columns = useMemo(() => GROUPED_COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    // RECOMMENDS YOU TO MEMOIZE THE DATA AND COLUMNS TO PREVENNT UNNECESSARY RERENDERING
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        prepareRow,
        footerGroups,
    } = useTable({
        columns,
        data
    }, usePagination)

    const {pageIndex} = state

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
                        page.map((row) => {
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
            </table>
            <span>
                Page {' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>
            </span>
            <div className="">
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
            </div>
        </div>
    )
}

export default PaginationTable

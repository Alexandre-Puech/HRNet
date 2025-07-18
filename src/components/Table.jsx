import { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import { useSelector } from "react-redux";
import "../styles/css/Table.css";

const columnHelper = createColumnHelper();

export default function Table() {
  const employees = useSelector((state) => state.employee.employees) || [];

  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);

  const columns = useMemo(
    () => [
      columnHelper.accessor("firstName", {
        header: () => "First Name",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("lastName", {
        header: () => "Last Name",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("startDate", {
        header: () => "Start Date",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("department", {
        header: () => "Department",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("dateOfBirth", {
        header: () => "Date of Birth",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("street", {
        header: () => "Street",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("city", {
        header: () => "City",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("state", {
        header: () => "State",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("zipCode", {
        header: () => "Zip Code",
        cell: (info) => info.getValue(),
      }),
    ],
    []
  );

  const table = useReactTable({
    data: employees,
    columns,
    state: {
      globalFilter,
      sorting,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: (row, columnId, filterValue) => {
      const value = row.getValue(columnId);
      return String(value).toLowerCase().includes(filterValue.toLowerCase());
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="table-container">
      <div className="table-controls">
        <label>
          Show{" "}
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
          >
            {[10, 25, 50, 100].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>{" "}
          entries
        </label>

        <label>
          Search:{" "}
          <input
            type="text"
            value={globalFilter ?? ""}
            onChange={(e) => {
              const raw = e.target.value;
              const cleaned = raw.replace(/[^a-zA-Z0-9/]/g, "");
              setGlobalFilter(cleaned);
            }}
          />
        </label>
      </div>

      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  style={{ cursor: "pointer" }}
                >
                  <div className="header-cell">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    <span className="sort-icons">
                      <span
                        className={
                          header.column.getIsSorted() === "desc" ? "active" : ""
                        }
                      >
                        ▲
                      </span>
                      <span
                        className={
                          header.column.getIsSorted() === "asc" ? "active" : ""
                        }
                      >
                        ▼
                      </span>
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="table-footer">
        <div className="table-info">
          Showing{" "}
          {table.getState().pagination.pageIndex *
            table.getState().pagination.pageSize +
            1}{" "}
          to{" "}
          {Math.min(
            (table.getState().pagination.pageIndex + 1) *
              table.getState().pagination.pageSize,
            table.getFilteredRowModel().rows.length
          )}{" "}
          of {table.getFilteredRowModel().rows.length} entries
        </div>

        <div className="pagination">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </button>

          {(() => {
            const currentPage = table.getState().pagination.pageIndex;
            const totalPages = table.getPageCount();
            const maxVisiblePages = 5;
            const pages = [];

            let start = Math.max(
              0,
              currentPage - Math.floor(maxVisiblePages / 2)
            );
            let end = start + maxVisiblePages;

            if (end > totalPages) {
              end = totalPages;
              start = Math.max(0, end - maxVisiblePages);
            }

            for (let i = start; i < end; i++) {
              pages.push(
                <button
                  key={i}
                  onClick={() => table.setPageIndex(i)}
                  disabled={i === currentPage}
                  className={i === currentPage ? "active" : ""}
                >
                  {i + 1}
                </button>
              );
            }

            if (end < totalPages) {
              pages.push(<span key="dots">...</span>);
              pages.push(
                <button
                  key={totalPages - 1}
                  onClick={() => table.setPageIndex(totalPages - 1)}
                >
                  {totalPages}
                </button>
              );
            }

            return pages;
          })()}

          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

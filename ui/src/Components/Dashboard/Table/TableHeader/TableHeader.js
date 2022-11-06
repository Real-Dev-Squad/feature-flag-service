import { useState } from "react";

import { camelCaseToNormal } from "../../../../Utils/helpers";
import SortCursor from "./SortCursor";
import { TABLE } from "../../../../Constant/constant";

export default function TableHeader({ headers, handleSorting }) {
  const [currentClickedCursor, setCurrentClickedCursor] = useState(null);
  const [currentSortedColumn, setCurrentSortedColumn] = useState(null);

  const onCursorClick = (headerName, isSortConfigured) => {
    if (!isSortConfigured) return;
    let clickedCursorType =
      currentClickedCursor == TABLE.ASCENDING
        ? TABLE.DESCENDING
        : TABLE.ASCENDING;
    setCurrentClickedCursor(clickedCursorType);
    setCurrentSortedColumn(headerName);
    handleSorting(clickedCursorType, headerName);
  };
  return (
    <thead>
      <tr className="text-teal-700 text-xs">
        {headers.map((heading, index) => (
          <th
            data-testid="columnheader"
            className="p-4 cursor-pointer"
            key={index}
            onClick={() => {
              onCursorClick(heading.headerName, heading.sortable);
            }}
          >
            <div className="flex justify-between">
              {camelCaseToNormal(heading.headerName)}

              {heading.sortable ? (
                <SortCursor
                  currentClickedCursor={
                    heading.headerName == currentSortedColumn
                      ? currentClickedCursor
                      : null
                  }
                />
              ) : null}
            </div>
          </th>
        ))}

        <th className="p-4">{TABLE.ENABLED}</th>
      </tr>
    </thead>
  );
}

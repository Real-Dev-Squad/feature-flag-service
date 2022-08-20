import { useState } from "react";
import { TABLE } from "../../../../Constant/constant";

export default function SortCursor({ header, handleSorting }) {
  const [currentClickedCursor, setCurrentClickedCursor] = useState(null);

  const onCursorClick = (clickedCursorType, headerName) => {
    setCurrentClickedCursor(clickedCursorType);
    handleSorting(clickedCursorType, headerName);
  };

  return (
    <div>
      <div
        className={`up-arrow ${
          currentClickedCursor === TABLE.ASCENDING ? "clicked-u" : null
        }`}
        title={TABLE.ASCENDING}
        onClick={() => {
          onCursorClick(TABLE.ASCENDING, header);
        }}
      ></div>
      <div
        className={`down-arrow ${
          currentClickedCursor === TABLE.DESCENDING ? "clicked-d" : null
        }`}
        title={TABLE.DESCENDING}
        onClick={(e) => {
          onCursorClick(TABLE.DESCENDING, header);
        }}
      ></div>
    </div>
  );
}

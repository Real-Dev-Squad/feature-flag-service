import { useState } from "react";
import { TABLE } from "../../../../Constant/constant";

export default function SortCursor(props) {
  const [currentClickedCursor, setCurrentClickedCursor] = useState("");

  const onCursorClick = (clickedCursorType,headerName) =>{
    setCurrentClickedCursor(clickedCursorType);
    props.handleSorting(clickedCursorType, headerName);
  }

  return (
    <div>
      <div
        className={`up-arrow ${
          currentClickedCursor === TABLE.ASCENDING ? "clicked-u" : ''
        }`}
        title={TABLE.ASCENDING}
        onClick={() => {
          onCursorClick(TABLE.ASCENDING, props.header);
        }}
      ></div>
      <div
        className={`down-arrow ${
          currentClickedCursor === TABLE.DESCENDING ? "clicked-d" : ''
        }`}
        title={TABLE.DESCENDING}
        onClick={(e) => {
          onCursorClick(TABLE.DESCENDING, props.header);
        }}
      ></div>
    </div>
  );
}

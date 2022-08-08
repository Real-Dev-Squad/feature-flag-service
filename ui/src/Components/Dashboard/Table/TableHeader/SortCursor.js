import { useState } from "react";

import { TABLE } from "../../../../Constant/constant";

export default function SortCursor(props) {
  const [currentClickedCursor, setCurrentClickedCursor] = useState("");

  const onClickUpArrow = (args, headerName) => {
    setCurrentClickedCursor(TABLE.UPCURSOR);
    props.handleSorting(TABLE.ASCENDING, headerName);
  };
  const onClickDownArrow = (args, headerName) => {
    setCurrentClickedCursor(TABLE.DOWNCURSOR);
    props.handleSorting(TABLE.DESCENDING, headerName);
  };

  return (
    <div>
      <div
        className={`up-arrow${
          currentClickedCursor === TABLE.UPCURSOR ? '-clicked' : ''
        }`}
        title={TABLE.ASCENDING}
        onClick={(e) => {
          onClickUpArrow(e, props.header);
        }}
      ></div>
      <div
        className={`down-arrow${
          currentClickedCursor === TABLE.DOWNCURSOR ? '-clicked' : ''
        }`}
        title={TABLE.DESCENDING}
        onClick={(e) => {
          onClickDownArrow(e, props.header);
        }}
      ></div>
    </div>
  );
}

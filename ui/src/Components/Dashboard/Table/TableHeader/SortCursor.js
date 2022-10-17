import { TABLE } from "../../../../Constant/constant";

export default function SortCursor({ currentClickedCursor }) {
  return (
    <div>
      <div
        data-testid = "sortCursorAscending"
        className={`up-arrow ${
          currentClickedCursor === TABLE.ASCENDING ? "clicked-u" : null
        }`}
        title={TABLE.ASCENDING}
      ></div>
      <div
        data-testid = "sortCursorDescending"
        className={`down-arrow ${
          currentClickedCursor === TABLE.DESCENDING ? "clicked-d" : null
        }`}
        title={TABLE.DESCENDING}
      ></div>
    </div>
  );
}

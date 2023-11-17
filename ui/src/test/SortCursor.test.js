import {render, screen } from "@testing-library/react";
import SortCursor from "../Components/Dashboard/Table/TableHeader/SortCursor";
import { TABLE } from "../Constant/constant";

describe("SortCursor Component", () => {
  it("Should render the SortCursor Component, which includes Ascending cursor", () => {
    render(<SortCursor />);

    const cursor = screen.getByTitle(TABLE.ASCENDING);
    expect(cursor).toBeInTheDocument();
  });

  it("Should render the SortCursor Component, which includes Descending cursor", () => {
    render(<SortCursor />);

    const cursor = screen.getByTitle(TABLE.DESCENDING);
    expect(cursor).toBeInTheDocument();
  });
});

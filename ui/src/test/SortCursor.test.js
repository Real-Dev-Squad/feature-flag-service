import { fireEvent, render, screen } from "@testing-library/react";
import sinon from 'sinon';
import SortCursor from "../Components/Dashboard/Table/TableHeader/SortCursor";
import { TABLE } from "../Constant/constant";

describe("SortCursor Component", () => {

    it("Should render the SortCursor Component with Ascending cursor", () => {
      render(<SortCursor />)

      const cursor = screen.getByTitle(TABLE.ASCENDING)
      expect(cursor).toBeInTheDocument(); 
    })

    it("Should render the SortCursor Component with Descending cursor", () => {
      render(<SortCursor />)

      const cursor = screen.getByTitle(TABLE.DESCENDING)
      expect(cursor).toBeInTheDocument();
       
    })

    it("Should fire event on click ascending", async () => {
      const mockFn = sinon.spy();
      render(<SortCursor handleSorting={mockFn}/>)
  
      const cursor = screen.getByTitle(TABLE.ASCENDING)
      await fireEvent.click(cursor);
      expect(mockFn.callCount).toEqual(1);
      
    })

    it("Should fire event on click descending", async () => {
      const mockFn = sinon.spy();
      render(<SortCursor handleSorting={mockFn}/>)
  
      const cursor = screen.getByTitle(TABLE.DESCENDING)
      await fireEvent.click(cursor);
      expect(mockFn.callCount).toEqual(1);
      
    })

  
  }) 


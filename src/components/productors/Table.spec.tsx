import { Table } from "./Table";
import {render} from '@testing-library/react'

describe("Table component testing with testing-library", () => {
  it("renders without crashing", () => {
    const component = render(<Table data={[]} onDelete={function (id: any): void {
      throw new Error("Function not implemented.");
    } } />);
    expect(component).toBeTruthy();
  });
});

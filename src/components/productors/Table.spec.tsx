import { Table } from "./Table";
import {render} from '@testing-library/react'

describe("Table component testing with testing-library", () => {
  it("renders without crashing", () => {
    const component = render(<Table data={[]} />);
    expect(component).toBeTruthy();
  });
});

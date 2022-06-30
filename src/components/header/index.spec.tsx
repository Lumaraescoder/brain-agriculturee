import { render } from "@testing-library/react";
import { Header } from "./index";

describe("Wrapper component testing with testing-library", () => {
  const component = render(<Header />);

  it("renders without crashing", () => {
    expect(component).toBeTruthy();
  });
});

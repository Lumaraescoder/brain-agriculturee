import EditProductorss from "./[id]";
import { render } from "@testing-library/react";
import configureStore, { MockStore } from "redux-mock-store";
import { Provider } from "react-redux";

describe("Should render without crashing", () => {
  it("Should render without crashing", () => {
    const mockStore = configureStore();
    let store = mockStore();
    const { container } = render(
      <Provider store={store}>
        <EditProductorss />
      </Provider>
    );
    expect(container).toBeTruthy();
  });
});

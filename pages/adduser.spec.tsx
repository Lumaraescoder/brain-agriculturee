import AddUsers from "./adduser";
import { render } from "@testing-library/react";
import configureStore, { MockStore } from "redux-mock-store";
import { Provider } from "react-redux";

describe("Should render without crashing", () => {
  it("Should render without crashing", () => {
    const mockStore = configureStore();
    let store = mockStore();
    const { container } = render(
      <Provider store={store}>
        <AddUsers />
      </Provider>
    );
    expect(container).toBeTruthy();
  });
});
